import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import BaseButton from "../../../../shared/components/BaseButton";
import { ordersActions } from "../../../../store/orders/ordersSlice";
import useDispatchModalToCreateOrder from "../../../CurrentOrderMenu/hooks/useDispatchModalToCreateOrder";

const MainCreateNewNameConsumer = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { deactiveCreatingOrder } = useDispatchModalToCreateOrder();

  const onCreateNewUser = () => {
    dispatch(ordersActions.createInitialNewOrder({ name: inputName.current?.value }));
  };
  return (
    <div className="p-5">
      <div className="font-bold text-xl">Ingresar nombre del cliente</div>
      <input
        ref={inputName}
        autoFocus
        className="bg-gray-100 p-3 w-full rounded-xl my-4 outline-none"
        placeholder="Ingresar nombre del cliente..."
        data-testid="input-name"
      />
      <div className="mt-10 grid grid-cols-2 gap-2">
        <BaseButton onClick={onCreateNewUser}>Continuar</BaseButton>
        <BaseButton aria-label="Cancel"  onClick={deactiveCreatingOrder} style={{ background: "rgba(0,0,0,.1)", color: "gray" }}>
          Cancelar
        </BaseButton>
      </div>
    </div>
  );
};

export default MainCreateNewNameConsumer;
