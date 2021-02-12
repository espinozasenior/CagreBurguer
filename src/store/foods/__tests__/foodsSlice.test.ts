import { foodsMockData } from "../../../core/data";
import { getFilterMenuFoodsByCategory } from "../selectors";
import {
  foods,
  initialState,
  FOODS_OPTIONS_TO_FILTER,
  foodsActions,
} from "../foodsSlice";


describe("Foods Slice", () => {

  it("Los datos iniciales son vacios", () => {
    expect(foods(undefined, {type:""})).toBe(initialState);
  });


  it('Traería los datos cuanto la carga se completó', () => {
      const nextState = foods(initialState,foodsActions.success(foodsMockData));

      expect(nextState.loading).toBeFalsy();
      expect(nextState.listFoods).toHaveLength(foodsMockData.length);
      expect(nextState.listFoods).toEqual(foodsMockData);
  });


  it('Filtrar los datos que son cargados en la lista por desayuno, almuerzo y todos', () => {
        const { listFoods } = foods(initialState,foodsActions.success(foodsMockData));

        const filterMenuByResult = getFilterMenuFoodsByCategory.resultFunc;

        const totalLunchFoods = 3;
        const totalFoods = foodsMockData.length;

        expect(filterMenuByResult(listFoods,FOODS_OPTIONS_TO_FILTER.ALL)).toHaveLength(totalFoods);
        expect(filterMenuByResult(listFoods,FOODS_OPTIONS_TO_FILTER.BREAKFAST)).toHaveLength(totalFoods - totalLunchFoods);
        expect(filterMenuByResult(listFoods,FOODS_OPTIONS_TO_FILTER.LUNCH)).toHaveLength(totalLunchFoods);
            
    });

});
