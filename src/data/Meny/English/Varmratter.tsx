import Yakitori from "../../../assets/food/varmratter/Yakitori.webp";
import Yakiniku from "../../../assets/food/varmratter/Yakiniku.webp";
import YakinikuSushi from "../../../assets/food/varmratter/YakinikuSushi.webp";

import Bento from "../../../assets/food/varmratter/Bento.webp";
import BentoMiyabi from "../../../assets/food/varmratter/BentoMiyabi.webp";
import BentoDeluxe from "../../../assets/food/varmratter/BentoDeluxe.webp";
import BentoGyoza from "../../../assets/food/varmratter/BentoGyoza.webp";

import Gyoza from "../../../assets/food/varmratter/Gyoza.webp";
import Yakisoba from "../../../assets/food/varmratter/Yakisoba.webp";
import WokadKyckling from "../../../assets/food/varmratter/WokadKyckling.webp";
import WokadBiff from "../../../assets/food/varmratter/WokadBiff.webp";
import WokadRäkor from "../../../assets/food/varmratter/WokadRäkor.webp";
import StektRisVeg from "../../../assets/food/varmratter/StektRisVeg.webp";
import StektRisKyckling from "../../../assets/food/varmratter/StektRisKyckling.webp";
import StektRisRäka from "../../../assets/food/varmratter/StektRisRäka.webp";
import StektRisEntrecote from "../../../assets/food/varmratter/StektRisEntrecote.webp";
import Tempura from "../../../assets/food/varmratter/Tempura.webp";
import Karaage from "../../../assets/food/varmratter/Karaage.webp";
import Laxteriyaki from "../../../assets/food/varmratter/Laxteriyaki.webp";
import Vårrullar7 from "../../../assets/food/varmratter/Vårrullar7.webp";
import Vårrullar10 from "../../../assets/food/varmratter/Vårrullar10.webp";

import UdonEntrecote from "../../../assets/food/varmratter/UdonEntrecote.webp";
import UdonVegetarisk from "../../../assets/food/varmratter/UdonVegetarisk.webp";
import UdonTempura from "../../../assets/food/varmratter/UdonTempura.webp";
import UdonGyoza from "../../../assets/food/varmratter/UdonGyoza.webp";
import RamenKyckling from "../../../assets/food/varmratter/RamenKyckling.webp";
import RamenRäka from "../../../assets/food/varmratter/RamenRäka.webp";

import BibimbapEntrecote from "../../../assets/food/varmratter/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../../assets/food/varmratter/BibimbapKyckling.webp";
import BibimbapRäka from "../../../assets/food/varmratter/BibimbapRäka.webp";
import BibimbapLax from "../../../assets/food/varmratter/BibimbapLax.webp";
import BibimbapTofu from "../../../assets/food/varmratter/BibimbapTofu.webp";
import BibimbapMix from "../../../assets/food/varmratter/BibimbapMix.webp";
import { MenuCategory } from "../../../types";

const bentoNormal = "Yakiniku, Yakitori, and Sushi (2 rolls, 1 salmon, 1 shrimp). Rice and salad included";
const bentoGyoza = "Yakiniku, Yakitori, and Gyoza. Rice and salad included";
const bentoMiyabi = "Yakiniku, Yakitori, Tempura, and Sushi (1 salmon, 1 shrimp, 1 tuna). Rice and salad included";
const bentoDeluxe = "Yakiniku, Yakitori, Tempura, Gyoza, and Sushi (1 salmon, 1 shrimp, 1 tuna). Rice and salad included";

export const engVarmratter: MenuCategory = {
  id: "varmratter",
  name: "Main Courses",
  dishes:
    [
      {
        id: 1,
        dishname: ["Yakiniku"],
        size: ["Normal", "Large"],
        prices: [123, 143],
        images: [Yakiniku, Yakiniku],
        description: ["Sliced Beef, stirfried, served with rice and salad"],
      },
      {
        id: 2,
        dishname: ["Yakitori"],
        size: ["Normal", "Large"],
        prices: [123, 143],
        images: [Yakitori, Yakitori],
        description: ["Chicken skewers with yakitori sauce, served with rice"],
      },
      {
        id: 3,
        dishname: ["Yakiniku + 5 pieces of sushi"],
        types: [],
        prices: [159],
        images: [YakinikuSushi],
        description: ["Sliced Beef, stirfried, then served with rice and 5 pieces of assorted sushi"],
      },
      {
        id: 4,
        dishname: ["Bento Box", "Bento Gyoza", "Miyabi Bento", "Bento Deluxe"],
        types: ["Normal", "Bento Gyoza", "Miyabi Bento", "Bento Deluxe"],
        prices: [149, 149, 165, 185],
        images: [Bento, BentoGyoza, BentoMiyabi, BentoDeluxe],
        description: [bentoNormal, bentoGyoza, bentoMiyabi, bentoDeluxe],
      },
      {
        id: 5,
        dishname: ["Gyoza"],
        types: ["6 Pieces", "8 Pieces"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: ["Mixed minced meat-filled dumplings served with rice and sauce"],
      },
      {
        id: 6,
        dishname: ["Vegetarian Gyoza"],
        types: ["6 Pieces", "8 Pieces"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: ["Vegetarian dumplings served with rice and sauce"],
      },
      {
        id: 7,
        dishname: ["Yakisoba"],
        types: [],
        prices: [149],
        images: [Yakisoba],
        description: ["Stir-fried egg noodles with sliced beef and vegetables"],
      },
      {
        id: 8,
        dishname: ["Stir-fried Chicken", "Stir-fried Beef", "Stir-fried Shrimp"],
        types: ["Chicken", "Beef", "Shrimp"],
        prices: [145, 145, 149],
        images: [WokadKyckling, WokadBiff, WokadRäkor],
        description: ["Served with vegetables and rice or noodles"],
      },
      {
        id: 9,
        dishname: ["Tempura"],
        types: [],
        prices: [150],
        images: [Tempura],
        description: ["Deep-fried jumbo shrimp with vegetables and rice"],
      },
      {
        id: 10,
        dishname: ["Karaage"],
        types: [],
        prices: [150],
        images: [Karaage],
        description: ["Deep-fried chicken pieces with rice and sauce"],
      },
      {
        id: 11,
        dishname: ["Fried Rice with Vegetables"],
        types: ["Beef", "Chicken", "Shrimp", "Tofu"],
        prices: [149],
        images: [StektRisEntrecote, StektRisKyckling, StektRisRäka, StektRisVeg],
        description: ["Fried rice mixed with broccoli, bell pepper, green beans, edamame, carrots, and bamboo shoots. Salad included"],
      },
      {
        id: 12,
        dishname: ["Salmon Teriyaki"],
        types: [],
        prices: [150],
        images: [Laxteriyaki],
        description: ["Grilled salmon with stir-fried vegetables, teriyaki sauce, and rice"],
      },
      {
        id: 13,
        dishname: ["Vegetarian Spring Rolls"],
        types: ["7 Pieces", "10 Pieces"],
        prices: [110, 125],
        images: [Vårrullar7, Vårrullar10],
        description: ["Served with rice, salad, and sauce"],
      },
      {
        id: 14,
        dishname: ["Bibimbap"],
        types: ["Beef", "Chicken", "Shrimp", "Raw Salmon", "Tofu", "Mix"],
        prices: [139],
        images: [BibimbapEntrecote, BibimbapKyckling, BibimbapRäka, BibimbapLax, BibimbapTofu, BibimbapMix],
        description: ["Korean dish with rice, various salads, kimchi, and spicy sauce. Topped with a fried egg"],
      },
      {
        id: 15,
        dishname: ["Udon"],
        types: ["Beef", "Tempura", "Vegetarian", "Gyoza"],
        prices: [145],
        images: [UdonEntrecote, UdonTempura, UdonVegetarisk, UdonGyoza],
        description: ["Noodle soup made with rice noodles and vegetables"],
      },
      {
        id: 16,
        dishname: ["Ramen"],
        types: ["Chicken", "Shrimp"],
        prices: [145],
        images: [RamenKyckling, RamenRäka],
        description: ["Noodle soup made with egg noodles, vegetables, and boiled egg"],
      },
      
    ],
};