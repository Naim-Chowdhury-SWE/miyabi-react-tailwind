import WokadKycklingStark from "../../../assets/food/special/WokadKycklingStark.webp";
import WokadRäkorStark from "../../../assets/food/special/WokadRäkorStark.webp";
import OstronsåsKyckling from "../../../assets/food/special/OstronsåsKyckling.webp";
import OstronsåsRäka from "../../../assets/food/special/OstronsåsRäka.webp";
import OstronsåsBiff from "../../../assets/food/special/OstronsåsBiff.webp";
import KokosmjölkKyckling from "../../../assets/food/special/KokosmjölkKyckling.webp";
import KokosmjölkRäka from "../../../assets/food/special/KokosmjölkRäka.webp";
import PadThaiKyckling from "../../../assets/food/special/PadThaiKyckling.webp";
import PadThaiRäka from "../../../assets/food/special/PadThaiRäka.webp";
import placeholder from "../../../assets/placeholders/BildSaknas.webp";
import { MenuCategory } from "../../../types";

const text1 = "Serveras med ris eller nudlar samt sallad";

export const sweSpecial: MenuCategory = {
  id:"special",
  name: "Special Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Wok med grön curry (stark)"],
      types: ["Kyckling", "Räkor", "Biff", "Lax"],
      prices: [150],
      images: [placeholder,placeholder,placeholder,placeholder],
      description: [text1,text1,text1, "Serveras med ris samt sallad"],
    },
    {
      id: 2,
      dishname: ["Wok med kokosmjölk och curry (stark)"],
      types: ["Kyckling", "Räkor"],
      prices: [150],
      images: [KokosmjölkKyckling,KokosmjölkRäka],
      description: [text1,text1,],
    },
    {
      id: 3,
      dishname: ["Wok med ostronsås",],
      types: ["Kyckling", "Räkor", "Biff"],
      prices: [150],
      images: [OstronsåsKyckling, OstronsåsRäka, OstronsåsBiff],
      description: [text1],
    },
    {
      id: 4,
      dishname: ["Wok med chili (stark)"],
      types: ["Kyckling", "Räkor", "Biff"],
      prices: [150],
      images: [WokadKycklingStark,WokadRäkorStark,placeholder],
      description: [text1 + "(cashew + 5kr)"],
    },
    {
      id: 5,
      dishname: ["Wokade räkor + kyckling (stark)"],
      types: [],
      prices: [165],
      images: [placeholder],
      description: [text1 + "(cashew + 5kr)"],
    },
    {
      id: 6,
      dishname: ["Pad Thai Kyckling"],
      types: ["Kyckling", "Räkor"],
      prices: [150],
      images: [PadThaiKyckling, PadThaiRäka],
      description: ["Wokade Risnudlar med Kyckling, Grönsaker och Sallad"],
    },
  ],
};
