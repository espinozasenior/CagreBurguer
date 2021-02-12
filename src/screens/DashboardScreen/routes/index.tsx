import { Router } from "@reach/router";
import React, { lazy, Suspense } from "react";
import FullScreenSpinnerLoading from "../../../shared/components/FullScreenSpinnerLoading";

const AsyncHistoryOrdersScreen = lazy(() => import("../views/RootScreens/HistoryOrdersScreen"));
const AsyncPendingOrdersScreen = lazy(() => import("../views/RootScreens/PendingOrdersScreen"));
const AsyncHomeProductsScreen = lazy(() => import("../views/RootScreens/HomeProductsScreen"));

const Routes = () => {
  return (
    <Suspense fallback={<FullScreenSpinnerLoading />}>
      <Router primary={false} className="w-full h-full flex overflow-hidden">
        <AsyncHistoryOrdersScreen path="history" />
        <AsyncPendingOrdersScreen path="pending" />
        <AsyncHomeProductsScreen path="/" />
      </Router>
    </Suspense>
  );
};

export default Routes;
