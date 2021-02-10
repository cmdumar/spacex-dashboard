import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Loader from 'react-loader-spinner';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/core/Pagination';
import fetchLaunches from '../redux/actions/launchesActions';
import LaunchRow from './LaunchRow';
import FilterLaunches from '../components/FilterLaunches';
import setLaunch from '../redux/actions/launchActions';
import DateModal from '../components/DateFilterModal/DateModal';
import LaunchModal from '../components/LaunchModal/LaunchModal';
import useStyles from './LaunchesStyles';

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

function Launches({
  error, loading, launches, ...props
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { match, location, history } = props;
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);

  console.log('History', match, location, history);

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

  let row;

  if (loading) {
    row = (
      <TableRow>
        <TableCell className={`${classes.loading} ${classes.spinner}`}>
          <Loader
            type="Oval"
            color="#e4e4e7"
            height={100}
            width={100}
          />
        </TableCell>
      </TableRow>
    );
  } else if (!loading && error.length !== 0) {
    row = (
      <TableRow>
        <TableCell
          className={classes.loading}
        >
          Unable to fetch launch data!
        </TableCell>
      </TableRow>
    );
  } else if (!loading && data.length === 0) {
    row = (
      <TableRow>
        <TableCell
          className={classes.loading}
        >
          No results found for the specified filter
        </TableCell>
      </TableRow>
    );
  } else if (!loading && data.length !== 0) {
    row = data.slice(startIdx, endIdx).map(launch => (
      <LaunchRow
        key={launch.flight_number + launch.launch_date_utc}
        launch={launch}
        handleModalState={handleModalState}
      />
    ));
  }

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
            {row}
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
  error: PropTypes.string,
  loading: PropTypes.bool,
  launches: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

Launches.defaultProps = {
  error: '',
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

export default connect(mapStateToProps, { setLaunch })(withRouter(Launches));
