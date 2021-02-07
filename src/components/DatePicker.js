import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateFilter() {
  const [value, setValue] = useState(null);
  console.log('Date', value);
  return (
    <DatePicker selected={value} onChange={date => setValue(date)} />
  );
}

export default DateFilter;
