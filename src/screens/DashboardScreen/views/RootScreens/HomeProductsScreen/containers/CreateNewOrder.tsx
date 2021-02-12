import React from "react";
import { SidebarCurrentOrderMenu } from "../../../../../../modules/CurrentOrderMenu";
import ButtonCreateNewOrder from "../../../../../../modules/CreateNewOrderToCustomer/components/ButtonCreateNewOrder";
import useIsCreatingOrder from "../../../../../../modules/CurrentOrderMenu/hooks/useIsCreatingOrder";

const CreateNewOrder = () => {
  const isCreating = useIsCreatingOrder();
  return (
    <>
      {!isCreating && <ButtonCreateNewOrder />}
      {isCreating && <SidebarCurrentOrderMenu />}
    </>
  );
};

export default CreateNewOrder;
