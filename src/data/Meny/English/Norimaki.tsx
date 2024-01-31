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
import CrispySpicyTunaRoll from "../../../assets/food/norimaki/CrispySpicyTunaRoll.webp";
import KaraageRoll from "../../../assets/food/norimaki/KaraageRoll.webp";
import YakinikuRoll from "../../../assets/food/norimaki/YakinikuRoll.webp";
import { MenuCategory } from "../../../types";

export const engNorimaki: MenuCategory = {
  id:"norimaki",
  name: "Norimaki Menu",
  dishes: [
    {
      id: 1,
      dishname: ["California Roll", "California Roll Special"],
      types: ["Normal", "Special"],
      prices: [129, 149],
      images: [CaliforniaRoll, CaliforniaRollSpecial],
      description: ["Inside-Out seaweed roll with avocado, cucumber, crab stick, and chili mayo", "Inside-Out seaweed roll with avocado, cucumber, crab stick. Topped with seared salmon and chili mayo"],
    },
    {
      id: 2,
      dishname: ["Standard Roll"],
      types: [],
      prices: [105],
      images: [StandardRoll],
      description: ["Inside-Out seaweed roll with salmon, cucumber, crab stick"],
    },
    {
      id: 3,
      dishname: ["Vegetarian Roll", "Vegetarian Roll with Mango", "Crispy Vegetarian Roll"],
      types: ["Normal", "Mango Roll", "Crispy"],
      prices: [105, 120, 159],
      images: [VegetariskRoll, VegetariskMangoRoll, CrispyVegetariskRoll],
      description: ["Seaweed roll with cucumber and avocado", "Seaweed roll with cucumber, avocado, and mango", "Avocado, crispy salad, tofu, and vegan mayonnaise. The roll is fried"],
    },
    {
      id: 4,
      dishname: ["Spicy Tuna Roll", "Spicy Salmon Roll"],
      types: ["Tuna", "Salmon"],
      prices: [145],
      images: [SpicytunaRoll, SpicytunaRoll],
      description: ["Seaweed roll with chili-marinated tuna", "Seaweed roll with chili-marinated salmon"],
    },
    {
      id: 5,
      dishname: ["Crispy Spicy Tuna Roll", "Crispy Spicy Salmon Roll"],
      types: ["Tuna", "Salmon"],
      prices: [169],
      images: [CrispySpicyTunaRoll, CrispySpicyTunaRoll],
      description: ["Fried seaweed roll with marinated tuna, crispy salad, avocado with chili mayo and sriracha sauce", "Fried seaweed roll with marinated salmon, crispy salad, avocado with chili mayo and sriracha sauce"],
    },
    {
      id: 6,
      dishname: ["Kappamaki"],
      types: [],
      prices: [105],
      images: [KappaMaki],
      description: ["Seaweed roll with cucumber"],
    },
    {
      id: 7,
      dishname: ["Shakemaki"],
      types: [],
      prices: [125],
      images: [ShakeMaki],
      description: ["Seaweed roll with salmon"],
    },
    {
      id: 8,
      dishname: ["Tekkamaki"],
      types: [],
      prices: [129],
      images: [TekkaMaki],
      description: ["Seaweed roll with tuna and cucumber"],
    },
    {
      id: 9,
      dishname: ["Hawaiimaki"],
      types: ["Tuna", "Salmon"],
      prices: [120],
      images: [HawaiiMakiTuna, HawaiiMakiLax],
      description: ["Seaweed roll with tuna and avocado", "Seaweed roll with salmon and avocado"],
    },
    {
      id: 10,
      dishname: ["Temakemax"],
      types: [],
      prices: [135],
      images: [TemakeMax],
      description: ["Seaweed roll with tuna, avocado, and salmon"],
    },
    {
      id: 11,
      dishname: ["Futomaki"],
      types: [],
      prices: [129],
      images: [FutomakiRoll],
      description: ["Seaweed roll with salmon, omelette, cucumber, and avocado"],
    },
    {
      id: 12,
      dishname: ["Tempura Roll", "Tempura Roll Fried", "Crispy Tempura Roll"],
      types: ["Normal", "Fried", "Crispy"],
      prices: [130, 145, 159],
      images: [TempuraRoll, TempuraRollFriterad, CrispyTempuraRoll],
      description: ["Seaweed roll with fried shrimp and chili mayo", "Fried Seaweed roll with fried shrimp, cucumber, and chili mayo", "Fried Seaweed roll with fried jumbo shrimp, avocado, crispy salad, and chili mayonnaise"],
    },
    {
      id: 13,
      dishname: ["Miyabi Special Roll", "Crispy Miyabi Roll"],
      types: ["Fried", "Crispy"],
      prices: [145, 149],
      images: [MiyabiSpecialRoll, CrispyMiyabiRoll],
      description: ["Fried Seaweed roll with salmon, cucumber, crab, and chili mayo", "Fried Seaweed roll with Marinated salmon, avocado, crispy salad, and chili mayonnaise"],
    },
    {
      id: 14,
      dishname: ["Karage Roll"],
      types: [],
      prices: [130],
      images: [KaraageRoll],
      description: ["Seaweed roll with fried chicken, topped with chili mayo"],
    },
    {
      id: 15,
      dishname: ["Philadelphia Roll"],
      types: [],
      prices: [125],
      images: [PhiladelphiaRoll],
      description: ["Seaweed roll with salmon, avocado, cucumber, and Philadelphia cream cheese"],
    },
    {
      id: 16,
      dishname: ["Alaska Roll", "Crispy Alaska Roll"],
      types: ["Normal", "Crispy"],
      prices: [125, 159],
      images: [AlaskaRoll, CrispyAlaskaRoll],
      description: ["Seaweed roll with salmon, avocado, and cucumber, topped with chili mayo", "Fried Seaweed roll with salmon, avocado, and cucumber, topped with chili mayo"],
    },
    {
      id: 17,
      dishname: ["Yakiniku Roll"],
      types: [],
      prices: [130],
      images: [YakinikuRoll],
      description: ["Seaweed roll with yakiniku beef, bell pepper, lettuce, and red onion, topped with chili mayo"],
    },
    {
      id: 18,
      dishname: ["Teriyaki Roll"],
      types: [],
      prices: [130],
      images: [TeriyakiRoll],
      description: ["Seaweed roll with seared salmon, avocado, onion, and lettuce"],
    },
    {
      id: 19,
      dishname: ["Dragon Roll"],
      types: [],
      prices: [149],
      images: [DragonRoll],
      description: ["Shrimp, crispy salad, avocado, dragon sauce, topped with grilled salmon"],
    },
    {
      id: 20,
      dishname: ["Bibimbap Roll"],
      types: ["Yakiniku", "Chicken", "Shrimp"],
      prices: [130],
      images: [placeholder, placeholder, placeholder],
      description: ["Seaweed roll with cucumber, salad, kimchi, and mixed greens"],
    },
    
  ]
}