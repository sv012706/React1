import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// actions into actionmethods-thunk
//store will receive an object called reducer

const initialState = {};
const middleware = [thunk];

let store;

if(window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
            )
            );
}
else{
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware)));
}

export default store;