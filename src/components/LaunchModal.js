import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '12px 12px 12px 4px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    maxWidth: '544px',

    '&:focus': {
      outline: '0',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  details: {
    fontSize: '14px',
    lineHeight: '24px',
  },
}));

function LaunchModal({ open, handleClose }) {
  const classes = useStyles();
  const launch = useSelector(state => state.launch);

  const body = (
    <div className={classes.paper}>
      <p className={classes.details}>
        {launch.details}
      </p>
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}

LaunchModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default LaunchModal;
