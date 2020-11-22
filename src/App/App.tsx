import React ,{useState,FC} from "react";
import {Button} from "antd";
import {Login}  from '../Page/Login';
import {MyLayout} from '../FrameWork/Layout'
import './App.css';
const App:FC=()=>{
  let [user,setUser] = useState({
    userName:"",
    phone:"",
  })
  let [loginStatus,setLoginStatus] = useState(false)
  return loginStatus?<div>
    <MyLayout />
  </div>: <Login onChange={(userParam:{
    userName:string,
    phone:string,
  }, status:boolean)=>{
    setUser(userParam);
    setLoginStatus(status)
  }}/>
}
export default App;
