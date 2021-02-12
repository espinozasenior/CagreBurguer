import React, { FC, memo } from "react";
import { useDispatch } from "react-redux";
import GroupButtonAlterTotalValue from "../../../../shared/components/GroupButtonAlterTotalValue";
import { normalizePriceToString } from "../../../../shared/utils/normalizePrice";
import { ordersActions } from "../../../../store/orders/ordersSlice";


type CurrentOrderFoodItemProps = {
  image?: string;
  title?: string;
  total?: number;
  foodId : number;
  totalPrice : number;
};
const CurrentOrderFoodItem: FC<CurrentOrderFoodItemProps> = ({
  image,
  total,
  title,
  totalPrice,
  foodId
}) => {

  const dispatch = useDispatch();
  const onAdd = () => dispatch(ordersActions.incrementTotalItemInOrder({foodId}))
  const onRemove = () => dispatch(ordersActions.decrementTotalItemInOrder({foodId}))

  return (
    <div className="flex items-stretch py-3">
      <img
        className="rounded-sm object-cover h-16 w-16"
        src={image}
        alt={image}
      />
      <div className="flex flex-col px-4 flex-1">
        <span className="font-bold text-base">{title}</span>
        <div className="mt-auto w-full flex items-center">
          <GroupButtonAlterTotalValue onAdd={onAdd} onRemove={onRemove}>
            {total}
          </GroupButtonAlterTotalValue>
          <span className="font-bold text-base ml-auto">{normalizePriceToString(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(CurrentOrderFoodItem);
