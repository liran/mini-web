import { Select, Calendar, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

const Antd = () => {
  return (
    <div>
      <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
        {children}
      </Select>
      <Divider dashed />
      <Calendar onPanelChange={onPanelChange} />
      <Divider dashed />
      <div>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
          <Avatar size="large" icon={<UserOutlined />} />
          <Avatar icon={<UserOutlined />} />
          <Avatar size="small" icon={<UserOutlined />} />
        </div>
        <div>
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <Avatar shape="square" icon={<UserOutlined />} />
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default Antd;
