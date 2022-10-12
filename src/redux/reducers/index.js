import { combineReducers } from "redux";
import { ProducReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: ProducReducer,
})