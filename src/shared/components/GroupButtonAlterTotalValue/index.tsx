import React, { memo } from "react";
import styled from "styled-components";

const ButtonAlterFood = styled.button`
  outline: none !important;
  color: var(--payment-primary-color);
  font-weight: bold;
  width: 100%;
  padding: 4px 0;
  text-align: center;
  transition: 0.4s;
`;
const WrapperButtonsAlterFood = styled.div`
  display: flex;
  border: 1px solid var(--payment-primary-color);
  width: 100px;
  overflow: hidden;
  border-radius: 5px;
  ${ButtonAlterFood}:nth-child(even) {
    border-right: 1px solid var(--payment-primary-color);
    border-left: 1px solid var(--payment-primary-color);
  }
  ${ButtonAlterFood}:nth-child(odd) {
    background-color: rgba(30, 130, 230, 0.1);
    &:active {
      transform: scale(2);
    }
  }
`;


type GroupButtonAlterTotalValueProps = {
    onAdd ?: () => void,
    onRemove ?: () => void,
    children ?: React.ReactNode
}
const GroupButtonAlterTotalValue = ({
    children,
    onAdd,
    onRemove
} : GroupButtonAlterTotalValueProps) => {
  return (
    <WrapperButtonsAlterFood>
      <ButtonAlterFood onClick={onRemove}>-</ButtonAlterFood>
      <ButtonAlterFood as="div">{children}</ButtonAlterFood>
      <ButtonAlterFood onClick={onAdd}>+</ButtonAlterFood>
    </WrapperButtonsAlterFood>
  );
};

export default memo(GroupButtonAlterTotalValue);
