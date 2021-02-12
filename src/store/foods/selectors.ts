import { createSelector, Selector } from "reselect";
import { FOODS_OPTIONS_TO_FILTER, FOODS_VISIBILITY_FILTER } from "./foodsSlice";
import { RootState } from "..";
import { Food } from "../../core/entities";

const getListFoods: Selector<RootState, Food[]> = (state) => state.foods.listFoods;
const getFoodFilterCategory: Selector<RootState, FOODS_VISIBILITY_FILTER> = ( state) => state.foods.visibilityFilter;

export const getFilterMenuFoodsByCategory = createSelector< RootState, Food[], FOODS_VISIBILITY_FILTER, Food[]>(
    getListFoods, 
    getFoodFilterCategory, 
    (listFoods, visibilityFilter) => {
    switch (visibilityFilter) {
        case FOODS_OPTIONS_TO_FILTER.ALL:
            return listFoods;
        case FOODS_OPTIONS_TO_FILTER.BREAKFAST:
            return listFoods.filter((item) => item.category === FOODS_OPTIONS_TO_FILTER.BREAKFAST);
        case FOODS_OPTIONS_TO_FILTER.LUNCH:
            return listFoods.filter((item) => item.category === FOODS_OPTIONS_TO_FILTER.LUNCH);
        default:
            return listFoods;
  }
});
