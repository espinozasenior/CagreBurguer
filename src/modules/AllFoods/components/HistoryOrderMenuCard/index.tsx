import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { Order } from '../../../../core/entities';
import { ordersActions } from '../../../../store/orders/ordersSlice';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const HistoryOrderMenuCard = ({ order }: { order: Order }) => {
    const dispatch = useDispatch();
    const onChecked = () => {
      dispatch(ordersActions.markOrderAsCompleted({orderId:order.orderId}));
    }  

    const getLimitImages = order.items.length > 4 ? order.items.splice(0,4) : order.items;

    return (
      <article className="bg-white flex w-full px-5 border-b-2 border-gray-100 py-6 items-center flex-col sm:flex-row">
        <div className="flex items-center w-full">
          <div className="mr-3 md:cursor-pointer" aria-hidden="true" aria-label="Marcar como completado">
            <RiCheckboxBlankCircleLine onClick={onChecked} size={25} className="text-gray-600" />
          </div>
          <div className="flex flex-col mr-2">
            <div className="font-bold mb-2">Para: {order.user.name}</div>
            <span className="text-gray-400">
              Pedidos: {order.items.map((e) => e.data.title).join(", ")}
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <div className="flex items-center">
            {getLimitImages.map((e, key) => (
              <div className="relative flex" key={key} style={{ width: "30px", height: "40px" }}>
                <div
                  style={{ width: "40px", height: "40px" }}
                  className="rounded-full flex overflow-hidden border-2 border-white flex-none"
                >
                  <img className="w-full h-full" src={e.data.image} alt={e.data.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
}

export default memo(HistoryOrderMenuCard)
