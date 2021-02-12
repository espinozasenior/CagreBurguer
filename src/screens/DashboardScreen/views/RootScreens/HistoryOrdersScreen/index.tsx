import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import ListHistoryOrders from "./containers/ListHistoryOrders";
import BigTitle from "../../../../../shared/components/BigTitle";

const HistoryOrdersScreen: FC<RouteComponentProps> = () => {
  return (
    <div className="p-4 w-full">
      <BigTitle>Historial de menús</BigTitle>
      <ListHistoryOrders/>
    </div>
  );
};

export default HistoryOrdersScreen;
