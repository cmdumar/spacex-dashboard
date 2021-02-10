import API from '../api';

const launchData = async (params = '') => {
  try {
    let launches;
    if (params === 'upcoming' || params === 'past') {
      launches = await API.get(`/${params}`);
    } else {
      launches = await API.get('/');
    }
    return launches;
  } catch (err) {
    const [error] = err;
    return error;
  }
};

export default launchData;
