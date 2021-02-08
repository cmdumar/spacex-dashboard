import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, makeStyles, styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import setLaunch from '../redux/actions/launchActions';

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
  },
});

const MyChipSuccess = styled(Chip)({
  backgroundColor: '#DEF7EC',
  color: '#03543F',
  padding: '4px 12px',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '13px',
});

const MyChipFailure = styled(Chip)({
  backgroundColor: '#FDE2E1',
  color: '#981B1C',
  padding: '4px 12px',
});

function LaunchRow({ launch, setLaunch }) {
  const classes = useStyles();

  const handleClick = launch => {
    setLaunch(launch);
  };

  return (
    <TableRow key={launch.launch_date_utc} onClick={() => handleClick(launch)}>
      <StyledTableCell className={classes.root} component="th" scope="row" align="left">
        {launch.flight_number}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {moment(launch.launch_date_utc).format('DD MMMM YYYY, HH:mm')}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">{launch.launch_site.site_name}</StyledTableCell>
      <StyledTableCell className={classes.root} align="left">{launch.mission_name}</StyledTableCell>
      <StyledTableCell className={classes.root} align="left">
        {launch.rocket.second_stage.payloads[0].orbit}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="center">
        {launch.launch_success ? <MyChipSuccess label="Success" size="small" /> : <MyChipFailure label="Failure" size="small" />}
      </StyledTableCell>
      <StyledTableCell className={classes.root} align="left">{launch.rocket.rocket_name}</StyledTableCell>
    </TableRow>
  );
}

LaunchRow.propTypes = {
  launch: PropTypes.instanceOf(Object).isRequired,
  setLaunch: PropTypes.func.isRequired,
};

export default connect(null, { setLaunch })(LaunchRow);