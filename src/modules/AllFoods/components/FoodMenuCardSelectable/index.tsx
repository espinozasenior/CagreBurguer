import React, { FC } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../store";
import { ordersActions } from "../../../../store/orders/ordersSlice";
import useIsCreatingOrder from "../../../CurrentOrderMenu/hooks/useIsCreatingOrder";
import FoodMenuCard from "../FoodMenuCard";

const CardOlverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3em;
  animation:food-card-overlay .5s 1;
  @keyframes food-card-overlay {
    from {
      opacity:0;
    }
  }
`;


type FoodMenuCardSelectableProps = {
  image?: string;
  title?: string;
  price?: number;
  foodId ?: number;
};
const FoodMenuCardSelectable: FC<FoodMenuCardSelectableProps> = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector<RootState, object | undefined>(
    (state) =>state.orders.newOrder.order.items?.find((item) => item.data.foodId === props.foodId),shallowEqual
  );
  const isCreating = useIsCreatingOrder();
  const onAddNewFood = () => {
    if(isCreating){
      if(selected) dispatch(ordersActions.removeItemOfOrder({foodId:props.foodId!}));
      else dispatch(ordersActions.addItemsToOrder(props));
    }
  }
  return (
    <div className="md:cursor-pointer" onClick={onAddNewFood}>
        <FoodMenuCard
        {...props}
        renderOverlayImage={() => {
            return selected ? (
              <CardOlverlay>
                <AiFillCheckCircle />
              </CardOlverlay>
            ) : null;
        }}
        />
    </div>
  );
};

export default FoodMenuCardSelectable;
