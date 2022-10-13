import { ActionTypes } from "../constants/action-types";

const initialstate = {
    products: [],
}


export const ProductReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}


export const selectedProductsReducer = (state = {}, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state;
    }
};
