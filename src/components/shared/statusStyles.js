import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  status: {
    padding: '4px 8px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '13px',
    height: '21px',
    textTransform: 'capitalize',
  },

  success: {
    backgroundColor: '#def7ec',
    color: '#03543f',
  },

  upcoming: {
    backgroundColor: '#fef3c7',
    color: '#92400f',
  },

  failed: {
    backgroundColor: '#fde2e1',
    color: '981b1c',
  },
});

export default useStyles;
