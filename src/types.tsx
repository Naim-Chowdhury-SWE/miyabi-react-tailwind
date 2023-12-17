// types.tsx
export type Dish = {
    dishname: string;
    pieces?: number[];
    size?: string[];
    prices: number[];
    images?: number[] | string[];
    description: string;
  };
  
  export type MenuCategory = {
    name: string;
    dishes: Dish[];
  };
  