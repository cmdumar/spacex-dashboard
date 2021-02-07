import API from '../api';

const launchData = async param => {
  try {
    const launches = await API.get(`/${param}`);
    return launches;
  } catch (err) {
    const [error] = err;
    return error;
  }
};

export default launchData;
