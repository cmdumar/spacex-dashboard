import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import ModalContent from './ModalContent';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function LaunchModal({ open, handleClose }) {
  const classes = useStyles();
  const launch = useSelector(state => state.launch);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalContent launch={launch} />
    </Modal>
  );
}

LaunchModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default LaunchModal;
