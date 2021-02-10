import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/core/Pagination';
import fetchLaunches from '../redux/actions/launchesActions';
import LaunchRow from './LaunchRow';
import FilterLaunches from '../components/FilterLaunches';
import setLaunch from '../redux/actions/launchActions';
import DateModal from '../components/DateFilterModal/DateModal';
import './Launches.css';
import LaunchModal from '../components/LaunchModal/LaunchModal';

const StyledTableCell = withStyles(() => ({
  head: {
    color: '#4B5563',
  },
  body: {
    fontSize: 12,
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    color: '#1F2937',
    minHeight: '676px',
    position: 'relative',
  },

  table_container: {
    minWidth: '952px',
    maxWidth: '952px',
    border: '1px solid #e4e4e7',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  },

  loading: {
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
  },

  head: {
    backgroundColor: '#F4F5F7',
    color: '#4B5563',
  },

  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '48px',
  },

  pagination: {
    marginTop: '20px',
    width: '100%',

    '& ul': {
      display: 'flex',
      justifyContent: 'flex-end',

      '& li': {
        border: '1px solid #e4e4e7',
        height: '40px',
        width: '40px',

        '&:first-child': {
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
        },

        '&:last-child': {
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
        },

        '& button': {
          color: '#4b5563',
          width: '40px',
          height: '40px',
          textAlign: 'center',
          fontSize: '12px',
          lineHeight: '16px',
        },

        '& div': {
          height: '40px',
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          paddingTop: '10px',
          paddingLeft: '9px',
        },
      },
    },
  },
});

function Launches({ loading, launches }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleStartDate = value => {
    setStartDate(value);
  };

  const handleEndDate = value => {
    setEndDate(value);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleModalState = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(fetchLaunches(filter));
  }, [filter]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  let data;

  if (filter === 'failed') {
    data = launches.filter(l => l.launch_success === false);
  } else if (filter === 'success') {
    data = launches.filter(l => l.launch_success === true);
  } else {
    data = launches;
  }

  if (startDate && endDate) {
    data = data.filter(l => moment(l.launch_date_utc).isSameOrAfter(startDate)
      && moment(l.launch_date_utc).isSameOrBefore(endDate));
  }

  const endIdx = page * 12;
  const startIdx = endIdx - 12;

  return (
    <>
      <LaunchModal open={open} handleClose={handleModalState} />
      <div className={classes.filterContainer}>
        <DateModal
          startDate={startDate}
          endDate={endDate}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
        />
        <FilterLaunches filter={filter} handleChange={handleChange} />
      </div>
      <TableContainer className={classes.table_container}>
        <Table className={classes.root} aria-label="simple table">
          <TableHead className={classes.head}>
            <TableRow>
              <StyledTableCell align="left">No:</StyledTableCell>
              <StyledTableCell align="left">Launched (UTC)</StyledTableCell>
              <StyledTableCell align="left">Location</StyledTableCell>
              <StyledTableCell align="left">Mission</StyledTableCell>
              <StyledTableCell align="left">Orbit</StyledTableCell>
              <StyledTableCell align="center">Launch Status</StyledTableCell>
              <StyledTableCell align="left">Rocket</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={`${classes.root}`}>
            {loading ? (
              <TableRow>
                <TableCell className={classes.loading}>
                  <p>Loading</p>
                </TableCell>
              </TableRow>
            )
              : data.slice(startIdx, endIdx).map(launch => (
                <LaunchRow
                  key={launch.flight_number + launch.launch_date_utc}
                  launch={launch}
                  handleModalState={handleModalState}
                />
              ))}

            {!loading && data.length === 0 ? (
              <TableRow>
                <TableCell
                  className={classes.loading}
                >
                  No results found for the specified filter
                </TableCell>
              </TableRow>
            ) : null }
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(data.length / 12)}
        onChange={handleChangePage}
        page={page}
        shape="rounded"
        variant="outlined"
        className={classes.pagination}
      />
    </>
  );
}

Launches.propTypes = {
  loading: PropTypes.bool,
  launches: PropTypes.instanceOf(Object),
};

Launches.defaultProps = {
  // error: '',
  loading: false,
  launches: [],
};

function mapStateToProps(store) {
  const { loading, launches, error } = store.launches;
  return {
    loading,
    launches,
    error,
  };
}

export default connect(mapStateToProps, { setLaunch })(Launches);
