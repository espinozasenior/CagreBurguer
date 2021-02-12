import React from "react";
import { useSelector } from "react-redux";
import CardDescriptionTotal from "../../../../shared/components/CardDescriptionTotal";
import { normalizePriceToString } from "../../../../shared/utils/normalizePrice";
import { getTotalPriceCurrentOrder } from "../../../../store/orders/selectors";

const TotalPriceCard = () => {
  const total = useSelector(getTotalPriceCurrentOrder);
  return (
    <CardDescriptionTotal
      title="Precio total"
      value={normalizePriceToString(total)}
    />
  );
};

export default TotalPriceCard;
