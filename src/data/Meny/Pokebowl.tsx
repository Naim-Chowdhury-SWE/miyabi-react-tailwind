import PokebowlLax from "../../assets/food/pokebowl/PokebowlLax.webp"
import PokebowlRäka from "../../assets/food/pokebowl/PokebowlRäka.webp"
import PokebowlKyckling from "../../assets/food/pokebowl/PokebowlKyckling.webp"
import PokebowlTofu from "../../assets/food/pokebowl/PokebowlTofu.webp"
import { MenuCategory } from "../../types";

export const Pokebowl: MenuCategory = {
  id:"pokebowl",
  name: "Poké Bowls",
  dishes: [
    {
      id: 1,
      dishname: ["Poké bowl Lax & Tonfisk"],
      types: [],
      prices: [139],
      images: [PokebowlLax],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 2,
      dishname: ["Poké bowl Räkor"],
      types: [],
      prices: [139],
      images: [PokebowlRäka],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 3,
      dishname: ["Poké bowl Kyckling"],
      types: [],
      prices: [139],
      images: [PokebowlKyckling],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 4,
      dishname: ["Poké bowl Tofu"],
      types: [],
      prices: [139],
      images: [PokebowlTofu],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
  ],
};
