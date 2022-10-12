import { createStore } from "redux";
import { reducers } from "./reducers/productReducer"

const store = createStore(reducers, {});



export default store;