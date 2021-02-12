import React from "react";
import { useSelector } from "react-redux";
import { getFoodsAddedWithTotalPrice } from "../../../../store/orders/selectors";
import CurrentOrderFoodItem from "../../components/CurrentOrderFoodItem";
import TotalPriceCard from "../../components/TotalPriceCard";
import ActionsOrderMenu from "../ActionsOrderMenu";

const ListFoods = () => {
  const listFoodsInNewOrder = useSelector(getFoodsAddedWithTotalPrice);
  return (
    <div className="p-5 overflow-y-auto flex-1">
      {listFoodsInNewOrder.map(({data,total,totalPrice,}, index) => (
        <CurrentOrderFoodItem
          key={index}
          foodId={data.foodId!}
          image={data.image}
          title={data.title}
          total={total}
          totalPrice={totalPrice}
        />
      ))}
      <TotalPriceCard/>
    </div>
  );
};

const DetailCurrentOrder = () => {
  return (
    <>
      <ListFoods/>
      <ActionsOrderMenu />
    </>
  );
};

export default DetailCurrentOrder;
