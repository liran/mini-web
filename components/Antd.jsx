import { Select, Calendar, Avatar, Divider, Timeline, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import CustomIcon from './CustomIcon';

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

class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

const Antd = () => {
  return (
    <div>
      <CustomIcon />
      <Divider />
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
      <Divider dashed />
      <PendingTimeLine />
    </div>
  );
};

export default Antd;
