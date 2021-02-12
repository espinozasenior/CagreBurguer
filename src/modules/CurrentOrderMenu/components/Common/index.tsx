import styled from "styled-components";

export const WrapperSidebarOrderMenu = styled.div.attrs({
    className : "flex flex-col flex-none bg-white shadow-xl"
})`
    width:var(--sidebar-current-order-width);
    animation:appear-sidebar-order .3s 1;
    @keyframes appear-sidebar-order {
        from {
            opacity:0;
            transform:translateX(100%);
        }
    }
    @media screen and (max-width: 640px) {
        --sidebar-current-order-width : 290px;
    }
`

export const WrapperSidebarHeader = styled.div.attrs({
    className : "flex items-center flex-none justify-center"
})`
    border-bottom:1px solid rgba(0,0,0,.1);
    height:60px;
`


export const BadgeTotalOrders = styled.div.attrs({
    className:"flex items-center justify-center rounded-full text-white bg-blue-500 font-bold text-sm"
})`
    width:25px;
    height:25px;
`