import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { MyChipSuccess, MyChipFailure } from './statusBtn';
import nasa from '../assets/nasa.svg';
import wiki from '../assets/wiki.svg';
import youtube from '../assets/youtube.svg';

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
    borderBottom: '2px solid #e4e4e7',
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

function ModalContent({ launch }) {
  const classes = useStyles();
  let body;

  if (launch.links) {
    body = (
      <div className={classes.paper}>
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.rocketImg}>
              <img src={launch.links.mission_patch} alt="Rocket Logo" />
            </div>
            <div className={classes.rocketDetails}>
              <h2>
                {launch.mission_name}
              </h2>
              <p>
                {launch.rocket.rocket_name}
              </p>
              <div className={classes.social}>
                <a
                  href={launch.links.article_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={nasa} alt="Nasa Logo" />
                </a>
                <a
                  href={launch.links.wikipedia}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wiki} alt="Wikipedia Logo" />
                </a>
                <a
                  href={launch.links.video_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt="YouTube Logo" />
                </a>
              </div>
            </div>
            <div className={classes.rocketStatus}>
              {
                launch.launch_success ? (
                  <MyChipSuccess
                    label="Success"
                    size="small"
                  />
                )
                  : <MyChipFailure label="Failure" size="small" />
              }
            </div>
          </div>
          <p className={classes.details}>
            {launch.details}
            .
            <a
              href={launch.links.wikipedia}
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
          </p>
          <div className={classes.details_table}>
            <div className={classes.table}>
              <p>Flight Number</p>
              <p>{launch.flight_number}</p>
            </div>
            <div className={classes.table}>
              <p>Mission Name</p>
              <p>{launch.mission_name}</p>
            </div>
            <div className={classes.table}>
              <p>Rocket Type</p>
              <p>{launch.rocket.rocket_type}</p>
            </div>
            <div className={classes.table}>
              <p>Rocket Name</p>
              <p>{launch.rocket.rocket_name}</p>
            </div>
            <div className={classes.table}>
              <p>Manufacturer</p>
              <p>{launch.rocket.second_stage.payloads[0].manufacturer}</p>
            </div>
            <div className={classes.table}>
              <p>Nationality</p>
              <p>{launch.rocket.second_stage.payloads[0].nationality}</p>
            </div>
            <div className={classes.table}>
              <p>Launch Date</p>
              <p>{moment(launch.launch_date_utc).format('DD MMMM YYYY, HH:mm')}</p>
            </div>
            <div className={classes.table}>
              <p>Payload Type</p>
              <p>{launch.rocket.second_stage.payloads[0].payload_type}</p>
            </div>
            <div className={classes.table}>
              <p>Orbit</p>
              <p>{launch.rocket.second_stage.payloads[0].orbit}</p>
            </div>
            <div className={classes.table}>
              <p>Launch Site</p>
              <p>{launch.launch_site.site_name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    body = <div>Found none</div>;
  }

  return body;
}

ModalContent.propTypes = {
  launch: PropTypes.instanceOf(Object).isRequired,
};

export default ModalContent;
