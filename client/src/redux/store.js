import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const store = legacy_createStore(reducers, {}, composeWithDevTools());

export default store;