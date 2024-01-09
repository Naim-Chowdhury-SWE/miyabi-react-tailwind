import PokebowlLax from "../../assets/food/PokebowlLax.webp"
import PokebowlRäka from "../../assets/food/PokebowlRäka.webp"
import PokebowlKyckling from "../../assets/food/PokebowlKyckling.webp"
import PokebowlTofu from "../../assets/food/PokebowlTofu.webp"
import { MenuCategory } from "../../types";

export const PokeBowl: MenuCategory = {
  name: "PokéBowls",
  dishes: [
    {
      id: 1,
      dishname: ["Pokébowl Lax & Tonfisk"],
      type: [],
      prices: [139],
      images: [PokebowlLax],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 2,
      dishname: ["Pokébowl Räkor"],
      type: [],
      prices: [139],
      images: [PokebowlRäka],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 3,
      dishname: ["Pokébowl Kyckling"],
      type: [],
      prices: [139],
      images: [PokebowlKyckling],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
    {
      id: 4,
      dishname: ["Pokébowl Tofu"],
      type: [],
      prices: [139],
      images: [PokebowlTofu],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
  ],
};
