import React, { FC } from "react";
import styled from "styled-components";
import { HistoryOrder } from "../../../../../../../core/entities";
import { normalizePriceToString } from "../../../../../../../shared/utils/normalizePrice";
import HistoryOrderText from "../HistoryOrderText";

const Td = styled.td`
  text-align: center;
  padding:10px 0;
`;


type HistoryOrderItemCardProps = {
  order : HistoryOrder
}
const HistoryOrderItemCard : FC<HistoryOrderItemCardProps> = ({order}) => {
  return (
    <tr className="bg-white">
      <Td>
        <HistoryOrderText bold>{order.orderId}</HistoryOrderText>
      </Td>
      <Td>
        <HistoryOrderText neutral>{order.user.name}</HistoryOrderText>
      </Td>
      <Td>
        <HistoryOrderText neutral bold>{normalizePriceToString(order.totalPrice || 0)}</HistoryOrderText>
      </Td>
    </tr>
  );
};

export default HistoryOrderItemCard;
