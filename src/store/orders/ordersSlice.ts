import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food, HistoryOrder, Order } from "../../core/entities";
import generateRandomId from "../../shared/utils/generateRandomId";

export interface OrdersState {
  history: HistoryOrder[];
  orders: Order[];
  newOrder: {
    creatingOrder: boolean;
    order: Order;
  };
}

export const initialState: OrdersState = {
  orders: [],
  history: [],
  newOrder: {
    creatingOrder: false,
    order: {
      items : [],
      orderId:0,
      user:{},
      completed:false
    },
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, { payload }: PayloadAction<Order[]>) {
      state.orders = payload;
    },
    getOrdersHistory(state, { payload }: PayloadAction<HistoryOrder[]>) {
      state.history = payload;
    },
    createInitialNewOrder(state, { payload }: PayloadAction<{ name?: string }>) {
      state.newOrder.order = {
        completed: false,
        items: [],
        orderId: generateRandomId(),
        user: {
          name: payload.name,
          userId: generateRandomId(),
        },
      };
    },
    cancelNewOrder(state) {
      state.newOrder = initialState.newOrder
    },

    markOrderAsCompleted(state,{payload}:PayloadAction<Partial<Order>>) {
      state.orders = state.orders.map(currentOrder => {
        if(currentOrder.orderId === payload.orderId) {
          return {
            ...currentOrder,
            completed: true
          }
        }
        return currentOrder;
      })
      const order = state.orders.find(currentOrder => currentOrder.orderId === payload.orderId);
      state.history.push({
        user : order?.user!,
        orderId : order?.orderId,
        totalPrice : order?.items.length ? order?.items?.map(e=>e.data.price! * e.total!).reduce((a,b)=>a+b) : 0
      });
    },

    addPendingOrderToHistory(state,{payload}:PayloadAction<HistoryOrder>) {
      state.history.push(payload);
    },
    incrementTotalItemInOrder(state,{payload}:PayloadAction<{foodId:number}>) {
      state.newOrder.order.items = state.newOrder.order.items.map(currentOrder => {
        if(currentOrder.data.foodId === payload.foodId) {
          return {
            ...currentOrder,
            total : currentOrder.total! + 1
          }
        }
        return currentOrder;
      });
    },
    decrementTotalItemInOrder(state,{payload}:PayloadAction<{foodId:number}>) {
      state.newOrder.order.items = state.newOrder.order.items.map(currentOrder => {
        if(currentOrder.data.foodId === payload.foodId && currentOrder.total! > 1) {
          return {
            ...currentOrder,
            total : currentOrder.total! - 1
          }
        }
        return currentOrder;
      });
    },
    addOrderToPendingOrders(state) {
        state.orders.push(state.newOrder.order);
        state.newOrder = initialState.newOrder;
    },
    activeCreatingOrder(state) {
      state.newOrder.creatingOrder = true;
    },
    deactiveCreatingOrder(state) {
      state.newOrder.creatingOrder = false;
    },
    removeItemOfOrder(state,{payload}:PayloadAction<{foodId:number}>) {
      state.newOrder.order.items = state.newOrder.order.items.filter(currentOrder => currentOrder.data.foodId !== payload.foodId);
    },
    addItemsToOrder(state, { payload }: PayloadAction<Food>) {
        state.newOrder.order.items?.push({
          total : 1,
          data : payload,
          orderFoodId : generateRandomId()
        });
    },
  },
});

export const { actions: ordersActions, reducer: orders } = ordersSlice;
