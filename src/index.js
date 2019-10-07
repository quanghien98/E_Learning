import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import MasterRouter from "./Router";
/* ------------- React router ------------ */
/* ---------------- style ---------------- */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

// redux
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import thunk from "redux-thunk"

// Reducer
import rootReducer from "./Reducers/rootReducer";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )

)

ReactDOM.render(<Provider store={store}>
    <MasterRouter />
</Provider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
