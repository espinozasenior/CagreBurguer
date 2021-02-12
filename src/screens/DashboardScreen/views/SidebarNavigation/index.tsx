import React from 'react'
import LinkNavigation from './components/LinkNavigation'
import { AiOutlineHome } from "react-icons/ai"
import WrapperSidebar from "./components/WrapperSidebar"
import { BiFoodMenu } from "react-icons/bi"
import { BsClockHistory } from "react-icons/bs";
import NameApp from './components/NameApp'
import { SidebarNavigationProvider } from './context/SidebarNavigationContext'
import MenuOpenSidebar from './components/MenuOpenSidebar'

const SidebarNavigation = () => {
    return (
    <SidebarNavigationProvider>
        <WrapperSidebar>
            <NameApp/>
            <LinkNavigation to="./" icon={AiOutlineHome}>Inicio</LinkNavigation>
            <LinkNavigation to="pending" icon={BiFoodMenu}>Pendientes</LinkNavigation>
            <LinkNavigation to="history" icon={BsClockHistory}>Historial</LinkNavigation>
        </WrapperSidebar>
        <MenuOpenSidebar/>
    </SidebarNavigationProvider>
    )
}

export default SidebarNavigation
