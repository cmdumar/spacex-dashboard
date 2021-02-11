import StatusTag from '../components/shared/StatusTag';

function launchStatus(status) {
  if (status) {
    return <StatusTag status="success" />;
  } if (status === null) {
    return <StatusTag status="upcoming" />;
  }
  return <StatusTag status="failed" />;
}

export default launchStatus;
