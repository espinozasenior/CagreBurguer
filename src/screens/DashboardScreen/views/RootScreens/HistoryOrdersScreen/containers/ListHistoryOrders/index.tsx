import React from "react";
import useOrdersHistory from "../../../../../../../hooks/useOrdersHistory";
import MessageDescriptionEmpty from "../../../../../../../shared/components/MessageDescriptionEmpty";
import HistoryOrderItemCard from "../../components/HistoryOrderItemCard";
import HistoryOrderTextHeader from "../../components/HistoryOrderTextHeader";

const ListHistoryOrders = () => {
  const { historyOrders, isEmpty } = useOrdersHistory();
  if (isEmpty) {
    return (
      <MessageDescriptionEmpty
        image="/images/take-away_logo.png"
        title="Todos los menús pedidos"
        message="Por el momento no existe ningun menú en el historial. Cuando existan aparecerán aquí."
      />
    );
  }
  return (
    <table className="bg-white w-full table-fixed">
      <thead>
        <tr className="text-2xl">
          <HistoryOrderTextHeader text="N° Item ID" />
          <HistoryOrderTextHeader text="Nombre del usuario" />
          <HistoryOrderTextHeader text="Precio total" />
        </tr>
      </thead>
      <tbody>
        {historyOrders.map((historyOrderProps, i) => {
          return <HistoryOrderItemCard key={i} order={historyOrderProps} />;
        })}
      </tbody>
    </table>
  );
};

export default ListHistoryOrders;
