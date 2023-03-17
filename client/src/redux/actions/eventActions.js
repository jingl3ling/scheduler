import { ActionTypes } from "../constants/action-types";

export const SetEvent=(event)=>{
    return{
        type:ActionTypes.SET_EVENT,
        payload: event
    }
}