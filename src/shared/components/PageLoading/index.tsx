import React from 'react'
import SpinnerLoading from '../SpinnerLoading'

export default function PageLoading() {
    return (
        <div className="fixed w-full h-full left-0 top-0 flex items-center justify-center">
            <SpinnerLoading/>
        </div>
    )
}
