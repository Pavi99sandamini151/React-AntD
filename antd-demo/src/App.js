import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import {useState} from "react";
import { PoweroffOutlined } from '@ant-design/icons';

function App() {
    const [loading,setLoading] = useState(false);
    const onButtonClick = (e) => {
        console.log("hello pavi");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary"
                block
                loading={loading}
                style={{backgroundColor:'orange', color:'red'}}
                icon={<PoweroffOutlined/>}
                onClick={onButtonClick}>
            My first
        </Button>
      </header>
    </div>
  );
}

export default App;
