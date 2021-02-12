import { useSelector } from "react-redux";
import { getPendingOrders } from "../store/orders/selectors";

export default function useGetPendingOrders() {
    const listPendingOrders = useSelector(getPendingOrders);
    return {
        listPendingOrders,
        isEmpty : listPendingOrders.length === 0
    }
}
