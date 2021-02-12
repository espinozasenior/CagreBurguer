import React, { lazy } from "react";
import { useSelector } from "react-redux";
import FullScreenSpinnerLoading from "../../../../shared/components/FullScreenSpinnerLoading";
import LazyComponent from "../../../../shared/components/LazyComponent";
import { emptyOrderCreated } from "../../../../store/orders/selectors";
import useIsCreatingOrder from "../../../CurrentOrderMenu/hooks/useIsCreatingOrder";
import RootModal from "../../components/RootModal";

const AsyncMainCreateNewNameConsumer = lazy( () => import("./MainCreateNewNameConsumer"));

const CreateNewNameConsumer = () => {
  const isCreating = useIsCreatingOrder();
  const isEmptyOrderCreated = useSelector(emptyOrderCreated);

  if (isCreating && isEmptyOrderCreated)
    return (
      <RootModal w="400px">
        <LazyComponent
          fallback={<FullScreenSpinnerLoading text="Un momento..." className="my-10" />}
          component={AsyncMainCreateNewNameConsumer}
        />
      </RootModal>
    );
  return null;
};

export default CreateNewNameConsumer;
