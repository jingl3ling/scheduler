import { ActionTypes } from "../constants/action-types";

const initialState = {
    schedule: {}
}

export const scheduleReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_SCHEDULE:
            state.schedule = payload
            return state
        case ActionTypes.RESERVE:
            return state
        default:
            return state
    }
}