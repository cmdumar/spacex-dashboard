import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import useStyles from './statusStyles';

const StatusTag = ({ status }) => {
  const classes = useStyles();
  let styles;

  if (status === 'upcoming') {
    styles = classes.upcoming;
  } else if (status === 'success') {
    styles = classes.success;
  } else {
    styles = classes.failed;
  }

  return (
    <Chip
      label={status}
      size="small"
      className={`${classes.status} ${styles}`}
    />
  );
};

StatusTag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusTag;
