import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleWere from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWere));

// console.log(store.getState())
// window.store = store;

export default store;