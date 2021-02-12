import React, { FC } from "react";
import styled from "styled-components";
import { SidebarNavigationContext } from "../context/SidebarNavigationContext";

const Wrapper = styled.nav<{ open?: boolean }>`
  height: 100%;
  background-color: var(--sidebar-navigator-color);
  width: var(--sidebar-navigator-width);
  @media screen and (max-width: 640px) {
    position: fixed;
    right: 0;
    z-index: 1000;
    width: 100%;
    overflow-y:auto;
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

const WrapperSidebar: FC = ({ children }) => {
  return (
    <SidebarNavigationContext.Consumer>
      {({ open }) => <Wrapper open={open}>{children}</Wrapper>}
    </SidebarNavigationContext.Consumer>
  );
};

export default WrapperSidebar;
