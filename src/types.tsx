// types.tsx
export type Dish = {
  id: number
  dishname: string[];
  types?: string[];
  pieces?: number[];
  size?: string[];
  type?: string[];
  prices: number[];
  images?: number[] | string[];
  description: string | string[] | undefined;
};
  
export type DishProps = {
  dish: {
    dishname: string[];
    pieces?: number[];
    size?: string[];
    types?: string[] | undefined;
    prices: number[];
    images?: (number | string)[] | undefined;
    description: string | string[] | undefined;
  };
};
  
export type MenuCategory = {
    id: string,
    name: string;
    dishes: Dish[];
  };
  
  export interface EmblaCarouselProps {
    slides: number[];
    options: {
      loop: boolean;
      startIndex: number;
      draggable: boolean;
      speed: number;
    };
  }