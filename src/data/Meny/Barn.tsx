import BarnYakiniku from "../../assets/food/BarnYakiniku.webp";
import BarnYakitori from "../../assets/food/BarnYakitori.webp";
import BarnKaraage from "../../assets/food/BarnKaraage.webp";
import { MenuCategory } from "../../types";

export const Barn: MenuCategory = {
  name: "Barn Meny",
  dishes: [
    {
      dishname: ["Yakiniku"],
      types: [""],
      prices: [89],
      images: [BarnYakiniku],
      description: ["Strimlad Entrecote, serveras med ris"],
    },
    {
      dishname: ["Yakitori"],
      types: [""],
      prices: [89],
      images: [BarnYakitori],
      description: ["Kycklingspett med yakitorisås, serveras med ris"],
    },
    {
      dishname: ["Karaage"],
      types: [""],
      prices: [89],
      images: [BarnKaraage],
      description: ["Friterade kycklingbitar med ris samt sås"],
    },
  ],
};