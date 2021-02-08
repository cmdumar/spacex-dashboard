import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import filterIcon from '../assets/filter.svg';
import arrow from '../assets/arrow.svg';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',

    '& select': {
      marginLeft: '9.33px',
      marginRight: '11px',
      fontSize: '16px',
      fontFamily: 'Helvetica, sans-serif',
      lineHeight: '16px',
      border: 0,
      appearance: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      outline: 'none',
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
      <img src={arrow} alt="Filter icon" />
    </div>
  );
}

FilterLaunches.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterLaunches;
