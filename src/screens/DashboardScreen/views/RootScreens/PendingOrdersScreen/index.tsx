import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import ListPendingOrders from "./containers/ListPendingOrders";
import BigTitle from "../../../../../shared/components/BigTitle";

const PendingOrdersScreen: FC<RouteComponentProps> = () => {
  return (
    <div className="p-5 w-full">
      <BigTitle>Menús pendientes</BigTitle>
      <ListPendingOrders />
    </div>
  );
};

export default PendingOrdersScreen;
