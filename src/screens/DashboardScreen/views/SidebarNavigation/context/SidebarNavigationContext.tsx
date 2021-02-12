import { globalHistory } from "@reach/router";
import { createContext, FC, useEffect, useState } from "react"

interface SidebarNavigationContextState {
    open : boolean;
    onOpen : () => void;
    onClose : () => void;
}

export const SidebarNavigationContext = createContext<SidebarNavigationContextState>({
    open : false,
    onClose : () => null,
    onOpen : () => null
});

export const SidebarNavigationProvider : FC = ({children}) => {
    const [ open , setOpen ] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = globalHistory.listen(() => {
            setOpen(false);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    const value : SidebarNavigationContextState = {
        open,
        onClose : () => setOpen(()=>false),
        onOpen : () => setOpen(()=>true)
    }
    return(
        <SidebarNavigationContext.Provider value={value}>
            {children}
        </SidebarNavigationContext.Provider>
    )
}