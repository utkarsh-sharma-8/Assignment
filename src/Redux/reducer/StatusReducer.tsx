import { CHANGE_STATUS } from "../action/ActionTypes";

export const StatusReducer=(state="",action)=>{
    switch(action.type){
        case CHANGE_STATUS:
        {
            return  [action.payload]
        }
        default:
        {
            return state
        }
    }
}