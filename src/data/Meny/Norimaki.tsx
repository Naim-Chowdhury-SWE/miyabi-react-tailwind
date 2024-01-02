
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
      dishname: ["California roll", "California roll Special"],
      types: ["Normal", "Special"],
      prices: [129,149],
      images: [CaliforniaRoll, CaliforniaRollSpecial],
      description: ["Inside-Out sjögräsrulle med avocado, gurka, crabbstick och chilimajo", "Inside-Out sjögräsrulle som innehåller avocado, gurka, crabbstick. Toppas med Halstrad lax samt chilimajo"],
    },
    {
      dishname: ["Standard roll"],
      types: [],
      prices: [105],
      images: [StandardRoll],
      description: ["Inside-Out sjögräsrulle med lax, gurka, crabbstick"],
    },
    {
      dishname: ["Vegetarisk roll", "Vegetarisk roll med mango", "Crispy Vegetarisk Roll"],
      types: ["Normal", "Mango Roll", "Crispy"],
      prices: [105,120,159],
      images: [VegetariskRoll,VegetariskMangoRoll,placeholderMaki],
      description: ["Sjögräsrulle med gurka och avocado", "Sjögräsrulle med gurka, avocado och mango", "Avokado, krispig sallad, tofu och veganmajonnäs. Rullen friteras" ],
    },
    {
      dishname: ["Spicy Tuna/Lax roll"],
      types: ["Tuna", "Lax"],
      prices: [145],
      images: [SpicytunaRoll, SpicytunaRoll],
      description: ["Sjögräsrulle med chilimarinerad tonfisk", "Sjögräsrulle med chilimarinerad lax"],
    },
    {
      dishname: ["Crispy Spicy Tuna/Lax Roll"],
      types: ["Tuna", "Lax"],
      prices: [169],
      images: [placeholderMaki, placeholderMaki],
      description: ["Friterad Sjögräsrulle med marinerad tonfisk, krispig sallad, avokado med chilimajonnäs och srirachasås", "Friterad Sjögräsrulle med marinerad lax, krispig sallad, avokado med chilimajonnäs och srirachasås"],
    },
    {
      dishname: ["Kappamaki"],
      types: [],
      prices: [105],
      images: [KappaMaki],
      description: ["Sjögräsrulle med gurka"],
    },
    {
      dishname: ["Shakemaki"],
      types: [],
      prices: [125],
      images: [ShakeMaki],
      description: ["Sjögräsrulle med lax"],
    },
    {
      dishname: ["Tekkamaki"],
      types: [],
      prices: [129],
      images: [TekkaMaki],
      description: ["Sjögräsrulle med tonfisk samt gurka"],
    },
    {
      dishname: ["Hawaiimaki"],
      types: ["Tonfisk", "Lax"],
      prices: [120],
      images: [placeholderMaki, placeholderMaki],
      description: ["Sjögräsrulle med tonfisk och avocado", "Sjögräsrulle med lax och avocado"],
    },
    {
      dishname: ["Temakemax"],
      types: [],
      prices: [135],
      images: [placeholderMaki],
      description: ["Sjögräsrulle med tonfisk, avocado och lax"],
    },
    {
      dishname: ["Futomaki"],
      types: [],
      prices: [129],
      images: [FutomakiRoll],
      description: ["Sjögräsrulle med lax, omelett, gurka och avocado"],
    },
    {
      dishname: ["Tempuraroll","Tempuraroll Friterad", "Crispy Tempura Roll"],
      types: ["Normal", "Friterad", "Crispy"],
      prices: [130,145,159],
      images: [TempuraRoll,TempuraRollFriterad,CrispyTempuraRoll],
      description: ["Sjögräsrulle med friterade räkor samt chilimajo", "Friterad Sjögräsrulle med friterade räkor, gurka samt chilimajo", "Friterad Sjögräsrulle med friterade jätteräkor, avokado, krispig sallad och chilimajonnäs"],
    },
    {
      dishname: ["Miyabi Special Roll", "Crispy Miyabi Roll"],
      types: ["Friterad", "Crispy"],
      prices: [145, 149],
      images: [MiyabiSpecialRoll, CrispyMiyabiRoll],
      description: ["Friterad Sjögräsrulle med lax, gurka och krabba samt chilimajo", "Friterad Sjögräsrulle med Avokado, marinerad lax, krispig sallad och chilimajonnäs"],
    },
    {
      dishname: ["Karageroll"],
      types: [],
      prices: [130],
      images: [KaraageRoll],
      description: ["Sjögräsrulle med friterad kyckling, toppas med chilimajo"],
    },
    {
      dishname: ["Philadelphiaroll"],
      types: [],
      prices: [125],
      images: [PhiladelphiaRoll],
      description: ["Sjögräsrulle med lax, avocado, gurka och philadephiaost"],
    },
    {
      dishname: ["Alaskaroll", "Crispy Alaska Roll"],
      types: ["Normal", "Crispy"],
      prices: [125, 159],
      images: [AlaskaRoll, CrispyAlaskaRoll],
      description: ["Sjögräsrulle med lax, avocado och gurka, toppas med chilimajo", "Friterad Sjögräsrulle med lax, avocado och gurka, toppas med chilimajo"],
    },
    {
      dishname: ["Yakinikuroll"],
      types: [],
      prices: [130],
      images: [YakinikuRoll],
      description: ["Sjögräsrulle med yakinikukött, paprika, sallad och rödlök, toppas chilimajo"],
    },
    {
      dishname: ["Teriyakiroll"],
      types: [],
      prices: [130],
      images: [TeriyakiRoll],
      description: ["Sjögräsrulle med halstrad lax, avocado, lök och samt sallad"],
    },
    {
      dishname: ["Dragon Roll"],
      types: [],
      prices: [149],
      images: [DragonRoll],
      description: ["Räka, krispig sallad, avokado, dragon sås toppas med grillad lax"],
    },
    {
      dishname: ["Bibimbap roll"],
      types: ["Entrécôte", "Kyckling", "Räka"],
      prices: [130],
      images: [placeholderMaki,placeholderMaki,placeholderMaki],
      description: ["Sjögräsrulle med gurka, sallad, kimchi samt salladsmix"],
    },
  ]
}