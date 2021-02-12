import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../store'

export default function useIsCreatingOrder() {
    return useSelector<RootState>(state => state.orders.newOrder.creatingOrder,shallowEqual);
}
