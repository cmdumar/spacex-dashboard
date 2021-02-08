import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePick.css';

function DatePick({ value, handleChange }) {
  return (
    <DatePicker
      selected={value}
      onChange={date => handleChange(date)}
      inline
      showMonthDropdown
      showYearDropdown
    />
  );
}

DatePick.propTypes = {
  value: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func.isRequired,
};

DatePick.defaultProps = {
  value: null,
};

export default DatePick;
