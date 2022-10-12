import { ActionTypes } from "../constants/action-types";

const initialstate = {
    products: [{
        id: 1,
        title: "ilham",
        category: "programmer"
    }]
}

export const ProductReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}