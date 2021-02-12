import React, { FC } from "react";
import { normalizePriceToString } from "../../../../shared/utils/normalizePrice";

type FoodMenuCardProps = {
  image?: string;
  title?: string;
  price?: number;
  renderOverlayImage ?: () => React.ReactNode;
};
const FoodMenuCard: FC<FoodMenuCardProps> = ({
  children,
  image,
  title,
  price,
  renderOverlayImage
}) => {
  return (
    <div className="p-3 bg-gray-50 relative">
      <div className="mb-1 flex flex-col justify-center">
        <div className="w-full lg:w-24 h-24 rounded-md object-cover m-auto overflow-hidden relative mb-2">
          <img
            className="w-full h-full object-cover m-auto"
            src={image}
            alt={image}
          />
          {renderOverlayImage &&(
            <div className="absolute left-0 top-0 w-full h-full flex food-menu__overlay">{renderOverlayImage()}</div>
          )}
        </div>
        <span className="font-bold text-lg text-center break-words">{title}</span>
        <span className="font-bold text-yellow-500 text-sm text-center block">{normalizePriceToString(price || 0)}</span>
      </div>
      {children}
    </div>
  );
};

export default FoodMenuCard;
