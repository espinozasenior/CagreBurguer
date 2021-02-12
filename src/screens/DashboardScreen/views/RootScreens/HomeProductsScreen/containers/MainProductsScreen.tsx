import React, { lazy } from "react";
import { CreateNewNameConsumer } from "../../../../../../modules/CreateNewOrderToCustomer";
import BigTitle from "../../../../../../shared/components/BigTitle";
import { ListAllMenuFoodsFiltered, TabsFilterFoodsByCategory } from "../../../../../../modules/AllFoods";
import LazyComponent from "../../../../../../shared/components/LazyComponent";

const AsyncMessageReadyToSelectFoods = lazy(()=>import("./MessageReadyToSelectFoods"))
const AsyncCreateNewOrder = lazy(()=>import("./CreateNewOrder"))

const MainProductsScreen = () => {
  return (
    <div className="h-full flex items-stretch w-full">
      <div className="p-5 w-full overflow-y-scroll flex-1">
        <BigTitle id="today-menu">Menús de hoy</BigTitle>
        <TabsFilterFoodsByCategory />
        <ListAllMenuFoodsFiltered />
      </div>
      <CreateNewNameConsumer />
      <LazyComponent fallback={null} component={AsyncCreateNewOrder} />
      <LazyComponent fallback={null} component={AsyncMessageReadyToSelectFoods} />
    </div>
  );
};

export default MainProductsScreen;
