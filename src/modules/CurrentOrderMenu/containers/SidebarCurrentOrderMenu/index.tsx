import React from "react";
import { useSelector } from "react-redux";
import { emptyFoodsAddedToOrder } from "../../../../store/orders/selectors";
import {
  WrapperSidebarHeader,
  WrapperSidebarOrderMenu,
} from "../../components/Common";
import EmptyOrderMenu from "../../components/EmptyOrderMenu";
import TotalFoodsInOrder from "../../components/TotalFoodsInOrder";
import DetailCurrentOrder from "./DetailCurrentOrder";

const SidebarCurrentOrderMenu = () => {
  const isEmpty = useSelector(emptyFoodsAddedToOrder);
  return (
    <WrapperSidebarOrderMenu>
      <WrapperSidebarHeader>
        <TotalFoodsInOrder />
      </WrapperSidebarHeader>
      {isEmpty ? <EmptyOrderMenu /> : <DetailCurrentOrder />}
    </WrapperSidebarOrderMenu>
  );
};

export default SidebarCurrentOrderMenu;
