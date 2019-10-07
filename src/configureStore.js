import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import rootReducer from "./Reducers/rootReducer";

const configureStore = () => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );
  const store = createStore(rootReducer, middlewareEnhancer);
  return store;
};

export default configureStore;
