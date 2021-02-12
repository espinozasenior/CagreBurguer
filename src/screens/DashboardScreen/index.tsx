import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";
import SidebarNavigation from "./views/SidebarNavigation";

const GlobalStyles = createGlobalStyle`
    body,html {
        height:100%;
        background-color:var(--app-background-color);
    }
    #root,#root > div {
        height:100%;
        width:100%;
        display:flex;
    }
`;

const DashboardScreen: FC<RouteComponentProps> = () => {
  return (
    <>
      <GlobalStyles />
      <SidebarNavigation />
      <Routes/>
    </>
  );
};

export default DashboardScreen;
