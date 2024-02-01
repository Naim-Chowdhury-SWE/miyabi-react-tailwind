import SashimiLaxLiten from "../../../assets/food/sashimi/SashimiLaxLiten.webp"
import SashimiLaxStor from "../../../assets/food/sashimi/SashimiLaxStor.webp"
import SashimiLaxTunaLiten from "../../../assets/food/sashimi/SashimiLaxTunaLiten.webp"
import SashimiLaxTunaStor from "../../../assets/food/sashimi/SashimiLaxTunaStor.webp"
import SashimiMixLiten from "../../../assets/food/sashimi/SashimiMixLiten.webp"
import SashimiMixStor from "../../../assets/food/sashimi/SashimiMixStor.webp"
import placeholder from "../../../assets/placeholders/MissingImage.webp";
import { MenuCategory } from "../../../types";

export const engSashimi: MenuCategory = {
  id: "sashimi",
  name: "Sashimi Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Salmon Sashimi Small", "Salmon Sashimi Large"],
      size: ["Small", "Large"],
      prices: [130, 250],
      images: [SashimiLaxLiten, SashimiLaxStor],
      description: ["Large slices of salmon on a bed of salad"],
    },
    {
      id: 2,
      dishname: ["Tuna Sashimi Small", "Tuna Sashimi Large"],
      size: ["Small", "Large"],
      prices: [130, 250],
      images: [placeholder, placeholder],
      description: ["Large slices of tuna on a bed of salad"],
    },
    {
      id: 3,
      dishname: ["Salmon & Tuna Sashimi Small", "Salmon & Tuna Sashimi Large"],
      size: ["Small", "Large"],
      prices: [130],
      images: [SashimiLaxTunaLiten, SashimiLaxTunaStor],
      description: ["Large slices of salmon and tuna on a bed of salad"],
    },
    {
      id: 4,
      dishname: ["Mixed Sashimi Small", "Mixed Sashimi Large"],
      size: ["Small", "Large"],
      prices: [130, 250],
      images: [SashimiMixLiten, SashimiMixStor],
      description: ["Mixed fish on a bed of salad"],
    },
  ],
};
