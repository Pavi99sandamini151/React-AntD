import './App.css';
import 'antd/dist/reset.css';
import { Input, Select, Form, Button, Table } from "antd";
import { useState } from "react";
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons';

function App() {
    const [loading,setLoading] = useState(false);
    const fruits = ['Banana', 'Mango', 'Orange', 'Chery'];
    const data = [
    {
        name:'Name 1',
        age:10,
        address:'address 1',
        key:1
    },
    {
        name:'Name 2',
        age:10,
        address:'address 2',
        key:2
    },
    {
        name:'Name 3',
        age:10,
        address:'address 3',
        key:3
    }
    ];
    const columns = [
        {
            title:'Name',
            dataIndex:'name',
            key:'key',
            render:name => {
                return <a>{name}</a>
            }
        },
        {
            title:'Age',
            dataIndex:'age',
            key:'key'
        },
        {
            title:'Address',
            dataIndex:'address',
            key:'key'
        },
    ];
    const onButtonClick = (e) => {
        console.log("hello pavi");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    const onFinish = (e) => {
        console.log(e);
    }
  return (
    <div className="App">
        <Button type="primary"
                loading={loading}
                style={{backgroundColor:'orange', color:'red'}}
                icon={<PoweroffOutlined/>}
                onClick={onButtonClick}>
            My first
        </Button>
          <Input.Search
                 placeholder="Enter Name"
                 maxLength={10}
                 type="text"
                 prefix={<UserOutlined/>}
                 allowClear>
          </Input.Search>
          <Select
              placeholder="Select fruit"
              mode="multiple"
              style={{width:'50%'}}>
              { fruits.map((fruit,index)=>{
                  return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
              })}
          </Select>
          <div style={{width:'40%', justifyContent:'center'}}>
              <Form onFinish={onFinish}>
                  <Form.Item label="User Name">
                      <Input placeholder="User Name"></Input>
                  </Form.Item>
                  <Form.Item label="User Address">
                      <Input placeholder="User Address"></Input>
                  </Form.Item>
                  <Form.Item label="User Password">
                      <Input.Password placeholder="User Password"></Input.Password>
                  </Form.Item>
                  <Form.Item label="User Phone Number">
                      <Input placeholder="User Phone Number"></Input>
                  </Form.Item>
                  <Form.Item>
                      <Button
                          type="primary"
                          htmlType="submit"
                          block>
                          Log In
                      </Button>
                  </Form.Item>
              </Form>
          </div>
        <div style={{width:'50%'}}>
            <Table dataSource={data}
                   columns={columns}
                   pagination>
            </Table>
        </div>
    </div>
  );
}

export default App;
