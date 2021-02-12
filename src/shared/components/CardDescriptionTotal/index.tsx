import clsx from "clsx";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 15px 12px;
  border-radius: 10px;
  margin: 10px 0;
`;

type CardDescriptionTotalProps = {
  title?: string;
  value?: string;
  className?: string;
  bg?: string;
};
const CardDescriptionTotal = ({
  title,
  value,
  bg,
  className,
}: CardDescriptionTotalProps) => {
  return (
    <Wrapper className={clsx(bg ? bg : "bg-green-100", className)}>
      <div className="text-lg">{title}</div>
      <div className="font-bold">{value}</div>
    </Wrapper>
  );
};

export default CardDescriptionTotal;
