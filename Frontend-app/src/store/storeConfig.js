import { createStore, combineReducers } from "redux";
import { numberReducer } from "./reducers/numberReducer";

const reducers = combineReducers({
  numbers: numberReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
