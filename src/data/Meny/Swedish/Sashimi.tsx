import SashimiLaxLiten from "../../../assets/food/sashimi/SashimiLaxLiten.webp";
import SashimiLaxStor from "../../../assets/food/sashimi/SashimiLaxStor.webp";
import SashimiLaxTunaLiten from "../../../assets/food/sashimi/SashimiLaxTunaLiten.webp";
import SashimiLaxTunaStor from "../../../assets/food/sashimi/SashimiLaxTunaStor.webp";
import SashimiMixLiten from "../../../assets/food/sashimi/SashimiMixLiten.webp";
import SashimiMixStor from "../../../assets/food/sashimi/SashimiMixStor.webp";
import placeholder from "../../../assets/placeholders/BildSaknas.webp";
import { MenuCategory } from "../../../types";

export const sweSashimi: MenuCategory = {
  id: "sashimi",
  name: "Sashimi Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Lax Sashimi Liten", "Lax Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [149, 249],
      images: [SashimiLaxLiten, SashimiLaxStor],
      description: ["Stora skivor Lax på salladsbädd"],
    },
    {
      id: 2,
      dishname: ["Tonfisk Sashimi Liten", "Tonfisk Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [149, 249],
      images: [placeholder, placeholder],
      description: ["Stora skivor Tonfisk på salladsbädd"],
    },
    {
      id: 3,
      dishname: ["Lax & Tonfisk Sashimi Liten", "Lax & Tonfisk Sashimi Stor"],
      size: ["Liten", "Stor"],
      prices: [130],
      images: [SashimiLaxTunaLiten, SashimiLaxTunaStor],
      description: ["Stora skivor Lax och Tonfisk på salladsbädd"],
    },
    {
      id: 4,
      dishname: ["Sashimi Mix Liten", "Sashimi Mix Stor"],
      size: ["Liten", "Stor"],
      prices: [149, 249],
      images: [SashimiMixLiten, SashimiMixStor],
      description: ["Blandade fiskar på salladsbädd"],
    },
  ],
};
