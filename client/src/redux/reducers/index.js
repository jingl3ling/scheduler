import { combineReducers } from "redux";
import { scheduleReducer } from "./scheduleReducer";
import { reservationReducer } from "./reservationReducer";

const reducers = combineReducers({
    schedule : scheduleReducer,
    reserve : reservationReducer
})

export default reducers
