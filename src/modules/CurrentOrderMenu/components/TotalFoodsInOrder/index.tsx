import React from 'react'
import { useSelector } from 'react-redux';
import { getTotalFoodsInCurrentOrder } from '../../../../store/orders/selectors'
import { BadgeTotalOrders } from "../Common"

const TotalFoodsInOrder = () => {
    const total = useSelector(getTotalFoodsInCurrentOrder);
    return (
        <div className="flex items-center">
            <div className="font-bold mr-2 text-lg mb-1">Menú</div>
            <BadgeTotalOrders>{total}</BadgeTotalOrders>
        </div>
    )
}

export default TotalFoodsInOrder
