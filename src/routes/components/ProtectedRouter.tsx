import { Redirect, RouteComponentProps } from '@reach/router'
import React, { FC } from 'react'
import useAuthenticate from '../../hooks/useAuthenticate'

interface ProtectedRouterProps extends RouteComponentProps {
    component : FC<RouteComponentProps>,
} 
const ProtectedRouter : FC<ProtectedRouterProps> = ({component:Component,...restProps}) => {
    const { isAuth } = useAuthenticate();
    return isAuth ? <Component {...restProps} /> : <Redirect to="/login" noThrow />
}

export default ProtectedRouter
