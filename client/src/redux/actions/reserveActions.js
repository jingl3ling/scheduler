import { ActionTypes } from "../constants/action-types";

export const addTime = (schedule) => {
    return{
        type: ActionTypes.ADD_TIME,
        payload: schedule
    }
}

export const addInfo = (info) => {
    return{
        type: ActionTypes.ADD_INFO,
        payload: info
    }
}