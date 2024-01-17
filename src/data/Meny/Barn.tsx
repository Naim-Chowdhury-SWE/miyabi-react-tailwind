import BarnYakiniku from "../../assets/food/barn/BarnYakiniku.webp";
import BarnYakitori from "../../assets/food/barn/BarnYakitori.webp";
import BarnKaraage from "../../assets/food/barn/BarnKaraage.webp";
import { MenuCategory } from "../../types";

export const Barn: MenuCategory = {
  id: "barn",
  name: "Barn Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Yakiniku"],
      types: [""],
      prices: [89],
      images: [BarnYakiniku],
      description: ["Strimlad Entrecote, serveras med ris"],
    },
    {
      id: 2,
      dishname: ["Yakitori"],
      types: [""],
      prices: [89],
      images: [BarnYakitori],
      description: ["Kycklingspett med yakitorisås, serveras med ris"],
    },
    {
      id: 3,
      dishname: ["Karaage"],
      types: [""],
      prices: [89],
      images: [BarnKaraage],
      description: ["Friterade kycklingbitar med ris samt sås"],
    },
  ],
};