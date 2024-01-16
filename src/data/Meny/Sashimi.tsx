import SashimiLaxLiten from "../../assets/food/SashimiLaxLiten.webp"
import SashimiLaxStor from "../../assets/food/SashimiLaxStor.webp"
import SashimiLaxTunaLiten from "../../assets/food/SashimiLaxTunaLiten.webp"
import SashimiLaxTunaStor from "../../assets/food/SashimiLaxTunaStor.webp"
import SashimiMixLiten from "../../assets/food/SashimiMixLiten.webp"
import SashimiMixStor from "../../assets/food/SashimiMixStor.webp"
import placeholderSashimi from "../../assets/food/sashimi.jpg"
import { MenuCategory } from "../../types";

export const Sashimi: MenuCategory = {
  id: "sashimi",
  name: "Sashimi Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Lax Sashimi Liten", "Lax Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [130, 250],
      images: [SashimiLaxLiten, SashimiLaxStor],
      description: ["Stora skivor Lax på salladsbädd"],
    },
    {
      id: 2,
      dishname: ["Tonfisk Sashimi Liten", "Tonfisk Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [130, 250],
      images: [placeholderSashimi, placeholderSashimi],
      description: ["Stora skivor Tonfisk på salladsbädd"],
    },
    {
      id: 3,
      dishname: ["Lax & Tonfisk Sashimi Liten","Lax & Tonfisk Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [130],
      images: [SashimiLaxTunaLiten, SashimiLaxTunaStor],
      description: ["Stora skivor Lax och Tonfisk på salladsbädd"],
    },
    {
      id: 4,
      dishname: ["Sashimi Mix Liten", "Sashimi Mix Stor"],
      size: ["Liten", "Stor"],
      prices: [130, 250],
      images: [SashimiMixLiten, SashimiMixStor],
      description: ["Blandade fiskar på salladsbädd"],
    },
  ],
};
