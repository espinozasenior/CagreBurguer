import React, { FC } from "react";
import styled from "styled-components";
import BaseButton from "../BaseButton";

const Floating = styled(BaseButton)`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  &:active {
    transform: scale(1.2);
  }
`;

type FloatingActionButtonProps = {
  icon?: React.ReactNode;
  onClick ?: () => void
};
const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  icon,
  children,
  onClick
}) => {
  return (
    <Floating onClick={onClick}>  
      { icon ? <span className="floating__icon">{icon}</span> : children }
    </Floating>
  );
};

export default FloatingActionButton;
