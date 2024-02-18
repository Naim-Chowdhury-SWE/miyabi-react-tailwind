import WokadKycklingStark from "../../../assets/food/special/WokadKycklingStark.webp";
import WokadRäkorStark from "../../../assets/food/special/WokadRäkorStark.webp";
import WokadKycklingRäkorStark from "../../../assets/food/special/WokadKycklingRäkorStark.webp";
import OstronsåsKyckling from "../../../assets/food/special/OstronsåsKyckling.webp";
import OstronsåsRäka from "../../../assets/food/special/OstronsåsRäka.webp";
import OstronsåsBiff from "../../../assets/food/special/OstronsåsBiff.webp";
import KokosmjölkKyckling from "../../../assets/food/special/KokosmjölkKyckling.webp";
import KokosmjölkRäka from "../../../assets/food/special/KokosmjölkRäka.webp";
import PadThaiKyckling from "../../../assets/food/special/PadThaiKyckling.webp";
import PadThaiRäka from "../../../assets/food/special/PadThaiRäka.webp";
import placeholder from "../../../assets/placeholders/MissingImage.webp";
import { MenuCategory } from "../../../types";

const text1 = "Served with salad and either rice or noodles";

export const engSpecial: MenuCategory = {
  id: "special",
  name: "Special Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Wok with green curry (spicy)"],
      types: ["Chicken", "Shrimp", "Beef"],
      prices: [150],
      images: [placeholder, placeholder, placeholder],
      description: [text1, text1, text1],
    },
    {
      id: 2,
      dishname: ["Wok with coconut milk and curry (spicy)"],
      types: ["Chicken", "Shrimp"],
      prices: [150],
      images: [KokosmjölkKyckling, KokosmjölkRäka],
      description: [text1, text1],
    },
    {
      id: 3,
      dishname: ["Wok with Oyster Sauce"],
      types: ["Chicken", "Shrimp", "Beef"],
      prices: [150],
      images: [OstronsåsKyckling, OstronsåsRäka, OstronsåsBiff],
      description: [text1],
    },
    {
      id: 4,
      dishname: ["Stir-fried with Chili (Spicy)"],
      types: ["Chicken", "Shrimp", "Beef"],
      prices: [150],
      images: [WokadKycklingStark,WokadRäkorStark,placeholder],
      description: [text1 + "(cashews + 5kr)"],
    },
    {
      id: 5,
      dishname: ["Stir-fried Shrimp + Chicken (Spicy)"],
      types: [],
      prices: [165],
      images: [WokadKycklingRäkorStark],
      description: [text1 + "(cashews + 5kr)"],
    },
    {
      id: 6,
      dishname: ["Pad Thai Chicken"],
      types: ["Chicken", "Shrimp"],
      prices: [150],
      images: [PadThaiKyckling, PadThaiRäka],
      description: ["Stir-fried Rice Noodles with Chicken, Vegetables, and Salad"],
    },
    
  ],
};