import RisnudlarEntrecote from "../../../assets/food/lunch/RisnudlarEntrecote.webp";
import KycklingJapanskCurry from "../../../assets/food/lunch/KycklingJapanskCurry.webp";
import Yakisoba from "../../../assets/food/varmratter/Yakisoba.webp";
import WokadKyckling from "../../../assets/food/varmratter/WokadKyckling.webp";
import Karaage from "../../../assets/food/varmratter/Karaage.webp";
import BlandadSushi9 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi11 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi13 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import Yakitori from "../../../assets/food/varmratter/Yakitori.webp";
import Yakiniku from "../../../assets/food/varmratter/Yakiniku.webp";
import BibimbapEntrecote from "../../../assets/food/varmratter/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../../assets/food/varmratter/BibimbapKyckling.webp";
import BibimbapRäka from "../../../assets/food/varmratter/BibimbapRäka.webp";
import BibimbapLax from "../../../assets/food/varmratter/BibimbapLax.webp";
import BibimbapTofu from "../../../assets/food/varmratter/BibimbapTofu.webp";
import PokebowlLax from "../../../assets/food/pokebowl/PokebowlLax.webp"
import PokebowlRäka from "../../../assets/food/pokebowl/PokebowlRäka.webp"
import PokebowlKyckling from "../../../assets/food/pokebowl/PokebowlKyckling.webp"
import PokebowlTofu from "../../../assets/food/pokebowl/PokebowlTofu.webp"

import { MenuCategory } from "../../../types";

const monday = "Stir-fried Rice Noodles with sliced beef and vegetables";
const tuesday = "Stir-fried chicken with rice and vegetables";
const wednesday = "Japanese Curry with chicken, vegetables, and rice";
const thursday = "Yakisoba (Stir-fried egg noodles with sliced beef)";
const friday = "Chicken Karage (Fried chicken with rice and sauce)";

export const engLunch: MenuCategory = {
  id: "lunch",
  name: "Lunch Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      types: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      prices: [125],
      images: [RisnudlarEntrecote, WokadKyckling, KycklingJapanskCurry, Yakisoba, Karaage],
      description: [monday, tuesday, wednesday, thursday, friday],
    },
    {
      id: 2,
      dishname: ["Mixed Sushi"],
      pieces: [9, 11, 13],
      prices: [109, 129, 149],
      images: [BlandadSushi9, BlandadSushi11, BlandadSushi13],
      description: ["Mixed Sushi with a variety of sushi pieces."],
    },
    {
      id: 3,
      dishname: ["Bibimbap"],
      types: ["Beef", "Chicken", "Shrimp", "Salmon (raw)", "Tofu"],
      prices: [139],
      images: [BibimbapEntrecote, BibimbapKyckling, BibimbapRäka, BibimbapLax, BibimbapTofu],
      description: ["Korean dish with rice, various salads, kimchi, and spicy sauce. Topped with a fried egg."],
    },
    {
      id: 4,
      dishname: ["Yakiniku"],
      size: ["Normal"],
      prices: [123],
      images: [Yakiniku],
      description: ["Sliced Beef, stirfried, served with rice and salad"],
    },
    {
      id: 5,
      dishname: ["Yakitori"],
      size: ["Normal"],
      prices: [123],
      images: [Yakitori],
      description: ["Chicken skewers with yakitori sauce, served with rice"],
    },
    {
      id: 6,
      dishname: ["Poké Bowl Salmon & Tuna", "Poké Bowl Shrimp", "Poké Bowl Chicken", "Poké Bowl Tofu"],
      types: ["Salmon & Tuna", "Shrimp", "Chicken", "Tofu"],
      prices: [139],
      images: [PokebowlLax, PokebowlRäka, PokebowlKyckling, PokebowlTofu],
      description: [
        "Served with rice, mango, avocado, carrots, cucumber, beans. Topped with chili mayo and teriyaki sauce",
      ],
    },
  ],
};
