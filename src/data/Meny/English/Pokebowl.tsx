import PokebowlLax from "../../../assets/food/pokebowl/PokebowlLax.webp"
import PokebowlRäka from "../../../assets/food/pokebowl/PokebowlRäka.webp"
import PokebowlKyckling from "../../../assets/food/pokebowl/PokebowlKyckling.webp"
import PokebowlTofu from "../../../assets/food/pokebowl/PokebowlTofu.webp"
import { MenuCategory } from "../../../types";

export const engPokebowl: MenuCategory = {
  id: "pokebowl",
  name: "Poké Bowl Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Poké Bowl Salmon & Tuna"],
      types: [],
      prices: [139],
      images: [PokebowlLax],
      description: [
        "Served with rice, mango, avocado, carrots, cucumber, beans. Topped with chili mayo and teriyaki sauce",
      ],
    },
    {
      id: 2,
      dishname: ["Poké Bowl Shrimp"],
      types: [],
      prices: [139],
      images: [PokebowlRäka],
      description: [
        "Served with rice, mango, avocado, carrots, cucumber, beans. Topped with chili mayo and teriyaki sauce",
      ],
    },
    {
      id: 3,
      dishname: ["Poké Bowl Chicken"],
      types: [],
      prices: [139],
      images: [PokebowlKyckling],
      description: [
        "Served with rice, mango, avocado, carrots, cucumber, beans. Topped with chili mayo and teriyaki sauce",
      ],
    },
    {
      id: 4,
      dishname: ["Poké Bowl Tofu"],
      types: [],
      prices: [139],
      images: [PokebowlTofu],
      description: [
        "Served with rice, mango, avocado, carrots, cucumber, beans. Topped with chili mayo and teriyaki sauce",
      ],
    },
  ],
};

