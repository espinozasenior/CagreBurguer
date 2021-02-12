import React, { Suspense } from "react";

type LazyComponentProps = { 
    fallback: React.ReactElement | null,
    component : React.JSXElementConstructor<any>
 };
const LazyComponent = ({
  fallback,
  component: Component,
  ...restProps
}: LazyComponentProps) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...restProps} />
    </Suspense>
  );
};

export default LazyComponent;
