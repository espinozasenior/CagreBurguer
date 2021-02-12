import React, { FC, lazy } from "react";
import { RouteComponentProps } from "@reach/router";
import { CreateNewNameConsumer } from "../../../../../modules/CreateNewOrderToCustomer";
import LazyComponent from "../../../../../shared/components/LazyComponent";
import BigTitle from "../../../../../shared/components/BigTitle";
import { TabsFilterFoodsByCategory } from "../../../../../modules/AllFoods";
import SpinnerLoading from "../../../../../shared/components/SpinnerLoading";
import useGetFoods from "../../../../../hooks/useGetFoods";

const AsyncMessageReadyToSelectFoods = lazy(()=>import("./containers/MessageReadyToSelectFoods"))
const AsyncCreateNewOrder = lazy(()=>import("./containers/CreateNewOrder"))
const AsyncListAllMenuFoodsFiltered = lazy(()=>import("../../../../../modules/AllFoods/containers/ListAllMenuFoodsFiltered"))

const HomeProductsScreen: FC<RouteComponentProps> = () => {
  const { loading } = useGetFoods();

  return(
    <div className="h-full flex items-stretch w-full">
      <div className="p-5 w-full overflow-y-scroll flex-1">
        <BigTitle id="today-menu">Menús de hoy</BigTitle>
        <TabsFilterFoodsByCategory />
        {loading ? <SpinnerLoading/> : (
          <LazyComponent fallback={<SpinnerLoading/>} component={AsyncListAllMenuFoodsFiltered}  />
        )}
      </div>
      <CreateNewNameConsumer />
      <LazyComponent fallback={null} component={AsyncCreateNewOrder} />
      <LazyComponent fallback={null} component={AsyncMessageReadyToSelectFoods} />
    </div>
  )
};

export default HomeProductsScreen;
