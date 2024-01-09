import BlandadSushi7 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi8 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi9 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi11 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi13 from "../../assets/food/BlandadSushiStor.webp";
import BlandadSushi14 from "../../assets/food/BlandadSushiStor.webp";
import BlandadSushi16 from "../../assets/food/BlandadSushiStor.webp";
import BlandadSushi20 from "../../assets/food/BlandadSushiStor.webp";
import BlandadNigiri9 from "../../assets/food/BlandadNigiri9.webp";
import BlandadNigiri12 from "../../assets/food/BlandadNigiri12.webp";
import LaxRullar8 from "../../assets/food/LaxRullar8.webp";
import LaxRullar10 from "../../assets/food/LaxRullar10.webp";
import LaxRullar12 from "../../assets/food/LaxRullar12.webp";
import VegetariskSushi10 from "../../assets/food/VegetariskSushi10.webp";
import VegetariskSushi12 from "../../assets/food/VegetariskSushi12.webp";
import MammaSushi10 from "../../assets/food/MammaSushi10.webp";
import MammaSushi12 from "../../assets/food/MammaSushi12.webp";
import PappaLyx from "../../assets/food/PappaLyx.webp";
import LaxSushi from "../../assets/food/LaxSushi.webp";
import LaxRäkorSushi from "../../assets/food/LaxRäkorSushi.webp";
import RäkSushi from "../../assets/food/RäkSushi.webp";
import GrillLaxSushi from "../../assets/food/GrillLaxSushi.webp";
import LaxAvocadoSushi from "../../assets/food/LaxAvocadoSushi.webp";
import AvocadoSushi from "../../assets/food/AvocadoSushi.webp";
import FamiljeSushi30 from "../../assets/food/FamiljeSushi30.webp";
import FamiljeSushi40 from "../../assets/food/FamiljeSushi40.webp";
import FamiljeSushi50 from "../../assets/food/FamiljeSushi50.webp";
import FamiljeSushi70 from "../../assets/food/FamiljeSushi70.webp";
import { MenuCategory } from "../../types";

/* const messageBlandadSushiLiten = "Blandad Sushi med många olika typer av sushibitar.";
const messageBlandadSushiStor = "Blandad Sushi med många olika typer av sushibitar."; */

export const Sushi: MenuCategory = {
  name: "Sushi Meny",
  dishes: [
    {
      id: 1,
      dishname: ["Blandad Sushi"],
      pieces: [7,8,9,11,13,14,16,20],
      prices: [89, 99, 109, 129,149, 159, 179, 219],
      images: [BlandadSushi7, BlandadSushi8, BlandadSushi9, BlandadSushi11, BlandadSushi13, BlandadSushi14, BlandadSushi16, BlandadSushi20],
      description: ["Blandad Sushi med många olika typer av sushibitar."]
    },
    {
      id: 2,
      dishname: ["Lax & Rullar"],
      pieces: [8,10,12],
      prices: [99, 119, 139],
      images: [LaxRullar8, LaxRullar10, LaxRullar12],
      description: ["Blandad Sushi som innehåller Rullar och Lax."],
    },
    {
      id: 3,
      dishname: ["Vegetarisk Sushi"],
      pieces: [10,12],
      prices: [109, 129],
      images: [VegetariskSushi10, VegetariskSushi12],
      description: ["Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu"],
    },
    {
      id: 4,
      dishname: ["Mamma Sushi"],
      pieces: [10, 12],
      prices: [109, 135],
      images: [MammaSushi10, MammaSushi12],
      description: ["Blandad sushi men utan råfisk"],
    },
    {
      id: 5,
      dishname: ["Blandad Nigiri (utan rullar)"],
      pieces: [9, 12],
      prices: [119, 150],
      images: [BlandadNigiri9, BlandadNigiri12],
      description: ["Blandad sushi men utan rullar"],
    },
    {
      id: 6,
      dishname: ["Pappa Lyx (utan rullar)"],
      pieces: [12],
      prices: [160],
      images: [PappaLyx],
      description: ["Endast blandat med olika fisksorter"],
    },
    {
      id: 7,
      dishname: ["Lax Sushi"],
      pieces: [8, 10, 12],
      prices: [120, 140, 160],
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
      prices: [115, 130, 150],
      images: [LaxRäkorSushi, LaxRäkorSushi, LaxRäkorSushi],
      description: ["Hälften lax & hälften räkor"],
    },
    {
      id: 10,
      dishname: ["Avocado Sushi"],
      pieces: [8, 10, 12],
      prices: [105, 125, 140],
      images: [AvocadoSushi, AvocadoSushi, AvocadoSushi],
      description: ["Avocadosushi"],
    },
    {
      id: 11,
      dishname: ["Räksushi"],
      pieces: [8, 10, 12],
      prices: [120, 139, 160],
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
      prices: [329, 429, 529, 729],
      images: [
        FamiljeSushi30,
        FamiljeSushi40,
        FamiljeSushi50,
        FamiljeSushi70,
      ],
      description: ["En stor blandad sushi med alla möjliga sushityper vi erbjuder"],
    },
  ],
};
