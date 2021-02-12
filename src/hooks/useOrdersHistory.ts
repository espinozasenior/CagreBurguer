import { shallowEqual, useSelector } from "react-redux";
import { HistoryOrder } from "../core/entities";
import { RootState } from "../store";

export default function useOrdersHistory() {
    const historyOrders = useSelector<RootState, HistoryOrder[]>( (state) => state.orders.history, shallowEqual );
    return {
        historyOrders,
        isEmpty : historyOrders.length === 0
    }
}
