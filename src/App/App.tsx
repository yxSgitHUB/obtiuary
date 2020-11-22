import React ,{useState,FC} from "react";
import {Button} from "antd";
import './App.css';
const App:FC=()=>{
  let [user,setUser] = useState({
    name:"",
    password:""
  })
  return <div>
    <p>user.name:{user.name}</p>
    <p>user.password:{user.password}</p>
    <Button onClick={()=>{
      setUser({
        name:"name",
        password: "password"
      })
    }}>user set name:"name"，password:"password"</Button>
  </div>
}
export default App;
