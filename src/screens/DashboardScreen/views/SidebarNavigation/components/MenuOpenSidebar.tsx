import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { SidebarNavigationContext } from "../context/SidebarNavigationContext";

const MenuOpenSidebar = () => {
  return (
    <SidebarNavigationContext.Consumer>
      {({onOpen}) => (
        <div className="text-primary fixed sm:hidden right-0 top-0 m-4 z-0" onClick={onOpen}>
          <FiMoreVertical size={25} />
        </div>
      )}
    </SidebarNavigationContext.Consumer>
  );
};

export default MenuOpenSidebar;
