import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import nasa from '../../assets/nasa.svg';
import wiki from '../../assets/wiki.svg';
import youtube from '../../assets/youtube.svg';
import useStyles from './ModalStyles';
import launchStatus from '../../helpers/launchStatus';

const ModalContent = React.forwardRef((props, ref) => {
  const { launch } = props;
  const classes = useStyles();

  if (launch.links) {
    return (
      <div ref={ref} className={classes.paper}>
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
              {launchStatus(launch.launch_success)}
            </div>
          </div>
          <p className={classes.details}>
            {launch.details}
            .&nbsp;
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
  }

  return <div>Found nothing!</div>;
});

ModalContent.propTypes = {
  launch: PropTypes.instanceOf(Object).isRequired,
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
