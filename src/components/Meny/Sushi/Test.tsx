// MenuComponent.tsx
import React, { useState } from "react";
import { sushiMenu } from "./Data";
/* import { sushiMenu } from "../../../data/Meny/Menu"; */

type DishProps = {
  dish: {
    dishname: string;
    pieces?: number[];
    size?: string[];
    prices: number[];
    images?: (number | string)[];
    description: string;
  };
};

const DishComponent: React.FC<DishProps> = ({ dish }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const handlePiecesClick = (piece: number, price: number) => {
    if (dish.images) {
      const pieceIndex = dish.pieces?.indexOf(piece) || 0;
      setCurrentImageIndex(pieceIndex);
      setSelectedPiece(piece);
      setSelectedSize(null);
      setSelectedPrice(price);
    }
  };

  const handleSizeClick = (size: string, price: number) => {
    setSelectedSize(size);
    setSelectedPiece(null);
    setSelectedPrice(price);
  };

  return (
    <div key={dish.dishname} className="bg-red-800 p-4 rounded">
      <h3 className="text-xl font-semibold mb-2">{dish.dishname}</h3>
      {dish.images && (
        <img src={dish.images[currentImageIndex].toString()} alt={dish.dishname} />
      )}
      <p className="text-white font-opensans mb-2">{dish.description}</p>
      <div className="flex justify-between">
        <div>
          {dish.pieces && (
            <p className="font-semibold">
              Pieces:{" "}
              {dish.pieces.map((piece, index) => (
                <span
                  key={piece}
                  onClick={() => handlePiecesClick(piece, dish.prices[index])}
                  className={`${
                    selectedPiece === piece ? "bg-red-800 text-white  rounded" : "transparent"
                  } p-1 cursor-pointer`}
                >
                  {piece}{" "}
                </span>
              ))}
            </p>
          )}
          {dish.size && (
            <p className="font-semibold">
              Size:{" "}
              {dish.size.map((size, index) => (
                <span
                  key={size}
                  onClick={() => handleSizeClick(size, dish.prices[index])}
                  className={`${
                    selectedSize === size ? "bg-red-800 text-white rounded" : "transparent"
                  } p-1 cursor-pointer`}
                >
                  {size}{" "}
                </span>
              ))}
            </p>
          )}
        </div>
        <div>
        <p className="font-semibold">
            Prices:{" "}
            {dish.prices.map((price) => (
              <span
                key={price}
                className={`${
                  selectedPrice === price ? "bg-red-800 text-white rounded" : "transparent"
                } p-1`}
              >
                {price}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

const MenuComponent: React.FC = () => (
  <div className="container mx-auto mt-8">
    {sushiMenu.map((category) => (
      <div key={category.name} className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.dishes.map((dish) => (
            <DishComponent key={dish.dishname} dish={dish} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default MenuComponent;
