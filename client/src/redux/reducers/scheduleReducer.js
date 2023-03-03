import { ActionTypes } from "../constants/action-types";

const today = new Date().toLocaleDateString();
const initialState = {
    schedule: {    
        "3/3/2023":{
            "8am": {
                "remaining": 10,
                "visitors":[]
            },
            "9am": {
                "remaining": 9,
                "visitors":
                [{ "Jing8478684968": 1 }]
            },
            "10am": {
                "remaining": 9,
                "visitors":
                [{ "Jing8478684968": 1 }]
            },
            "11am": {
                "remaining": 9,
                "visitors":
                [{ "Jing8478684968": 1 }]
            },
            "12pm": {
                "remaining": 9,
                "visitors":
                [{ "Jing8478684968": 1 }]
            },
            "1pm": {
                "remaining": 10,
                "visitors":[]
            },
            "2pm": {
                "remaining": 10,
                "visitors":[]
            },
            "3pm": {
                "remaining": 10,
                "visitors":[]
            },
            "4pm": {
                "remaining": 10,
                "visitors":[]
            }
        }
    }
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