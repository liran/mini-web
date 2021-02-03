import Icon from '@ant-design/icons';
import Vercel from './icon.svg';

const CustomIcon = ({ style }) => (
  <Icon component={Vercel} style={{ fontSize: 100, color: 'red', ...style }} />
);

export default CustomIcon;
