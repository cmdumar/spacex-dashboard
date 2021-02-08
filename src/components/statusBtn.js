import { styled } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

export const MyChipSuccess = styled(Chip)({
  backgroundColor: '#deF7ec',
  color: '#03543F',
  padding: '4px 12px',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '13px',
});

export const MyChipFailure = styled(Chip)({
  backgroundColor: '#FDE2E1',
  color: '#981B1C',
  padding: '4px 12px',
});
