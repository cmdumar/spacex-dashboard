import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import fetchLaunches from '../redux/actions/launchesActions';
import LaunchRow from './LaunchRow';
import FilterLaunches from '../components/FilterLaunches';
import setLaunch from '../redux/actions/launchActions';
import DateFilter from '../components/DateFilter';
import './Launches.css';

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
  },

  head: {
    backgroundColor: '#F4F5F7',
    color: '#4B5563',
  },
});

function Launches({ loading, launches }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDate = value => {
    setStartDate(value);
  };

  const handleEndDate = value => {
    setEndDate(value);
  };

  console.log('Start Date', startDate);
  console.log('End Date', endDate);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchLaunches(filter));
  }, [filter]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <div>Loading</div>;
  }

  let data;

  if (filter === 'failed') {
    data = launches.filter(l => l.launch_success === false);
  } else if (filter === 'success') {
    data = launches.filter(l => l.launch_success === true);
  } else {
    data = launches;
  }

  const endIdx = page * 12;
  const startIdx = endIdx - 12;

  return (
    <>
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
      />
      <FilterLaunches filter={filter} handleChange={handleChange} />
      <TableContainer className="table-container">
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
          <TableBody className={classes.root}>
            {data.slice(startIdx, endIdx).map(launch => (
              <LaunchRow
                key={launch.launch_date_utc}
                launch={launch}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={Math.ceil(launches.length / 12)} onChange={handleChangePage} page={page} shape="rounded" />
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
