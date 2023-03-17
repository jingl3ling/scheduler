import { combineReducers } from "redux";
import { scheduleReducer } from "./scheduleReducer";
import { reservationReducer } from "./reservationReducer";
import { eventReducer } from "./eventReducers";

const reducers = combineReducers({
    schedule : scheduleReducer,
    reserve : reservationReducer,
    event: eventReducer
})

export default reducers
