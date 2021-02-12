import { createSelector } from "reselect";
import { RootState } from "..";
import { Order, OrderFood } from "../../core/entities";

export const getTotalFoodsInCurrentOrder = createSelector<RootState,Order,number>(
  (state) => state.orders.newOrder.order,
  (order) => order.items.length
);

export const getTotalPriceCurrentOrder = createSelector<RootState,Order,number>(
  (state) => state.orders.newOrder.order,
  (order) =>
    order.items
      .map((item): number => item.data.price! * item.total!)
      .reduce((prev, current) => prev + current)
);


interface OrderFoodWithPrice extends OrderFood {
  totalPrice : number
} 
export const getFoodsAddedWithTotalPrice = createSelector<RootState,Order,OrderFoodWithPrice[]>(
  state => state.orders.newOrder.order,
  order => order.items.map((item) => {
    return {
      ...item,
      totalPrice : item.total! * item.data.price!
    }
  })
);


export const getPendingOrders =createSelector<RootState,Order[],Order[]>(
  state => state.orders.orders,
  orders => orders.filter(currentOrder => currentOrder.completed === false)
);


export const emptyFoodsAddedToOrder = createSelector<RootState,Order,boolean>(
  (state) => state.orders.newOrder.order,
  state => state.items.length ===  0
);

export const emptyOrderCreated = createSelector<RootState,Order,boolean>(
  state => state.orders.newOrder.order,
  state => Object.keys(state.user).length === 0
)