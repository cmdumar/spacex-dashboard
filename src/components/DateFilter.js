import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DatePick from './DatePick';
import './DateFilter.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
}));

function DateFilter({
  startDate, endDate, handleStartDate, handleEndDate,
}) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
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

DateFilter.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  handleStartDate: PropTypes.func.isRequired,
  handleEndDate: PropTypes.func.isRequired,
};

DateFilter.defaultProps = {
  startDate: null,
  endDate: null,
};

export default DateFilter;
