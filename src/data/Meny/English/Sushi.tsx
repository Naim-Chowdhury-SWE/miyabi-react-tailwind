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

export const engSushi: MenuCategory = {
  id: "sushi",
  name: "Sushi Menu",
  dishes: [
    {
      id: 1,
      dishname: ["Mixed Sushi"],
      pieces: [7,8,9,11,13,14,16,20],
      prices: [89, 99, 109, 129,149, 159, 179, 219],
      images: [BlandadSushi7, BlandadSushi8, BlandadSushi9, BlandadSushi11, BlandadSushi13, BlandadSushi14, BlandadSushi16, BlandadSushi20],
      description: ["Mixed Sushi with a variety of sushi pieces."]
    },
    {
      id: 2,
      dishname: ["Salmon & Rolls"],
      pieces: [8,10,12],
      prices: [99, 119, 139],
      images: [LaxRullar8, LaxRullar10, LaxRullar12],
      description: ["Mixed Sushi containing Rolls and Salmon."],
    },
    {
      id: 3,
      dishname: ["Vegetarian Sushi"],
      pieces: [10, 12],
      prices: [109, 129],
      images: [VegetariskSushi10, VegetariskSushi12],
      description: ["Mixed sushi with Vegetarian rolls, Avocado, and Tofu"],
    },
    {
      id: 4,
      dishname: ["Mom's Sushi"],
      pieces: [10, 12],
      prices: [109, 135],
      images: [MammaSushi10, MammaSushi12],
      description: ["Mixed sushi without raw fish"],
    },
    {
      id: 5,
      dishname: ["Mixed Nigiri (without rolls)"],
      pieces: [9, 12],
      prices: [119, 150],
      images: [BlandadNigiri9, BlandadNigiri12],
      description: ["Mixed sushi without rolls"],
    },
    {
      id: 6,
      dishname: ["Dad's Deluxe (without rolls)"],
      pieces: [12],
      prices: [160],
      images: [PappaLyx],
      description: ["Only mixed with different types of fish"],
    },
    {
      id: 7,
      dishname: ["Salmon Sushi"],
      pieces: [8, 10, 12],
      prices: [120, 140, 160],
      images: [LaxSushi, LaxSushi, LaxSushi],
      description: ["Salmon sushi"],
    },
    {
      id: 8,
      dishname: ["Salmon & Avocado Sushi"],
      pieces: [8, 10, 12],
      prices: [115, 125, 145],
      images: [LaxAvocadoSushi, LaxAvocadoSushi, LaxAvocadoSushi],
      description: ["Half salmon and half avocado"],
    },
    {
      id: 9,
      dishname: ["Salmon & Shrimp Sushi"],
      pieces: [8, 10, 12],
      prices: [115, 130, 150],
      images: [LaxRäkorSushi, LaxRäkorSushi, LaxRäkorSushi],
      description: ["Half salmon & half shrimp"],
    },
    {
      id: 10,
      dishname: ["Avocado Sushi"],
      pieces: [8, 10, 12],
      prices: [105, 125, 140],
      images: [AvocadoSushi, AvocadoSushi, AvocadoSushi],
      description: ["Avocado sushi"],
    },
    {
      id: 11,
      dishname: ["Shrimp Sushi"],
      pieces: [8, 10, 12],
      prices: [120, 139, 160],
      images: [RäkSushi, RäkSushi, RäkSushi],
      description: ["Shrimp sushi"],
    },
    {
      id: 12,
      dishname: ["Grilled Salmon with Chili Mayo"],
      pieces: [8, 10, 12],
      prices: [135, 155, 175],
      images: [GrillLaxSushi, GrillLaxSushi, GrillLaxSushi],
      description: ["Grilled salmon sushi topped with chili mayo"],
    },
    {
      id: 13,
      dishname: ["Family Sushi"],
      pieces: [30, 40, 50, 70],
      prices: [329, 429, 529, 729],
      images: [
        FamiljeSushi30,
        FamiljeSushi40,
        FamiljeSushi50,
        FamiljeSushi70,
      ],
      description: ["A large mixed sushi with all possible types we offer"],
    },
    
  ],
};
