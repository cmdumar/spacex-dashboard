import API from '../api';

const launchData = async (param = '') => {
  try {
    let launches;
    if (param === 'upcoming' || param === 'past') {
      launches = await API.get(`/${param}`);
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
