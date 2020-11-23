import React ,{FC} from "react";
import {Login}  from '../Page/Login';
import {MyLayout} from '../FrameWork/Layout'
import './App.css';
import {cacheUser} from "../Redux/Action";
import {connect} from "react-redux";
const App:FC<userMeg>=(props)=>{
  console.log(props)
  return props.phone&&props.phone!==""?<div>
    <MyLayout/>
  </div>: <Login/>
}
const mapStateToProps = (state: {cacheUserReducer:userMeg}): userMeg => {
  console.log("app",state)
  return ({
    userName: state.cacheUserReducer.userName,
    phone:state.cacheUserReducer.phone
  })
}
const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    cacheLogin:(user:userMeg)=>dispatch(cacheUser(user)),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
