import React from "react";
import useGetPendingOrders from "../../../../../../../hooks/useGetPendingOrders";
import HistoryOrderMenuCard from "../../../../../../../modules/AllFoods/components/HistoryOrderMenuCard";
import MessageDescriptionEmpty from "../../../../../../../shared/components/MessageDescriptionEmpty";

const ListPendingOrders = () => {
  const { listPendingOrders, isEmpty } = useGetPendingOrders();

  if (isEmpty) {
    return (
      <MessageDescriptionEmpty
        image="/images/burger_logo.png"
        title="Menús pendientes"
        message="Por el momento no existe ningun menú pendiente. Cuando existan aparecerán en esta zona."
      />
    );
  }

  return (
    <section className="pending-orders">
      {listPendingOrders.map((order, index) => {
        return <HistoryOrderMenuCard order={order} key={index} />;
      })}
    </section>
  );
};

export default ListPendingOrders;
