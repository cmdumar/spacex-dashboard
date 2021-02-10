import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import filterIcon from '../assets/filter.svg';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',

    '& select': {
      color: '#4b5563',
      marginLeft: '9.33px',
      marginRight: '11px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      border: 0,
      lineHeight: '16px',
      cursor: 'pointer',
    },
  },
}));

function FilterLaunches({ filter, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={filterIcon} alt="Filter icon" />
      <select value={filter} onChange={handleChange}>
        <option value="all">All Launches</option>
        <option value="upcoming">Upcoming Launches</option>
        <option value="past">Past Launches</option>
        <option value="failed">Failed Launches</option>
        <option value="success">Successful Launches</option>
      </select>
    </div>
  );
}

FilterLaunches.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterLaunches;
