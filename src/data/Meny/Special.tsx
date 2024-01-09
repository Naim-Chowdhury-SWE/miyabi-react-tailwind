import WokadKycklingStark from "../../assets/food/WokadKycklingStark.webp";
import WokadRäkorStark from "../../assets/food/WokadRäkorStark.webp";
import KokosmjölkKyckling from "../../assets/food/KokosmjölkKyckling.webp";
import KokosmjölkRäka from "../../assets/food/KokosmjölkRäka.webp";
import PadThaiKyckling from "../../assets/food/PadThaiKyckling.webp";
import PadThaiRäka from "../../assets/food/PadThaiRäka.webp";
import placeholderFood from "../../assets/food/food.svg";
import { MenuCategory } from "../../types";

const text1 = "Serveras med ris eller nudlar samt sallad";

export const Special: MenuCategory = {
  name: "Special Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Wok med grön curry (stark)"],
      types: ["Kyckling", "Räkor", "Biff", "Lax"],
      prices: [150],
      images: [placeholderFood,placeholderFood,placeholderFood,placeholderFood],
      description: [text1,text1,text1, "Serveras med ris samt sallad"],
    },
    {
      id: 1,
      dishname: ["Wok med kokosmjölk och curry (stark)"],
      types: ["Kyckling", "Räkor"],
      prices: [150],
      images: [KokosmjölkKyckling,KokosmjölkRäka],
      description: [text1,text1,],
    },
    {
      id: 5,
      dishname: ["Wokad Kyckling med ostronsås"],
      types: ["Kyckling", "Räkor", "Biff"],
      prices: [150],
      images: [placeholderFood, placeholderFood, placeholderFood],
      description: [text1],
    },
    {
      id: 8,
      dishname: ["Wok med chili (stark)"],
      types: ["Kyckling", "Räkor", "Biff"],
      prices: [150],
      images: [WokadKycklingStark,WokadRäkorStark,placeholderFood],
      description: [text1 + "(cashew + 5kr)"],
    },
    {
      id: 10,
      dishname: ["Wokade räkor + kyckling (stark)"],
      types: [],
      prices: [165],
      images: [placeholderFood],
      description: [text1 + "(cashew + 5kr)"],
    },
    {
      id: 12,
      dishname: ["Pad Thai Kyckling"],
      types: ["Kyckling", "Räkor"],
      prices: [150],
      images: [PadThaiKyckling, PadThaiRäka],
      description: ["Wokade Risnudlar med Kyckling, Grönsaker och Sallad"],
    },
  ],
};
