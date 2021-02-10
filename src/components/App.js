import { makeStyles } from '@material-ui/core/styles';
import Launches from '../containers/Launches';
import logo from '../assets/logo.svg';

const useStyles = makeStyles({
  nav: {
    width: '100%',
    height: '72px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',

    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.nav}>
        <div>
          <img src={logo} alt="SpaceX Logo" />
        </div>
      </nav>
      <div className="container">
        <Launches />
      </div>
    </>
  );
}

export default App;
