import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import ProtectedRouter from "./components/ProtectedRouter";
import NoAccessRouter from "./components/NoAccessRouter";
import PageLoading from "../shared/components/PageLoading";

const AsyncGetStartedScreen = lazy(()=>import("../screens/GetStartedScreen"))
const AsyncLoginScreen = lazy(()=>import("../screens/LoginScreen"))
const AsyncDashboardScreen = lazy(()=>import("../screens/DashboardScreen"))

const Routes = () => {
  return (
    <Suspense fallback={<PageLoading/>}>
      <Router>
        <AsyncGetStartedScreen path="/" />
        <NoAccessRouter path="/login" component={AsyncLoginScreen} />
        <ProtectedRouter path="/dashboard/*" component={AsyncDashboardScreen} />
      </Router>
    </Suspense>
  );
};

export default Routes;
