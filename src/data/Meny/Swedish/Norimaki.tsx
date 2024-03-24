import placeholder from "../../../assets/placeholders/BildSaknas.webp";

import StandardRoll from "../../../assets/food/norimaki/StandardRoll.webp";
import CaliforniaRoll from "../../../assets/food/norimaki/CaliforniaRoll.webp";
import CaliforniaRollSpecial from "../../../assets/food/norimaki/CaliforniaRollSpecial.webp";
import VegetariskRoll from "../../../assets/food/norimaki/VegetariskRoll.webp";
import VegetariskMangoRoll from "../../../assets/food/norimaki/VegetariskMangoRoll.webp";
import ShakeMaki from "../../../assets/food/norimaki/ShakeMaki.webp";
import TekkaMaki from "../../../assets/food/norimaki/TekkaMaki.webp";
import KappaMaki from "../../../assets/food/norimaki/KappaMaki.webp";
import HawaiiMakiLax from "../../../assets/food/norimaki/HawaiiMakiLax.webp";
import HawaiiMakiTuna from "../../../assets/food/norimaki/HawaiiMakiTuna.webp";
import TemakeMax from "../../../assets/food/norimaki/TemakeMax.webp";
import PhiladelphiaRoll from "../../../assets/food/norimaki/PhiladelphiaRoll.webp";
import FutomakiRoll from "../../../assets/food/norimaki/FutomakiRoll.webp";
import MiyabiSpecialRoll from "../../../assets/food/norimaki/MiyabiSpecialRoll.webp";
import TempuraRoll from "../../../assets/food/norimaki/TempuraRoll.webp";
import TempuraRollFriterad from "../../../assets/food/norimaki/TempuraRollFriterad.webp";
import TeriyakiRoll from "../../../assets/food/norimaki/TeriyakiRoll.webp";
import AlaskaRoll from "../../../assets/food/norimaki/AlaskaRoll.webp";
import DragonRoll from "../../../assets/food/norimaki/DragonRoll.webp";
import CrispyMiyabiRoll from "../../../assets/food/norimaki/CrispyMiyabiRoll.webp";
import CrispyAlaskaRoll from "../../../assets/food/norimaki/CrispyAlaskaRoll.webp";
import CrispyTempuraRoll from "../../../assets/food/norimaki/CrispyTempuraRoll.webp";
import CrispyVegetariskRoll from "../../../assets/food/norimaki/CrispyVegetariskRoll.webp";
import SpicytunaRoll from "../../../assets/food/norimaki/SpicytunaRoll.webp";
import SpicyLaxRoll from "../../../assets/food/norimaki/SpicyLaxRoll.webp";
import CrispySpicyTunaRoll from "../../../assets/food/norimaki/CrispySpicyTunaRoll.webp";
import CrispySpicyLaxRoll from "../../../assets/food/norimaki/CrispySpicyLaxRoll.webp";
import KaraageRoll from "../../../assets/food/norimaki/KaraageRoll.webp";
import YakinikuRoll from "../../../assets/food/norimaki/YakinikuRoll.webp";
import { MenuCategory } from "../../../types";

export const sweNorimaki: MenuCategory = {
  id: "norimaki",
  name: "Norimaki Meny",
  dishes: [
    {
      id: 1,
      dishname: ["California roll", "California roll Special"],
      types: ["Normal", "Special"],
      prices: [139, 169],
      images: [CaliforniaRoll, CaliforniaRollSpecial],
      description: [
        "Inside-Out sjögräsrulle med avocado, gurka, crabbstick och chilimajo",
        "Inside-Out sjögräsrulle som innehåller avocado, gurka, crabbstick. Toppas med Halstrad lax samt chilimajo",
      ],
    },
    {
      id: 2,
      dishname: ["Standard roll"],
      types: [],
      prices: [119],
      images: [StandardRoll],
      description: ["Inside-Out sjögräsrulle med lax, gurka, crabbstick"],
    },
    {
      id: 3,
      dishname: [
        "Vegetarisk roll",
        "Vegetarisk roll med mango",
        "Crispy Vegetarisk Roll",
      ],
      types: ["Normal", "Mango Roll", "Crispy"],
      prices: [119, 129, 159],
      images: [VegetariskRoll, VegetariskMangoRoll, CrispyVegetariskRoll],
      description: [
        "Sjögräsrulle med gurka och avocado",
        "Sjögräsrulle med gurka, avocado och mango",
        "Avokado, krispig sallad, tofu och veganmajonnäs. Rullen friteras",
      ],
    },
    {
      id: 4,
      dishname: ["Spicy Tuna roll", "Spicy Lax roll"],
      types: ["Tuna", "Lax"],
      prices: [149],
      images: [SpicytunaRoll, SpicyLaxRoll],
      description: [
        "Sjögräsrulle med chilimarinerad tonfisk",
        "Sjögräsrulle med chilimarinerad lax",
      ],
    },
    {
      id: 5,
      dishname: ["Crispy Spicy Tuna Roll", "Crispy Spicy Lax Roll"],
      types: ["Tuna", "Lax"],
      prices: [169],
      images: [CrispySpicyTunaRoll, CrispySpicyLaxRoll],
      description: [
        "Friterad Sjögräsrulle med marinerad tonfisk, krispig sallad, avokado med chilimajonnäs och srirachasås",
        "Friterad Sjögräsrulle med marinerad lax, krispig sallad, avokado med chilimajonnäs och srirachasås",
      ],
    },
    {
      id: 6,
      dishname: ["Kappamaki"],
      types: [],
      prices: [115],
      images: [KappaMaki],
      description: ["Sjögräsrulle med gurka"],
    },
    {
      id: 7,
      dishname: ["Shakemaki"],
      types: [],
      prices: [139],
      images: [ShakeMaki],
      description: ["Sjögräsrulle med lax"],
    },
    {
      id: 8,
      dishname: ["Tekkamaki"],
      types: [],
      prices: [139],
      images: [TekkaMaki],
      description: ["Sjögräsrulle med tonfisk samt gurka"],
    },
    {
      id: 9,
      dishname: ["Hawaiimaki"],
      types: ["Tonfisk", "Lax"],
      prices: [139],
      images: [HawaiiMakiTuna, HawaiiMakiLax],
      description: [
        "Sjögräsrulle med tonfisk och avocado",
        "Sjögräsrulle med lax och avocado",
      ],
    },
    {
      id: 10,
      dishname: ["Temakemax"],
      types: [],
      prices: [139],
      images: [TemakeMax],
      description: ["Sjögräsrulle med tonfisk, avocado och lax"],
    },
    {
      id: 11,
      dishname: ["Futomaki"],
      types: [],
      prices: [139],
      images: [FutomakiRoll],
      description: ["Sjögräsrulle med lax, omelett, gurka och avocado"],
    },
    {
      id: 12,
      dishname: ["Tempuraroll", "Tempuraroll Friterad", "Crispy Tempura Roll"],
      types: ["Normal", "Friterad", "Crispy"],
      prices: [139, 159, 169],
      images: [TempuraRoll, TempuraRollFriterad, CrispyTempuraRoll],
      description: [
        "Sjögräsrulle med friterade räkor samt chilimajo",
        "Friterad Sjögräsrulle med friterade räkor, gurka samt chilimajo",
        "Friterad Sjögräsrulle med friterade jätteräkor, avokado, krispig sallad och chilimajonnäs",
      ],
    },
    {
      id: 13,
      dishname: ["Miyabi Special Roll", "Crispy Miyabi Roll"],
      types: ["Friterad", "Crispy"],
      prices: [159, 169],
      images: [MiyabiSpecialRoll, CrispyMiyabiRoll],
      description: [
        "Friterad Sjögräsrulle med lax, gurka och krabba samt chilimajo",
        "Friterad Sjögräsrulle med Marinerad lax, Avocado, krispig sallad och chilimajonnäs",
      ],
    },
    {
      id: 14,
      dishname: ["Karageroll"],
      types: [],
      prices: [139],
      images: [KaraageRoll],
      description: ["Sjögräsrulle med friterad kyckling, toppas med chilimajo"],
    },
    {
      id: 15,
      dishname: ["Philadelphiaroll"],
      types: [],
      prices: [139],
      images: [PhiladelphiaRoll],
      description: ["Sjögräsrulle med lax, avocado, gurka och philadephiaost"],
    },
    {
      id: 16,
      dishname: ["Alaskaroll", "Crispy Alaska Roll"],
      types: ["Normal", "Crispy"],
      prices: [139, 169],
      images: [AlaskaRoll, CrispyAlaskaRoll],
      description: [
        "Sjögräsrulle med lax, avocado och gurka, toppas med chilimajo",
        "Friterad Sjögräsrulle med lax, avocado och gurka, toppas med chilimajo",
      ],
    },
    {
      id: 17,
      dishname: ["Yakinikuroll"],
      types: [],
      prices: [139],
      images: [YakinikuRoll],
      description: [
        "Sjögräsrulle med yakinikukött, paprika, sallad och rödlök, toppas chilimajo",
      ],
    },
    {
      id: 18,
      dishname: ["Teriyakiroll"],
      types: [],
      prices: [139],
      images: [TeriyakiRoll],
      description: [
        "Sjögräsrulle med halstrad lax, avocado, lök och samt sallad",
      ],
    },
    {
      id: 19,
      dishname: ["Dragon Roll"],
      types: [],
      prices: [169],
      images: [DragonRoll],
      description: [
        "Räka, krispig sallad, avokado, dragon sås toppas med grillad lax",
      ],
    },
    {
      id: 20,
      dishname: ["Bibimbap roll"],
      types: ["Entrécôte", "Kyckling", "Räka"],
      prices: [139],
      images: [placeholder, placeholder, placeholder],
      description: ["Sjögräsrulle med gurka, sallad, kimchi samt salladsmix"],
    },
  ],
};
