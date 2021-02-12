import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../core/entities";



/* ------------------------ Types to filter all foods ----------------------- */

export type FOODS_VISIBILITY_FILTER = "all" | "breakfast" | "lunch";
export enum FOODS_OPTIONS_TO_FILTER {
  ALL = "all",
  BREAKFAST = "breakfast",
  LUNCH =  "lunch"
}
interface FoodsState {
  listFoods: Food[];
  visibilityFilter: FOODS_VISIBILITY_FILTER;
  loading ?: boolean;
}


/* ------------------------- Initial state of foods ------------------------- */

export const initialState: FoodsState = {
  visibilityFilter: FOODS_OPTIONS_TO_FILTER.ALL,
  listFoods: [],
  loading: true,
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setVisibilityFilter(state,{payload}:PayloadAction<FOODS_VISIBILITY_FILTER>) {
      state.visibilityFilter = payload;
    },
    loading(state) {
      state.loading = true;
    },
    success(state,{payload}:PayloadAction<Food[]>) {
      state.loading = false;
      state.listFoods = payload;
    }
  },
});

export const { actions: foodsActions, reducer: foods } = foodsSlice;
