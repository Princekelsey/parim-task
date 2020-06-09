import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";

// initailize saga middleware
const sagaMiddleware = createSagaMiddleware();

// all middlewares
const middleWares = [sagaMiddleware];

// check if development mode and use logger
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// redux store
const store = createStore(rootReducer, applyMiddleware(...middleWares));

// run saga middleware
sagaMiddleware.run(rootSaga);

export default store;
