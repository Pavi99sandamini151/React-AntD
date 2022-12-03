import './App.css';
import 'antd/dist/reset.css';
import { Button, Progress, Spin } from 'antd';
import { useState } from "react";


function App() {
  const [loading,setLoading] = useState(false);
  return (
    <div className="App">
        <Spin spinning={loading}></Spin>
        <Button onClick={()=>{setLoading(preValue => !preValue)}}>Toggle Spinning</Button>
        <Spin spinning={loading}>
            <p>P tag 1</p>
            <p>P tag 2</p>
            <p>P tag 3</p>
        </Spin>
        <Progress percent={37}/>
    </div>
  );
}

export default App;
