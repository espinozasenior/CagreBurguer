import React, { FC } from "react";

const BigTitle: FC<{id?:string}> = ({ children, id } ) => {
  return <h1 className="font-bold text-3xl mb-5" id={id}>{children}</h1>;
};

export default BigTitle;
