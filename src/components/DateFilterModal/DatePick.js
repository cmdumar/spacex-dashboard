import PropTypes from 'prop-types';
// import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePick.css';

function DatePick({ value, handleChange, handleClose }) {
  const handleSelect = d => {
    handleChange(d);
    handleClose();
  };

  const v = value !== null ? Date.parse(value) : null;

  return (
    <DatePicker
      selected={v}
      onChange={date => handleSelect(date)}
      inline
      showMonthDropdown
      showYearDropdown
    />
  );
}

DatePick.propTypes = {
  value: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
};

DatePick.defaultProps = {
  value: null,
  handleClose() { return null; },
};

export default DatePick;
