import React from "react";
import { useSelector } from "react-redux";
import { getFilterMenuFoodsByCategory } from "../../../../store/foods/selectors";
import FoodMenuCardSelectable from "../../components/FoodMenuCardSelectable";


const ListAllMenuFoodsFiltered = () => {
  const listFoodMenuFilter = useSelector(getFilterMenuFoodsByCategory);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {listFoodMenuFilter.map(({ image, price, title,foodId }, index) => {
        return (
          <FoodMenuCardSelectable key={index} image={image} price={price} title={title} foodId={foodId} />
        );
      })}
    </div>
  );
};

export default ListAllMenuFoodsFiltered;
