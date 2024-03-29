import BlandadSushi7 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi8 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi9 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi11 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi13 from "../../../assets/food/sushi/BlandadSushiStor.webp";
import BlandadSushi14 from "../../../assets/food/sushi/BlandadSushiStor.webp";
import BlandadSushi16 from "../../../assets/food/sushi/BlandadSushiStor.webp";
import BlandadSushi20 from "../../../assets/food/sushi/BlandadSushiStor.webp";
import BlandadNigiri9 from "../../../assets/food/sushi/BlandadNigiri9.webp";
import BlandadNigiri12 from "../../../assets/food/sushi/BlandadNigiri12.webp";
import LaxRullar8 from "../../../assets/food/sushi/LaxRullar8.webp";
import LaxRullar10 from "../../../assets/food/sushi/LaxRullar10.webp";
import LaxRullar12 from "../../../assets/food/sushi/LaxRullar12.webp";
import VegetariskSushi10 from "../../../assets/food/sushi/VegetariskSushi10.webp";
import VegetariskSushi12 from "../../../assets/food/sushi/VegetariskSushi12.webp";
import MammaSushi10 from "../../../assets/food/sushi/MammaSushi10.webp";
import MammaSushi12 from "../../../assets/food/sushi/MammaSushi12.webp";
import PappaLyx from "../../../assets/food/sushi/PappaLyx.webp";
import LaxSushi from "../../../assets/food/sushi/LaxSushi.webp";
import LaxRäkorSushi from "../../../assets/food/sushi/LaxRäkorSushi.webp";
import RäkSushi from "../../../assets/food/sushi/RäkSushi.webp";
import GrillLaxSushi from "../../../assets/food/sushi/GrillLaxSushi.webp";
import LaxAvocadoSushi from "../../../assets/food/sushi/LaxAvocadoSushi.webp";
import AvocadoSushi from "../../../assets/food/sushi/AvocadoSushi.webp";
import FamiljeSushi30 from "../../../assets/food/sushi/FamiljeSushi30.webp";
import FamiljeSushi40 from "../../../assets/food/sushi/FamiljeSushi40.webp";
import FamiljeSushi50 from "../../../assets/food/sushi/FamiljeSushi50.webp";
import FamiljeSushi70 from "../../../assets/food/sushi/FamiljeSushi70.webp";
import { MenuCategory } from "../../../types";

/* const messageBlandadSushiLiten = "Blandad Sushi med många olika typer av sushibitar.";
const messageBlandadSushiStor = "Blandad Sushi med många olika typer av sushibitar."; */

export const sweSushi: MenuCategory = {
  id: "sushi",
  name: "Sushi Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Blandad Sushi"],
      pieces: [7, 8, 9, 11, 13, 14, 16, 20],
      prices: [89, 105, 115, 135, 155, 165, 185, 229],
      images: [
        BlandadSushi7,
        BlandadSushi8,
        BlandadSushi9,
        BlandadSushi11,
        BlandadSushi13,
        BlandadSushi14,
        BlandadSushi16,
        BlandadSushi20,
      ],
      description: ["Blandad Sushi med många olika typer av sushibitar."],
    },
    {
      id: 2,
      dishname: ["Lax & Rullar"],
      pieces: [8, 10, 12],
      prices: [99, 119, 139],
      images: [LaxRullar8, LaxRullar10, LaxRullar12],
      description: ["Blandad Sushi som innehåller Rullar och Lax."],
    },
    {
      id: 3,
      dishname: ["Vegetarisk Sushi"],
      pieces: [10, 12],
      prices: [115, 139],
      images: [VegetariskSushi10, VegetariskSushi12],
      description: [
        "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
      ],
    },
    {
      id: 4,
      dishname: ["Mamma Sushi"],
      pieces: [10, 12],
      prices: [115, 139],
      images: [MammaSushi10, MammaSushi12],
      description: ["Blandad sushi men utan råfisk"],
    },
    {
      id: 5,
      dishname: ["Blandad Nigiri (utan rullar)"],
      pieces: [9, 12],
      prices: [125, 165],
      images: [BlandadNigiri9, BlandadNigiri12],
      description: ["Blandad sushi men utan rullar"],
    },
    {
      id: 6,
      dishname: ["Pappa Lyx (utan rullar)"],
      pieces: [12],
      prices: [170],
      images: [PappaLyx],
      description: ["Endast blandat med olika fisksorter"],
    },
    {
      id: 7,
      dishname: ["Lax Sushi"],
      pieces: [8, 10, 12],
      prices: [129, 149, 169],
      images: [LaxSushi, LaxSushi, LaxSushi],
      description: ["Laxsushi"],
    },
    {
      id: 8,
      dishname: ["Lax & Avocado Sushi"],
      pieces: [8, 10, 12],
      prices: [115, 125, 145],
      images: [LaxAvocadoSushi, LaxAvocadoSushi, LaxAvocadoSushi],
      description: ["Hälften lax och hälften avocado"],
    },
    {
      id: 9,
      dishname: ["Lax & Räkor Sushi"],
      pieces: [8, 10, 12],
      prices: [119, 139, 159],
      images: [LaxRäkorSushi, LaxRäkorSushi, LaxRäkorSushi],
      description: ["Hälften lax & hälften räkor"],
    },
    {
      id: 10,
      dishname: ["Avocado Sushi"],
      pieces: [8, 10, 12],
      prices: [115, 135, 155],
      images: [AvocadoSushi, AvocadoSushi, AvocadoSushi],
      description: ["Avocadosushi"],
    },
    {
      id: 11,
      dishname: ["Räksushi"],
      pieces: [8, 10, 12],
      prices: [125, 145, 165],
      images: [RäkSushi, RäkSushi, RäkSushi],
      description: ["Sushiräkor"],
    },
    {
      id: 12,
      dishname: ["Grillad Lax med chilimajo"],
      pieces: [8, 10, 12],
      prices: [135, 155, 175],
      images: [GrillLaxSushi, GrillLaxSushi, GrillLaxSushi],
      description: ["Grillad laxsushi som toppas med chilimajonäs"],
    },
    {
      id: 13,
      dishname: ["Familjesushi"],
      pieces: [30, 40, 50, 70],
      prices: [349, 449, 549, 749],
      images: [FamiljeSushi30, FamiljeSushi40, FamiljeSushi50, FamiljeSushi70],
      description: [
        "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
      ],
    },
  ],
};
