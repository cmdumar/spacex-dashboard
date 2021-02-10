import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import calendar from '../../assets/calendar.svg';
import arrow from '../../assets/arrow.svg';
import useStyles from './DateModalStyles';
import ModalContent from './ModalContent';

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
        <ModalContent
          startDate={startDate}
          endDate={endDate}
          handleBtn={handleBtn}
          clearDates={clearDates}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          handleClose={handleClose}
        />
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
