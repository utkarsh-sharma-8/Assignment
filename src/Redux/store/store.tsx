import { combineReducers, createStore } from "redux";
import { StatusReducer } from './../reducer/StatusReducer';
const totalReducer=combineReducers({StatusReducer})
export const mystore=createStore(totalReducer)