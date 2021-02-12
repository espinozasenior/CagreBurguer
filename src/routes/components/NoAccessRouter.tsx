import React, { FC } from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import useAuthenticate from '../../hooks/useAuthenticate'

interface NoAccessRouterProps extends RouteComponentProps {
    component : FC<RouteComponentProps>,
} 

const NoAccessRouter : FC<NoAccessRouterProps> = ({component:Component,...restProps}) => {
    const { isAuth } = useAuthenticate();
    return !isAuth ? <Component {...restProps} /> : <Redirect to="/dashboard/" noThrow />
}

export default NoAccessRouter
