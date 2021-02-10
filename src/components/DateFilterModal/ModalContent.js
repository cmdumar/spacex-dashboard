import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DatePick from './DatePick';
import useStyles from './DateModalStyles';
import './DateModal.css';

const ModalContent = React.forwardRef((props, ref) => {
  const {
    handleBtn, clearDates, startDate, endDate, handleStartDate, handleEndDate, handleClose,
  } = props;
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.paper}>
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
        <div className="date-pickers">
          <DatePick value={startDate} handleChange={handleStartDate} />
          <DatePick value={endDate} handleChange={handleEndDate} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
});

ModalContent.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  handleStartDate: PropTypes.func.isRequired,
  handleEndDate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleBtn: PropTypes.func.isRequired,
  clearDates: PropTypes.func.isRequired,
};

ModalContent.defaultProps = {
  startDate: null,
  endDate: null,
};

ModalContent.displayName = 'DateModalContent';

export default ModalContent;
