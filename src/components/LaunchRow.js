import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';

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

function LaunchRow({ launches }) {
  const classes = useStyles();

  return (
    launches.map(l => (
      <TableRow key={l.launch_date_utc}>
        <StyledTableCell className={classes.root} component="th" scope="row" align="left">
          {l.flight_number}
        </StyledTableCell>
        <StyledTableCell className={classes.root} align="left">
          {moment(l.launch_date_utc).format('DD MMMM YYYY, HH:mm')}
        </StyledTableCell>
        <StyledTableCell className={classes.root} align="left">{l.launch_site.site_name}</StyledTableCell>
        <StyledTableCell className={classes.root} align="left">{l.mission_name}</StyledTableCell>
        <StyledTableCell className={classes.root} align="left">
          {l.rocket.second_stage.payloads[0].orbit}
        </StyledTableCell>
        <StyledTableCell className={classes.root} align="center">
          {l.launch_success ? <MyChipSuccess label="Success" size="small" /> : <MyChipFailure label="Failure" size="small" />}
        </StyledTableCell>
        <StyledTableCell className={classes.root} align="left">{l.rocket.rocket_name}</StyledTableCell>
      </TableRow>
    ))
  );
}

LaunchRow.propTypes = {
  launches: PropTypes.instanceOf(Object).isRequired,
};

export default LaunchRow;
