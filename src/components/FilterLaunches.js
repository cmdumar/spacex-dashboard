import PropTypes from 'prop-types';

function FilterLaunches({ filter, handleChange }) {
  return (
    <select value={filter} onChange={handleChange}>
      <option value="all">All Launches</option>
      <option value="upcoming">Upcoming Launches</option>
      <option value="past">Past Launches</option>
      <option value="failed">Failed Launches</option>
      <option value="success">Successful Launches</option>
    </select>
  );
}

FilterLaunches.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterLaunches;
