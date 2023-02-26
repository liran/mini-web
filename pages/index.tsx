import {
  Button,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
  Input,
  Space,
} from 'antd';
import Link from 'next/link';
import { AiFillGold } from 'react-icons/ai';
import React from 'react';
import type { NextPage } from 'next';
import Icon from '@ant-design/icons';

const FormItem = Form.Item;
const { Search } = Input;

const content = {
  marginTop: '100px',
};

const Home: NextPage = () => {
  return (
    <div style={content}>
      <Link href="/tailwind">
        <Button
          type="primary"
          icon={<Icon component={AiFillGold} style={{ fontSize: 16 }} spin />}
        >
          Go TailWind page
        </Button>
      </Link>
      <div className="text-center mb-5">
        <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
      </div>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'Not Identified',
          },
          {
            value: '2',
            label: 'Closed',
          },
          {
            value: '3',
            label: 'Communicated',
          },
          {
            value: '4',
            label: 'Identified',
          },
          {
            value: '5',
            label: 'Resolved',
          },
          {
            value: '6',
            label: 'Cancelled',
          },
        ]}
      />
      <div>
        <Form
          layout="horizontal"
          size={'large'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <FormItem label="Input Number">
            <InputNumber
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
          </FormItem>

          <FormItem label="Switch">
            <Switch defaultChecked />
          </FormItem>

          <FormItem label="Slider">
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem label="Select">
            <Select
              defaultValue="lucy"
              style={{ width: 192 }}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'disabled',
                  disabled: true,
                  label: 'Disabled',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
              ]}
            />
          </FormItem>

          <FormItem label="DatePicker">
            <DatePicker showTime />
          </FormItem>
          <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
            <Button style={{ marginLeft: 8 }}>Cancel</Button>
          </FormItem>
        </Form>

        <Divider />
        <div className="mx-auto w-1/3 pb-10">
          <Space direction="vertical">
            <Search placeholder="input search text" style={{ width: 200 }} />
            <Search
              placeholder="input search text"
              allowClear
              style={{ width: 200 }}
            />
            <Search
              addonBefore="https://"
              placeholder="input search text"
              allowClear
              style={{ width: 304 }}
            />
            <Search placeholder="input search text" enterButton />
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Home;
