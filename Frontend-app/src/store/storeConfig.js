import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case "@update_number":
        return {
          ...state,
          min: action.payload,
        };

      default:
        // return state;
        return {
          min: 7,
          max: 30,
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
