import { initialState, orders, ordersActions } from "../ordersSlice";
import { OrdersState } from "../ordersSlice";
import { getPendingOrders } from "../selectors";

/* --------------------- Item de una comida para prueba --------------------- */

const foodData = {
  foodId: 1,
  description: "Food description available today",
  price: 23,
  title: "Salad first",
  image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
  category: "breakfast",
};

/* -------------------------- Reductores reusables -------------------------- */

const getInitialNewOrder = () =>orders(initialState, ordersActions.createInitialNewOrder({ name: "David" }));

const addItemToNewOrder = (state: OrdersState) => orders(state, ordersActions.addItemsToOrder(foodData));

const removeItemOfOrder = (state: OrdersState, foodId: number) => orders(state, ordersActions.removeItemOfOrder({ foodId }));

describe("ordersSlice", () => {

  it("Debería obtener el historial de ordenes realizadas", () => {
    const nextState = orders(
      initialState,
      ordersActions.getOrdersHistory([
        {
          user: {},
        },
        {
          user: {},
        },
      ])
    );
    expect(nextState.history.length).toBeGreaterThan(0);

  });


  it("Debería obtener las ordenes que están pendientes a entregar", () => {
    const state = [
      {
        orderId: 1,
        items: [],
        user: {},
        completed: false,
      },
      {
        orderId: 2,
        items: [],
        user: {},
        completed: true,
      },
    ];
    const pendingOrdersSelector = getPendingOrders.resultFunc(state);
    expect(pendingOrdersSelector).not.toHaveLength(state.length);
    expect(pendingOrdersSelector).toHaveLength(1);

  });


  it("Debería crear datos básicos para añadir una orden, el nombre del usuario y un identificador", () => {
    const nextState = getInitialNewOrder();
    const { order } = nextState.newOrder;
    expect(order.orderId).not.toEqual("");
    expect(Object.keys(order.user).length).not.toEqual(0);

  });


  it("Podría cancelar una order que se está creando", () => {
    const nextStateOrderCreated = getInitialNewOrder();
    expect(orders(nextStateOrderCreated, ordersActions.cancelNewOrder())).toEqual(initialState);

  });


  it("Permitir marcar las ordenes pendientes como completadas y enviar al historial", () => {
    const orderId = 1;
    const state: OrdersState = {
      ...initialState,
      orders: [
        {
          orderId: 1,
          items: [],
          user: {},
          completed: false,
        },
        {
          orderId: 2,
          items: [],
          user: {},
          completed: false,
        },
      ],
    };
    const nextState = orders(
      state,
      ordersActions.markOrderAsCompleted({
        orderId,
      })
    );
    const listOrders = nextState.orders;
    expect(listOrders[0].completed).toBeTruthy();
    expect(nextState.history[0].orderId).toEqual(orderId);
    expect(nextState.history).toHaveLength(1);

  });


  it("Debería añadir una orden creada a todos los pedidos que faltan completar", () => {
    const nextState = getInitialNewOrder();
    const nextStateWithOrders = orders(
      nextState,
      ordersActions.addOrderToPendingOrders()
    );
    expect(nextStateWithOrders.orders).toHaveLength(1);

  });


  it("Debería incrementar total de pedidos en un ítem", () => {
    let nextState = getInitialNewOrder();
    let totalItemsAdded = 5;
    let initialTotalItem = 1;
    
    nextState = addItemToNewOrder(nextState);
    expect(nextState.newOrder.order.items[0].total).toEqual(initialTotalItem); // 1 ítem 

    // Añadir 5 ítems más
    for (let i = 1; i <= totalItemsAdded; i++) 
      nextState = orders(nextState,ordersActions.incrementTotalItemInOrder({foodId:foodData.foodId}));
    

    let totalItemAdded = totalItemsAdded + initialTotalItem; // 6 ítems
    expect(nextState.newOrder.order.items[0].total).toEqual(totalItemAdded);
    
  });

  
  it("Debería disminuir la cantidad de pedidos en un ítem", () => {
    let nextState = getInitialNewOrder();
    nextState = addItemToNewOrder(nextState);
    const increment = () => {
        nextState = orders(nextState,ordersActions.incrementTotalItemInOrder({foodId:foodData.foodId}));
    }
    increment();
    increment();
    expect(nextState.newOrder.order.items[0].total).toEqual(3); 
    nextState = orders(nextState,ordersActions.decrementTotalItemInOrder({foodId:foodData.foodId}));
    expect(nextState.newOrder.order.items[0].total).toEqual(2); 

  });


  it("Debería remover el ítem de la orden que se está creando", () => {
    let nextState = getInitialNewOrder();
    expect(nextState.newOrder.order.items).toHaveLength(0);

    nextState = addItemToNewOrder(nextState);
    nextState = removeItemOfOrder(nextState, foodData.foodId);
    const { order } = nextState.newOrder;
    expect(order.items).toHaveLength(0);

  });


  it("Debería añadir un ítem a la orden que se está creando", () => {
    let nextState = getInitialNewOrder();
    expect(nextState.newOrder.order.items).toHaveLength(0);

    nextState = addItemToNewOrder(nextState);
    const { order } = nextState.newOrder;

    expect(order.items).toHaveLength(1);

  });

});
