import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authentication } from "./authentication/authenticationSlice";
import { foods } from "./foods/foodsSlice";
import { orders } from "./orders/ordersSlice";

export const combineReducers = {
    authentication,
    foods,
    orders
}

const store = configureStore({
    reducer : combineReducers,
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;

export {
    store,
}
