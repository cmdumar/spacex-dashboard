import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  failed: {
    backgroundColor: '#FDE2E1',
    color: '#981B1C',
    padding: '4px 12px',
  },
});

const MyChipFailure = () => {
  const classes = useStyles();

  return (
    <Chip
      label="Failed"
      size="small"
      className={classes.failed}
    />
  );
};

export default MyChipFailure;
