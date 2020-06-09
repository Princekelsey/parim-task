import { combineReducers } from "redux";
import eventsReducer from "./events/eventsReducer";

const rootReducer = combineReducers({
  allEvents: eventsReducer,
});

export default rootReducer;
