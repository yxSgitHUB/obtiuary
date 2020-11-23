import { combineReducers } from 'redux'

const initialState:userMeg = {
    userName:"",
    phone:""
}

function cacheUserReducer(state:userMeg=initialState, action:{type:string,user:userMeg}) {
    if(action.type==="userLogin"){
        return action.user
    }
    // 这里暂不处理任何 action，
    // 仅返回传入的 state。
    return state
}
export const rootReducer = combineReducers({
    cacheUserReducer
})