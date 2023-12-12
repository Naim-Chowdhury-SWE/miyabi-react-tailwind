// menuData.tsx
import Sushi1 from "../../../assets/food/Yakiniku.webp";
import Sushi2 from "../../../assets/food/BlandadSushi.webp";
import Sushi3 from "../../../assets/food/LaxSushi.webp";

type Dish = {
    dishname: string;
    pieces?: number[];
    size?: string[];
    prices: number[];
    images?: number[] | string[];
    description: string;
  };
  
  type MenuCategory = {
    name: string;
    dishes: Dish[];
};
  
export const sushiMenu: MenuCategory[] = [
    {
      name: "Mixed Sushi",
      dishes: [
        {
          dishname: "Salmon Roll",
              pieces: [8, 10, 12],
              prices: [100, 120, 140],
              images: [Sushi1, Sushi2, Sushi3],
              description: "Sushi roll with fresh salmon, avocado, tamago, and octopus.",
        },
        {
          dishname: "Vegetarian Roll",
          pieces: [8, 10, 12],
            prices: [90, 110, 130],
            images: [Sushi1, Sushi2, Sushi3],
          description: "Vegetarian sushi roll with avocado, cucumber, and tofu.",
        },
        {
          dishname: "Spicy Tuna Roll",
          pieces: [8, 10, 12],
          prices: [110, 130, 150],
          description: "Sushi roll with spicy tuna, avocado, and spicy mayo.",
        },
        {
          dishname: "California Tuna Roll",
          pieces: [8, 10, 12],
          prices: [119, 139, 159],
          description: "Sushi roll with spicy tuna, avocado, and spicy mayo.",
        },
        {
          dishname: "Temake Roll",
          pieces: [8, 10, 12],
          prices: [125, 145, 165],
          description: "Sushi roll with spicy tuna, avocado, and spicy mayo.",
        },
      ],
    },
    {
      name: "Norimaki",
      dishes: [
        {
          dishname: "California Roll",
          pieces: [8, 10, 12],
          prices: [99, 119, 139],
          description: "Seaweed roll with avocado and crabmeat, topped with mayo.",
        },
        {
          dishname: "Tempura Roll",
          pieces: [8, 10, 12],
          prices: [105, 125, 145],
          description: "Tempura-fried sushi roll with shrimp and vegetables.",
        },
        {
          dishname: "Dragon Roll",
          pieces: [8, 10, 12],
          prices: [120, 140, 160],
          description: "Sushi roll with eel, avocado, and eel sauce.",
        },
      ],
    },
    {
      name: "PokéBowl",
      dishes: [
        {
          dishname: "Salmon PokéBowl",
          size: ["Regular", "Large"],
          prices: [129, 169],
          description: "A salad bowl with fresh salmon and a variety of vegetables.",
        },
        {
          dishname: "Tuna PokéBowl",
          size: ["Regular", "Large"],
          prices: [139, 179],
          description: "A salad bowl with marinated tuna and tropical fruits.",
        },
        {
          dishname: "Vegetarian PokéBowl",
          size: ["Regular", "Large"],
          prices: [119, 149],
          description: "A vegetarian salad bowl with tofu, avocado, and mixed greens.",
        },
      ],
    },
  ];
  