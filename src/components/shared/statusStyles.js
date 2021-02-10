import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  status: {
    padding: '4px 12px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '13px',
  },

  success: {
    backgroundColor: '#deF7ec',
    color: '#03543F',
  },

  upcoming: {
    backgroundColor: '#fef3c7',
    color: '#92400f',
  },

  failed: {
    backgroundColor: '#fde2e1',
    color: '#981b1c',
  },
});

export default useStyles;
