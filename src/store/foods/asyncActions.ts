import { Dispatch } from "@reduxjs/toolkit";
import FoodsService from "../../core/services/FoodsService/FoodsService";
import { foodsActions } from "./foodsSlice";

export const fetchAllFoods = () => async (dispatch : Dispatch) => {
    dispatch(foodsActions.loading());
    const foodsService = new FoodsService();
    const data = await foodsService.getAllFoods();
    dispatch(foodsActions.success(data));
}