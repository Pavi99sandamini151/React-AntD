import './App.css';
import 'antd/dist/reset.css';
import { Input, Form, Button, Alert, message } from "antd";
import {useState} from "react";

function App() {
    const [showAlert, setShowAlert]= useState(false);
    const onFinish = (e) => {
        console.log(e);
        setTimeout(() => {
            setShowAlert(true);
            message.success('Login Successful');
        }, 2000);
    }
  return (
    <div className="App">
          <div style={{width:'40%', justifyContent:'center'}}>
              {showAlert &&
                  <Alert type="error" message="Error" description="There was an error in login"></Alert>}
              <Form onFinish={onFinish}>
                  <Form.Item label="User Name">
                      <Input placeholder="User Name"></Input>
                  </Form.Item>
                  <Form.Item label="User Password">
                      <Input.Password placeholder="User Password"></Input.Password>
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
    </div>
  );
}

export default App;
