// types.tsx
export type Dish = {
  dishname: string;
  types?: string[];
    pieces?: number[];
  size?: string[];
    type?: string[];
    prices: number[];
    images?: number[] | string[];
    description: string;
  };
  
  export type MenuCategory = {
    name: string;
    dishes: Dish[];
  };
  