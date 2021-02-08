import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DatePick from './DatePick';
import './DateFilter.css';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '12px 12px 12px 4px',

    '&:focus': {
      outline: '0',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

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

  const body = (
    <div className={classes.paper}>
      <div className="date-modal">
        <div className="past-filters">
          <button type="button">Past Week</button>
          <button type="button">Past Month</button>
          <button type="button">Past 3 Months</button>
          <button type="button">Past 6 Months</button>
          <button type="button">Past Year</button>
          <button type="button">Past 2 Years</button>
        </div>
        <div className="v-line" />
        <div className="date-pickers">
          <DatePick value={startDate} handleChange={handleStartDate} />
          <DatePick value={endDate} handleChange={handleEndDate} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
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
