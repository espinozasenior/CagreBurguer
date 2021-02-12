import React from "react";
import MessageDescriptionEmpty from "../../../../shared/components/MessageDescriptionEmpty";
import useActionsNewOrder from "../../hooks/useActionsNewOrder";

const EmptyOrderMenu = () => {
  const { onCancelOrder } = useActionsNewOrder();
  return (
    <MessageDescriptionEmpty
      image="/images/salad_icon.png"
      title="El menú está vacio"
      message="Por favor añade items al menú actual y podras ver el pedido"
    >
      <div
        className="font-bold m-auto py-3 outline-none px-5 border-2 border-gray-300 rounded-2xl inline-block text-sm text-gray-400"
        role="button"
        aria-label="Cancel"
        tabIndex={0}
        onClick={onCancelOrder}
      >
        CANCELAR
      </div>
    </MessageDescriptionEmpty>
  );
};

export default EmptyOrderMenu;
