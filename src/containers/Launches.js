import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import fetchLaunches from '../redux/actions';

function Launches({ launches }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  return (
    <div>
      {console.log('launches', launches)}
      Hello World
    </div>
  );
}

Launches.propTypes = {
  // error: PropTypes.string,
  // loading: PropTypes.bool,
  launches: PropTypes.instanceOf(Object),
};

Launches.defaultProps = {
  // error: '',
  // loading: false,
  launches: [],
};

function mapStateToProps(store) {
  return {
    loading: store.loading,
    launches: store.launches,
    error: store.error,
  };
}

export default connect(mapStateToProps, null)(Launches);
