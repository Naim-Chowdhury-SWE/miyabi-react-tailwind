// MenuComponent.tsx
import React, { useState } from "react";
/* import { sushiMenu } from "./Data"; */
import { sushiMenu } from "../../../data/Meny/Menu";

type DishProps = {
  dish: {
    dishname: string;
    pieces?: number[];
    size?: string[];
    types?: string[];
    prices: number[];
    images?: (number | string)[];
    description: string;
  };
};

const DishComponent: React.FC<DishProps> = ({ dish }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
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
    if (dish.images) {
      const sizeIndex = dish.size?.indexOf(size) || 0;
      setCurrentImageIndex(sizeIndex);
      setSelectedSize(size);
      setSelectedPiece(null);
      setSelectedPrice(price);
    }
  };
  const handleTypeClick = (type: string, price: number) => {
    if (dish.images) {
      const typeIndex = dish.types?.indexOf(type) || 0;
      setCurrentImageIndex(typeIndex);
      setSelectedType(type);
      setSelectedPiece(null);
      setSelectedPrice(price);
    }
  };

  return (
    <div key={dish.dishname} className="bg-red-800 p-4 rounded flex flex-col justify-between">
      <section className="">
        <div className="flex flex-col">
      <h3 className="text-2xl font-bold font-cormorant text-white mb-2">{dish.dishname}</h3>
      {dish.images && (
        <img className="min-h-40 max-h-64" src={dish.images[currentImageIndex].toString()} alt={dish.dishname} />
          )}
        </div>
        <p className="text-white font-opensans mb-2">{dish.description}</p>
      </section>
      <section className="font-opensans">
        {dish.types && (
    <p className="font-semibold">Type:{" "}
      {dish.types.map((types, index) => (
        <span
          key={types}
          onClick={() => handleTypeClick(types, dish.prices[index])}
          className={`${
            selectedType === types ? "bg-red-800 text-white  rounded" : "transparent"
          } p-1 cursor-pointer`}
        >
          {types}{" "}
        </span>
      ))}
    </p>
  )}
    {dish.pieces && (
    <p className="font-semibold">Pieces:{" "}
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
    <p className="font-semibold">
      Prices:{" "}
      {dish.prices.map((price) => (
        <span key={price} className="mr-2">
          {price}{" "}
        </span>
      ))}
    </p>
  </section>
    </div>
  );
};

const MenuComponent: React.FC = () => (
  <div className="container mx-auto mt-8">
    {sushiMenu.map((category) => (
      <div key={category.name} className="mb-8">
        <h2 className="text-6xl font-cormorant text-golden text-center font-bold mb-4">{category.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8">
          {category.dishes.map((dish) => (
            <DishComponent key={dish.dishname} dish={dish} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default MenuComponent;
{/* <div className="flex justify-between flex-wrap">
<div>
  {dish.pieces && (
    <p className="font-semibold">Pieces:{" "}
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
</div>" */}