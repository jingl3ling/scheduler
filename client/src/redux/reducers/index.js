import { combineReducers } from "redux";
import { scheduleReducer } from "./scheduleReducer";

const reducers = combineReducers({
    schedule : scheduleReducer
})

export default reducers
