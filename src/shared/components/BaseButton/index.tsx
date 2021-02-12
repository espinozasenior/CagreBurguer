import styled from "styled-components";

const BaseButton = styled.button`
  background-color: var(--primary-color);
  color: var(--text-primary-color-alpha-100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  font-weight: bold;
  font-size:15px;
  outline:none !important;
  border-radius: 30px;
`;

export default BaseButton;
