import React from "react";
import { PaymentButtonBase, CancelPaymentButtonBase } from "../../../Payments";
import useActionsNewOrder from "../../hooks/useActionsNewOrder";

const ActionsOrderMenu = () => {
  const { onCancelOrder, addOrdenToPendingOrders } = useActionsNewOrder();
  return (
    <div className="p-5 mt-auto">
      <div className="mb-3">
        <PaymentButtonBase onClick={addOrdenToPendingOrders}>Enviar a cocina</PaymentButtonBase>
      </div>
      <CancelPaymentButtonBase onClick={onCancelOrder}>Cancelar</CancelPaymentButtonBase>
    </div>
  );
};

export default ActionsOrderMenu;
