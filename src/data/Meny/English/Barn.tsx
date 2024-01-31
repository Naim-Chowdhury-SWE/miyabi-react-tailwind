import BarnYakiniku from "../../../assets/food/barn/BarnYakiniku.webp";
import BarnYakitori from "../../../assets/food/barn/BarnYakitori.webp";
import BarnKaraage from "../../../assets/food/barn/BarnKaraage.webp";
import { MenuCategory } from "../../../types";

export const engBarn: MenuCategory = {
  id: "barn",
  name: "Kids Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Yakiniku"],
      types: [""],
      prices: [89],
      images: [BarnYakiniku],
      description: ["Sliced Beef, stirfried, served with rice and salad"],
    },
    {
      id: 2,
      dishname: ["Yakitori"],
      types: [""],
      prices: [89],
      images: [BarnYakitori],
      description: ["Chicken skewers with yakitori sauce, served with rice"],
    },
    {
      id: 3,
      dishname: ["Karaage"],
      types: [""],
      prices: [89],
      images: [BarnKaraage],
      description: ["Deep fried chicken with rice, salad and sauce"],
    },
  ],
};