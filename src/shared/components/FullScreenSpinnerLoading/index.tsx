import React from "react";
import SpinnerLoading from "../SpinnerLoading";


export default function FullScreenSpinnerLoading({
  className,
  text
}: {
  className?: string;
  text ?: string;
}) {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className} z-40`}>
      <span className="m-1">
        <SpinnerLoading />
        {text && <div className="text-gray-500 mt-2">{text}</div>}
      </span>
    </div>
  );
}
