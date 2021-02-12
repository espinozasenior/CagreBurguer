import React, { FC, useState } from "react";
import styled from "styled-components";

const FormAccessTabOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width:100%;
  max-width:500px;
  margin-left:auto;
  margin-right:auto;
`;

const TabOption = styled.div<{ active?: boolean }>`
  color: ${(props) => (props.active ? "white" : "rgba(255,255,255,.7)")};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 10px;
`;

export const AuthenticationOption: FC<{title: string;active?: boolean;onClick?: () => void }> = ({ title, onClick, active }) => {
  return (
    <TabOption onClick={onClick} active={active}>
      {title}
    </TabOption>
  );
};

const AuthenticationTabOptions: FC = ({ children }) => {
  const [option, setOption] = useState<number>(0);
  const childrens = React.Children.toArray(children);
  return (
    <div>
      <FormAccessTabOptions>
        {childrens.map((item, index) => {
          return React.cloneElement(item as React.ReactElement, {
            onClick: () => setOption(index),
            active: option === index,
          });
        })}
      </FormAccessTabOptions>
      <div>{(childrens[option] as any).props.children}</div>
    </div>
  );
};

export default AuthenticationTabOptions;
