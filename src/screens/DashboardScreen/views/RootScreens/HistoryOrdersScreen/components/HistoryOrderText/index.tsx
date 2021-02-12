import clsx from "clsx";
import React, { FC } from "react";

const HistoryOrderText: FC<{
  bold?: boolean;
  neutral?: boolean;
  className?: string;
  fontSize?: string;
}> = ({ children, neutral, bold, className, fontSize }) => {
  const textClassnames = clsx(
    className,
    fontSize ? fontSize : "text-sm",
    bold && "font-bold",
    neutral && "text-gray-500"
  );
  return <span className={textClassnames}>{children}</span>;
};

export default HistoryOrderText;
