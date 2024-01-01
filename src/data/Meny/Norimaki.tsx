
import placeholderMaki from "../../assets/food/maki.jpg";
import StandardRoll from "../../assets/food/StandardRoll.webp";
import CaliforniaRoll from "../../assets/food/CaliforniaRoll.webp";
import CaliforniaRollSpecial from "../../assets/food/CaliforniaRollSpecial.webp";
import VegetariskRoll from "../../assets/food/VegetariskRoll.webp";
import VegetariskMangoRoll from "../../assets/food/VegetariskMangoRoll.webp";
import ShakeMaki from "../../assets/food/ShakeMaki.webp";
import TekkaMaki from "../../assets/food/TekkaMaki.webp";
import KappaMaki from "../../assets/food/KappaMaki.webp";
import PhiladelphiaRoll from "../../assets/food/PhiladelphiaRoll.webp";
import FutomakiRoll from "../../assets/food/FutomakiRoll.webp";
import MiyabiSpecialRoll from "../../assets/food/MiyabiSpecialRoll.webp";
import TempuraRoll from "../../assets/food/TempuraRoll.webp";
import TempuraRollFriterad from "../../assets/food/TempuraRollFriterad.webp";
import TeriyakiRoll from "../../assets/food/TeriyakiRoll.webp";
import AlaskaRoll from "../../assets/food/AlaskaRoll.webp";
import DragonRoll from "../../assets/food/DragonRoll.webp";
import CrispyMiyabiRoll from "../../assets/food/CrispyMiyabiRoll.webp";
import CrispyAlaskaRoll from "../../assets/food/CrispyAlaskaRoll.webp";
import CrispyTempuraRoll from "../../assets/food/CrispyTempuraRoll.webp";
import SpicytunaRoll from "../../assets/food/SpicytunaRoll.webp";
import KaraageRoll from "../../assets/food/KaraageRoll.webp";
import YakinikuRoll from "../../assets/food/YakinikuRoll.webp";
import { MenuCategory } from "../../types";

export const Norimaki: MenuCategory = {
  name: "Norimaki Meny",
  dishes: [
    {
      dishname: "California roll 10 bitar",
      types: [],
      prices: [129],
      images: [CaliforniaRoll],
      description: "Inside-Out sjögräsrulle med avocado, gurka, crabbstick och majo",
    },
    {
      dishname: ["California roll", "California roll Special"],
      types: ["Normal", "Special"],
      prices: [129,149],
      images: [CaliforniaRoll, CaliforniaRollSpecial],
      description: ["Inside-Out sjögräsrulle med avocado, gurka, crabbstick och chilimajo", "Inside-Out sjögräsrulle som innehåller avocado, gurka, crabbstick. Toppas med Halstrad lax samt chilimajo"],
    },
    {
      dishname: "Standard roll 10 bitar",
      types: [],
      prices: [105],
      images: [StandardRoll],
      description: "Inside-Out sjögräsrulle med lax, gurka, crabbstick",
    },
    {
      dishname: "Vegetarisk roll 10 bitar",
      types: [],
      prices: [105],
      images: [VegetariskRoll],
      description: "Sjögräsrulle med gurka, avocado och sallad",
    },
    {
      dishname: "Vegetarisk roll + mango 10 bitar",
      types: [],
      prices: [120],
      images: [VegetariskMangoRoll],
      description: "Sjögräsrulle med gurka, avocado och mango",
    },
    {
      dishname: "Spicy tuna eller lax roll 10 bitar",
      types: [],
      prices: [145],
      images: [SpicytunaRoll],
      description: "Sjägräsrulle med chilimarinerad tonfisk eller lax",
    },
    {
      dishname: "Kappamaki",
      types: [],
      prices: [105],
      images: [KappaMaki],
      description: "Sjögräsrulle med gurka",
    },
    {
      dishname: "Shakemaki",
      types: [],
      prices: [125],
      images: [ShakeMaki],
      description: "Sjögräsrulle med lax",
    },
    {
      dishname: "Tekkamaki",
      types: [],
      prices: [129],
      images: [TekkaMaki],
      description: "Sjögräsrulle med tonfisk samt gurka",
    },
    {
      dishname: "Hawaiimaki Tonfisk",
      types: [],
      prices: [120],
      images: [placeholderMaki],
      description: "Sjögräsrulle med tonfisk och avocado",
    },
    {
      dishname: "Hawaiimaki Lax",
      types: [],
      prices: [120],
      images: [placeholderMaki],
      description: "Sjögräsrulle med lax och avocado",
    },
    {
      dishname: "Temakemax",
      types: [],
      prices: [135],
      images: [placeholderMaki],
      description: "Sjögräsrulle med tonfisk, avocado och lax",
    },
    {
      dishname: "Futomaki",
      types: [],
      prices: [129],
      images: [FutomakiRoll],
      description: "Sjögräsrulle med lax, omelett, gurka och avocado",
    },
    {
      dishname: "Tempuraroll (friterad rulle)",
      types: [],
      prices: [145],
      images: [TempuraRollFriterad],
      description: "Sjögräsrulle med friterade räkor samt chilimajo",
    },
    {
      dishname: "Tempuraroll (ej friterad)",
      types: [],
      prices: [130],
      images: [TempuraRoll],
      description: "Sjögräsrulle med friterade räkor, gurka samt chilimajo",
    },
    {
      dishname: "Miyabi Special (friterad rulle)",
      types: [],
      prices: [145],
      images: [MiyabiSpecialRoll],
      description: "Sjögräsrulle med lax, gurka och krabba samt chilimajo",
    },
    {
      dishname: "Karageroll",
      types: [],
      prices: [130],
      images: [KaraageRoll],
      description: "Sjögräsrulle med friterad kyckling, toppas med chilimajo",
    },
    {
      dishname: "Philadelphiaroll",
      types: [],
      prices: [125],
      images: [PhiladelphiaRoll],
      description: "Sjögräsrulle med lax, avocado, gurka och philadephiaost",
    },
    {
      dishname: "Alaskaroll",
      types: [],
      prices: [125],
      images: [AlaskaRoll],
      description: "Sjögräsrulle med lax, avocado och gurka, toppas med chilimajo",
    },
    {
      dishname: "Yakinikuroll",
      types: [],
      prices: [130],
      images: [YakinikuRoll],
      description: "Sjögräsrulle med yakinikukött, paprika, sallad och rödlök, toppas chilimajo",
    },
    {
      dishname: "Teriyakiroll",
      types: [],
      prices: [130],
      images: [TeriyakiRoll],
      description: "Sjögräsrulle med halstrad lax, avocado, lök och samt sallad",
    },
    {
      dishname: "Dragon Roll",
      types: [],
      prices: [149],
      images: [DragonRoll],
      description: "Räka, krispig sallad, avokado, dragon sås toppas med grillad lax",
    },
    {
      dishname: "Crispy Spicy Tuna Roll",
      types: [],
      prices: [169],
      images: [placeholderMaki],
      description: "Marinerad tonfisk, krispig sallad, avokado med chilimajonnäs och srirachasås. Rullen friteras.",
    },
    {
      dishname: "Crispy Miyabi Roll",
      types: [],
      prices: [149],
      images: [CrispyMiyabiRoll],
      description: "Avokado, marinerad lax, krispig sallad och chilimajonnäs. Rullen friteras",
    },
    {
      dishname: "Crispy Tempura Roll",
      types: [],
      prices: [159],
      images: [CrispyTempuraRoll],
      description: "Friterade jätteräkor, avokado, krispig sallad och chilimajonnäs. Rullen friteras",
    },
    {
      dishname: "Crispy Alaska Roll",
      types: [],
      prices: [159],
      images: [CrispyAlaskaRoll],
      description: "Avokado, lax, krispig sallad och chilimajonnäs. Rullen friteras",
    },
    {
      dishname: "Crispy Vegetarisk Roll",
      types: [],
      prices: [159],
      images: [placeholderMaki],
      description: "Avokado, krispig sallad, tofu och veganmajonnäs. Rullen friteras",
    },
    {
      dishname: "Bibimbap roll (entrecote, kyckling eller räkor)",
      types: [],
      prices: [130],
      images: [placeholderMaki],
      description: "Sjögräsrulle med gurka, sallad, kimchi samt salladsmix",
    },
  ]
}