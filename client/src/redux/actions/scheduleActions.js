import { ActionTypes } from "../constants/action-types";

export const getSchedule = (schedule) => {
    return{
        type: ActionTypes.GET_SCHEDULE,
        payload: schedule
    }
}

export const reserveTime = (schedule) => {
    return{
        type: ActionTypes.RESERVE,
        payload: schedule
    }
}