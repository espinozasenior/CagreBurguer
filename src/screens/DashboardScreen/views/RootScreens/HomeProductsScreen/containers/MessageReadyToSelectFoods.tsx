import React from "react";
import { Snackbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import useIsCreatingOrder from "../../../../../../modules/CurrentOrderMenu/hooks/useIsCreatingOrder";
import { emptyFoodsAddedToOrder, emptyOrderCreated } from "../../../../../../store/orders/selectors";

const MessageReadyToSelectFoods = () => {
  const isEmptyFoodsAdded = useSelector(emptyFoodsAddedToOrder);
  const isCreatingOrder = useIsCreatingOrder();
  const isEmptyOrderCreated = useSelector(emptyOrderCreated);
  if(isCreatingOrder && isEmptyFoodsAdded && !isEmptyOrderCreated)
    return (
      <Snackbar
        open
        message="Selecciona los productos para el pedido"
      />
    );
  return null;
};

export default MessageReadyToSelectFoods;
