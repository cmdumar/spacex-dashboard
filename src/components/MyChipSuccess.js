import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  success: {
    backgroundColor: '#deF7ec',
    color: '#03543F',
    padding: '4px 12px',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '13px',
  },
});

const MyChipSuccess = () => {
  const classes = useStyles();

  return (
    <Chip
      label="Success"
      size="small"
      className={classes.success}
    />
  );
};

export default MyChipSuccess;
