import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '12px 12px 12px 4px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    width: '544px',

    '&:focus': {
      outline: '0',
    },
  },

  content: {
    padding: '32px',
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  details: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#1F2937',
    marginTop: '17px',

    '& a': {
      color: '#5469d4',
      textDecoration: 'none',
    },
  },

  rocketImg: {
    '& img': {
      width: '72px',
      height: '72px',
    },

    margin: '0',
    marginRight: '24px',
  },

  rocketName: {

  },

  rocketDetails: {
    marginRight: '16px',

    '& h2': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '18px',
      color: '#1F2937',
    },
    '& p': {
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '12px',
      color: '#374151',
      marginTop: '11px',
    },
  },

  social: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '12px',

    '& img': {
      width: '20px',
      height: '20px',
      marginRight: '8px',
    },
  },

  details_table: {

  },

  table: {
    display: 'flex',
    borderBottom: '1px solid #e4e4e7',
    padding: '16px 0',

    '& p': {
      fontSize: '14px',
      lineHeight: '14px',
      color: '#4b5563',
    },

    '& p:first-child': {
      width: '164px',
    },

    '& p:last-child': {
      marginLeft: '16px',
    },
  },
}));

export default useStyles;
