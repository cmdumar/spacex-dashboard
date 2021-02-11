import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '12px 12px 12px 4px',
    width: '618px',
    height: '300px',

    '&:focus': {
      outline: '0',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    color: '#4b5563',
    outline: 'none',
    padding: '10px 0',
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '16px',

    '&:focus': {
      outline: 'none',
    },

    '& p': {
      marginLeft: '9.33px',
      marginRight: '11px',
      fontFamily: 'Inter, sans-serif',
    },

    '& img': {
      width: '13.33px',
      height: '13.33px',
    },
  },
}));

export default useStyles;
