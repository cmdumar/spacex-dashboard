import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import DatePick from './DatePick';
import calendar from '../../assets/calendar.svg';
import arrow from '../../assets/arrow.svg';
import './DateModal.css';
import useStyles from './DateModalStyles';

function DateModal({
  startDate, endDate, handleStartDate, handleEndDate,
}) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBtn = e => {
    const v = e.target.value.split(',');
    handleStartDate(v[0]);
    handleEndDate(v[1]);
    handleClose();
  };

  const clearDates = () => {
    handleStartDate(null);
    handleEndDate(null);
    handleClose();
  };

  const body = (
    <div className={classes.paper}>
      <div className="date-modal">
        <div className="past-filters">
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(7, 'd').utc().format(), moment.parseZone().utc().format()]}
          >
            Past week
          </button>
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(1, 'months').utc().format(), moment.parseZone().utc().format()]}
          >
            Past month
          </button>
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(3, 'months').utc().format(), moment.parseZone().utc().format()]}
          >
            Past 3 months
          </button>
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(6, 'months').utc().format(), moment.parseZone().utc().format()]}
          >
            Past 6 months
          </button>
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(1, 'years').utc().format(), moment.parseZone().utc().format()]}
          >
            Past year
          </button>
          <button
            type="button"
            onClick={handleBtn}
            value={[moment.parseZone().subtract(2, 'years').utc().format(), moment.parseZone().utc().format()]}
          >
            Past 2 years
          </button>
          <button
            type="button"
            onClick={clearDates}
          >
            Clear dates
          </button>
        </div>
        <div className="v-line" />
        <div className="date-pickers">
          <DatePick value={startDate} handleChange={handleStartDate} />
          <DatePick value={endDate} handleChange={handleEndDate} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.dateFilter}>
      <button type="button" className={classes.btn} onClick={handleOpen}>
        <img src={calendar} alt="calendar icon" />
        <p>Date Filter</p>
        <img src={arrow} alt="down arrow icon" />
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

DateModal.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  handleStartDate: PropTypes.func.isRequired,
  handleEndDate: PropTypes.func.isRequired,
};

DateModal.defaultProps = {
  startDate: null,
  endDate: null,
};

export default DateModal;
