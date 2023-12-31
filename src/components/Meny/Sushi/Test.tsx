// MenuComponent.tsx
import React, { useState } from "react";
import { Meny } from "../../../data/Meny/Menu";
type DishProps = {
  dish: {
    dishname: string;
    pieces?: number[];
    size?: string[];
    types?: string[] | undefined;
    prices: number[];
    images?: (number | string)[];
    description: string | string[] | undefined;
  };
};

const DishComponent: React.FC<DishProps> = ({ dish }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(dish.pieces?.[0] || null);
  const [selectedSize, setSelectedSize] = useState<string | null>(dish.size?.[0] || null);
  const [selectedType, setSelectedType] = useState<string | null>(dish.types?.[0] || null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(
    dish.prices.length > 0 ? dish.prices[0] : null
  );

  const handlePiecesClick = (piece: number, index: number) => {
    if (dish.images) {
      setCurrentImageIndex(index);
      setSelectedPiece(piece);
      setSelectedSize(null);
      setSelectedType(null);
      setSelectedPrice(dish.prices.length === 1 ? dish.prices[0] : dish.prices[index]);
    }
  };

  const handleSizeClick = (size: string, index: number) => {
    if (dish.images) {
      setCurrentImageIndex(index);
      setSelectedSize(size);
      setSelectedPiece(null);
      setSelectedType(null);
      setSelectedPrice(dish.prices.length === 1 ? dish.prices[0] : dish.prices[index]);
    }
  };

  const handleTypeClick = (type: string, index: number) => {
    if (dish.images) {
      setCurrentImageIndex(index);
      setSelectedType(type);
      setSelectedPiece(null);
      setSelectedSize(null);
      setSelectedPrice(dish.prices.length === 1 ? dish.prices[0] : dish.prices[index]);
    }
  };
  const uniquePrices = [...new Set(dish.prices)];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div key={dish.dishname} className="rounded border-2 border-red-800 flex flex-col justify-between w-full">
      <section className="p-2 h-full">
        <div className="flex flex-col">
          <div className="p-1 h-20">
            <h3 className="text-2xl text-center font-bold font-cormorant text-white mb-2">{dish.dishname}</h3>
          </div>
          {dish.images && (
            <img
              className="min-h-32 max-h-48 cursor-pointer"
              onClick={handleImageClick}
              src={dish.images[currentImageIndex].toString()}
              alt={dish.dishname}
            />
          )}
        </div>
        <p className="text-white text-center font-opensans my-2">{dish.description}</p>
      </section>

      {isModalOpen && (
        <dialog open className="fixed inset-0 bg-black bg-opacity-75">
          <img
            className="cursor-pointer p-52"
            onClick={handleImageClick}
            src={dish.images[currentImageIndex].toString()}
            alt={dish.dishname}
          />
        </dialog>
      )}

      <section className="font-opensans text-white">     
        {dish.types && dish.types.length > 0 && (
    <div
    className={`${
      dish.types.length < 4 ? 'flex justify-center items-center' : 'grid'
    } grid-cols-4 gap-0`}
  >
    {dish.types.map((types, index) => (
        <span
          key={types}
          onClick={() => handleTypeClick(types, index)}
          className={`${
            selectedType === types ? "bg-red-900" : "transparent"
          } mx-1 p-1 rounded-lg text-center cursor-pointer`}
        >
          {types}{" "}
        </span>
      ))}
    </div>
  )}
    {dish.pieces && dish.pieces.length > 0 && (
    <div
    className={`${
      dish.pieces.length < 4 ? 'flex justify-center items-center' : 'grid'
    } grid-cols-4 gap-0`}
  >
            {dish.pieces.map((piece, index) => (
        <span
          key={piece}
          onClick={() => handlePiecesClick(piece, index)}
          className={`${
            selectedPiece === piece ? "bg-red-900" : "transparent"
          } mx-1 p-1 rounded-lg text-center cursor-pointer`}
        >
          {piece}{" "} Bitar
        </span>
      ))}
      </div>
  )}
    {dish.size && dish.size.length > 0 && (
    <div
    className={`${
      dish.size.length < 4 ? 'flex justify-center items-center' : 'grid'
    } grid-cols-4 gap-0`}
  >
      {dish.size.map((size, index) => (
        <span
          key={size}
          onClick={() => handleSizeClick(size, index)}
          className={`${
            selectedSize === size ? "bg-red-900" : "transparent"
          } mx-1 p-1 rounded-lg text-center cursor-pointer`}
        >
          {size}{" "}
        </span>
      ))}
    </div>
          )}

<div className="flex flex-col items-center">
          {uniquePrices.map((price) => (
            <span
              key={price}
              className={`${
                selectedPrice === price ? "bg-red-900" : "hidden"
              } bg-red-400 my-4 p-1 rounded-lg text-center cursor-pointer`}
            >
              {price}kr
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

const MenuComponent: React.FC = () => (
  <div className="container mx-auto mt-8">
    {Meny.map((category) => (
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