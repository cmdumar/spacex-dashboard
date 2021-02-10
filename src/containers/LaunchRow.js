import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import setLaunch from '../redux/actions/launchActions';
import launchStatus from '../helpers/launchStatus';

const StyledTableCell = withStyles(() => ({
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
    borderBottomColor: 'transparent',
  },
});

function LaunchRow({ launch, setLaunch, handleModalState }) {
  const classes = useStyles();

  const handleClick = launch => {
    setLaunch(launch);
    handleModalState();
  };

  return (
    <TableRow
      key={launch.launch_date_utc}
      className={classes}
      onClick={() => handleClick(launch)}
    >
      <StyledTableCell className={classes.root} component="th" scope="row" align="left">
        {launch.flight_number}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {moment(launch.launch_date_utc).format('DD MMMM YYYY, HH:mm')}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {launch.launch_site.site_name}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {launch.mission_name}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {launch.rocket.second_stage.payloads[0].orbit}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="center">
        {launchStatus(launch.launch_success)}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">{launch.rocket.rocket_name}</StyledTableCell>
    </TableRow>
  );
}

LaunchRow.propTypes = {
  launch: PropTypes.instanceOf(Object).isRequired,
  setLaunch: PropTypes.func.isRequired,
  handleModalState: PropTypes.func.isRequired,
};

export default connect(null, { setLaunch })(LaunchRow);
