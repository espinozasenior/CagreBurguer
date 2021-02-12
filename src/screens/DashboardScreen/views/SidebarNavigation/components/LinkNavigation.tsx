import { Link, useMatch } from "@reach/router";
import clsx from "clsx";
import React, { FC, memo } from "react";

type LinkNavigationProps = {
  to: string;
  icon: React.JSXElementConstructor<{size:number}>;
};

const LinkNavigation: FC<LinkNavigationProps> = memo(({to, children, icon: IconComponent }) => {
  const match = useMatch(to);
  
  const aClassnames = clsx('flex flex-col items-center mx-2 p-2 my-5 rounded-xl  duration-300',match ? (
      'bg-primary text-white shadow-lg'
  ) : (
      'text-gray-400'
  )); 

  return (
    <Link className={aClassnames} to={to}>
      <div className="mb-2" aria-hidden="true">
        <IconComponent size={20} />
      </div>
      <span className="text-sm font-bold">{children}</span>
    </Link>    
  );
});

export default LinkNavigation;
