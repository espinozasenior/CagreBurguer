import React  from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../store";
import { foodsActions, FOODS_OPTIONS_TO_FILTER, FOODS_VISIBILITY_FILTER } from "../../../../store/foods/foodsSlice"


const Tab = styled.div.attrs({ className: "duration-200 flex font-bold w-full justify-center cursor-default md:cursor-pointer" })<{ selected?: boolean }>`
  padding: 10px;
  color: ${(props) => props.selected && "var(--primary-color)"};
  box-shadow: ${(props) => props.selected && "0 2px 0 var(--primary-color)"};
`;



const TabsFilterFoodsByCategory = () => {
  const dispatch = useDispatch();
  const foodsVisibilityFilter = useSelector<RootState,FOODS_VISIBILITY_FILTER>(state => state.foods.visibilityFilter,shallowEqual);
  const bindSelectFilter = (option : FOODS_VISIBILITY_FILTER) => ({
    onClick: () => dispatch(foodsActions.setVisibilityFilter(option)),
    selected: foodsVisibilityFilter === option,
  });

  return (
    <div className="flex items-center mb-5 w-full justify-between">
      <Tab {...bindSelectFilter(FOODS_OPTIONS_TO_FILTER.ALL)}>Todos</Tab>
      <Tab {...bindSelectFilter(FOODS_OPTIONS_TO_FILTER.BREAKFAST)}>Desayuno</Tab>
      <Tab {...bindSelectFilter(FOODS_OPTIONS_TO_FILTER.LUNCH)}>Almuerzo</Tab>
    </div>
  );
};

export default TabsFilterFoodsByCategory;
