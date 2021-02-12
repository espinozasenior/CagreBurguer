import { useDispatch } from "react-redux";
import { ordersActions } from "../../../store/orders/ordersSlice";
import useDispatchModalToCreateOrder from "./useDispatchModalToCreateOrder"

export default function useActionsNewOrder() {
    const dispatch = useDispatch();
    const { deactiveCreatingOrder }  = useDispatchModalToCreateOrder();
    return {
        onCancelOrder() {
            dispatch(ordersActions.cancelNewOrder());
            dispatch(deactiveCreatingOrder());
        },
        addOrdenToPendingOrders() {
            dispatch(ordersActions.addOrderToPendingOrders());
        }
    }
}
