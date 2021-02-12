import React, { FC } from "react";

type MessageDescriptioEmptyProps = {
  title?: string;
  message?: string;
  image?: string;
};
const MessageDescriptionEmpty: FC<MessageDescriptioEmptyProps> = ({
  children,
  title,
  message,
  image,
}) => {
  return (
    <div className="mt-5 mb-5 p-5">
      <img src={image} alt="" className="block m-auto w-32 mb-2" />
      <p className="text-gray-900 mb-1 font-bold text-xl text-center">{title}</p>
      <p className="text-gray-400 text-center text-sm">{message}</p>
      <div className="mt-5 text-center">{children}</div>
    </div>
  );
};

export default MessageDescriptionEmpty;
