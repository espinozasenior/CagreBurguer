import React from "react";
import { MdClose } from "react-icons/md";
import { SidebarNavigationContext } from "../context/SidebarNavigationContext";

const NameApp = () => {
  return (
    <div className="sm:hidden my-4">
      <div className="flex justify-end">
        <SidebarNavigationContext.Consumer>
          {({ onClose }) => (
            <div className="bg-gray-100 flex items-center justify-center rounded-full w-11 h-11 mr-2" onClick={onClose} >
              <MdClose size={25} />
            </div>
          )}
        </SidebarNavigationContext.Consumer>
      </div>
      <div className="font-bold text-3xl text-center">Esquina caliente</div>
      <img className="block my-10 mx-auto" src="images/burger_logo.png" alt="burger-logo" width="200" />
    </div>
  );
};

export default NameApp;
