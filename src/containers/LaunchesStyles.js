import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    color: '#1f2937',
    minHeight: '676px',
    position: 'relative',
  },

  table_container: {
    minWidth: '952px',
    maxWidth: '952px',
    border: '1px solid #e4e4e7',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  },

  loading: {
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    marginTop: '49px',
    borderBottom: '1px solid transparent',
  },

  spinner: {
    marginTop: '235px',
  },

  head: {
    backgroundColor: '#f4f5f7',
    color: '#4B5563',
  },

  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '48px',
  },

  pagination: {
    marginTop: '20px',
    width: '100%',

    '& ul': {
      display: 'flex',
      justifyContent: 'flex-end',

      '& li': {
        border: '1px solid #e4e4e7',
        borderRightWidth: '0.20px',
        borderLeftWidth: '0.20px',
        height: '40px',
        width: '40px',

        '&:first-child': {
          borderRadius: '6px 0px 0px 6px',
        },

        '&:last-child': {
          borderRadius: '0px 6px 6px 0px',
        },

        '& button': {
          color: '#4b5563',
          width: '40px',
          height: '40px',
          textAlign: 'center',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          lineHeight: '16px',
        },

        '& div': {
          height: '40px',
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          paddingTop: '10px',
          paddingLeft: '9px',
        },
      },
    },
  },
});

export default useStyles;
