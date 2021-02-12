import React, { FC } from 'react'
import HistoryOrderText from './HistoryOrderText'

const HistoryOrderTextHeader : FC<{text:string}> = ({text}) => {
    return (
        <td className="text-center pb-3"><HistoryOrderText bold fontSize="text-base">{text}</HistoryOrderText></td>
    )
}

export default HistoryOrderTextHeader
