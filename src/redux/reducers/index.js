import { combineReducers } from "redux";
import { ProductReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductsReducer,
})


export { reducers };