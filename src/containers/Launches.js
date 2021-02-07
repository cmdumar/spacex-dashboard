import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import fetchLaunches from '../redux/actions';
import './Launches.css';

const StyledTableCell = withStyles(() => ({
  head: {
    color: '#4B5563',
  },
  body: {
    fontSize: 12,
    fontWeight: 500,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
  },

  head: {
    backgroundColor: '#F4F5F7',
    color: '#4B5563',
  },
});

function Launches({ loading, launches }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  console.log('launches', launches);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <TableContainer className="table-container">
      <Table className={classes.root} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <StyledTableCell>No:</StyledTableCell>
            <StyledTableCell>Launched (UTC)</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Mission</StyledTableCell>
            <StyledTableCell>Orbit</StyledTableCell>
            <StyledTableCell>Launch Status</StyledTableCell>
            <StyledTableCell>Rocket</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launches.map(l => (
            <TableRow key={l.flight_number}>
              <TableCell component="th" scope="row">
                {l.flight_number}
              </TableCell>
              <TableCell>{l.launch_date_utc.toString()}</TableCell>
              <TableCell>{l.launch_site.site_name}</TableCell>
              <TableCell>{l.mission_name}</TableCell>
              <TableCell>
                {l.rocket.second_stage.payloads[0].orbit}
              </TableCell>
              <TableCell>{l.launch_success ? 'success' : 'failure'}</TableCell>
              <TableCell>{l.rocket.rocket_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Launches.propTypes = {
  // error: PropTypes.string,
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

export default connect(mapStateToProps, null)(Launches);
