import { useDispatch } from "react-redux";
import { ordersActions } from "../../../store/orders/ordersSlice";

export default function useDispatchModalToCreateOrder() {
    const dispatch = useDispatch();

    return {
        activeCreatingOrder : () => dispatch(ordersActions.activeCreatingOrder()),
        deactiveCreatingOrder : () => dispatch(ordersActions.deactiveCreatingOrder()),        
    }
}
