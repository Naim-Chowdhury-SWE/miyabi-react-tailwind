import BlandadSushi7 from "../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi8 from "../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi9 from "../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi11 from "../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi13 from "../../assets/food/BlandadSushi.webp";
import BlandadSushi14 from "../../assets/food/BlandadSushi.webp";
import BlandadSushi16 from "../../assets/food/BlandadSushi.webp";
import BlandadSushi20 from "../../assets/food/BlandadSushi.webp";
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

// Define individual arrays for each category
export const mixedSushi: MenuCategory = {
  name: "Sushi Meny",
  dishes: [
    {
      dishname: "Blandad Sushi",
      pieces: [7,8,9,11],
      prices: [89, 99, 109, 129],
      images: [BlandadSushi7, BlandadSushi8, BlandadSushi9, BlandadSushi11],
      description: "Blandad Sushi som innehåller Rullar, Lax, Avocado, Ägg och Räka.",
    },
    {
      dishname: "Blandad Sushi",
      pieces: [13,14,16,20],
      prices: [149, 159, 179, 219],
      images: [BlandadSushi13, BlandadSushi14, BlandadSushi16, BlandadSushi20],
      description: "Blandad Sushi som innehåller Rullar, Lax, Avocado, Ägg, Räka och/eller Tonfisk, Bläckfisk, havsabbore, Rökt Ål.",
    },
    {
      dishname: "Lax & Rullar",
      pieces: [8,10,12],
      prices: [99, 119, 139],
      images: [LaxRullar8, LaxRullar10, LaxRullar12],
      description: "Blandad Sushi som innehåller Rullar och Lax.",
    },
    {
      dishname: "Vegetarisk Sushi",
      pieces: [10,12],
      prices: [109, 129],
      images: [VegetariskSushi10, VegetariskSushi12],
      description: "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
    },
    {
      dishname: "Mamma Sushi",
      pieces: [10, 12],
      prices: [109, 135],
      images: [MammaSushi10, MammaSushi12],
      description: "Blandad sushi men utan råfisk",
    },
    {
      dishname: "Blandad Nigiri (utan rullar)",
      pieces: [9, 12],
      prices: [119, 150],
      images: [BlandadNigiri9, BlandadNigiri12],
      description: "Blandad sushi men utan rullar",
    },
    {
      dishname: "Pappa Lyx (utan rullar)",
      pieces: [12],
      prices: [160],
      images: [PappaLyx],
      description: "Endast blandat med olika fisksorter",
    },
    {
      dishname: "Lax Sushi",
      pieces: [8, 10, 12],
      prices: [120, 140, 160],
      images: [LaxSushi, LaxSushi, LaxSushi],
      description: "Laxsushi",
    },
    {
      dishname: "Lax & Avocado Sushi",
      pieces: [8, 10, 12],
      prices: [115, 125, 145],
      images: [LaxAvocadoSushi, LaxAvocadoSushi, LaxAvocadoSushi],
      description: "Hälften lax och hälften avocado",
    },
    {
      dishname: "Lax & Räkor Sushi",
      pieces: [8, 10, 12],
      prices: [115, 130, 150],
      images: [LaxRäkorSushi, LaxRäkorSushi, LaxRäkorSushi],
      description: "Hälften lax & hälften räkor",
    },
    {
      dishname: "Avocado Sushi",
      pieces: [8, 10, 12],
      prices: [105, 125, 140],
      images: [AvocadoSushi, AvocadoSushi, AvocadoSushi],
      description: "Avocadosushi",
    },
    {
      dishname: "Räksushi",
      pieces: [8, 10, 12],
      prices: [120, 139, 160],
      images: [RäkSushi, RäkSushi, RäkSushi],
      description: "Sushiräkor",
    },
    {
      dishname: "Grillad Lax med chilimajo",
      pieces: [8, 10, 12],
      prices: [135, 155, 175],
      images: [GrillLaxSushi, GrillLaxSushi, GrillLaxSushi],
      description: "Grillad laxsushi som toppas med chilimajonäs",
    },
    {
      dishname: "Familjesushi",
      pieces: [30, 40, 50, 70],
      prices: [329, 429, 529, 729],
      images: [
        FamiljeSushi30,
        FamiljeSushi40,
        FamiljeSushi50,
        FamiljeSushi70,
      ],
      description: "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
    },
    // ... add more dishes as needed
  ],
};


export const blandadSushi2 = [
  {
    title: "Blandad Sushi 1",
    variants: [
      {
        subtitle: "7 bitar",
        description: "Blandad sushi med lax, rullar och avocado",
        price: "89kr",
        image: BlandadSushi7,
        alt: "Blandad Sushi 7 bitar",
      },
      {
        subtitle: "8 bitar",
        description: "Blandad sushi med lax, rullar och avocado",
        price: "99kr",
        image: BlandadSushi8,
        alt: "Blandad Sushi 8 bitar",
      },
      {
        subtitle: "9 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "109kr",
        image: BlandadSushi9,
        alt: "Blandad Sushi 9 bitar",
      },
      {
        subtitle: "11 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "129kr",
        image: BlandadSushi11,
        alt: "Blandad Sushi 11 bitar",
      },
    ],
  },
  {
    title: "Blandad Sushi 2",
    variants: [
      {
        subtitle: "13 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "149kr",
        image: BlandadSushi13,
        alt: "Blandad Sushi 13 bitar",
      },
      {
        subtitle: "14 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "159kr",
        image: BlandadSushi14,
        alt: "Blandad Sushi 14 bitar",
      },
      {
        subtitle: "16 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "179kr",
        image: BlandadSushi16,
        alt: "Blandad Sushi 16 bitar",
      },
      {
        subtitle: "20 bitar",
        description: "Blandad sushi med lax, rullar, räkor och avocado",
        price: "219kr",
        image: BlandadSushi20,
        alt: "Blandad Sushi 20 bitar",
      },
    ],
  },
];

/* export const menuSushi = [
  {
    title: "Lax & Rullar Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Hälften lax & hälften rullar",
        price: "99kr",
        image: images.placeholderNigiri,
        alt: "Lax & Rullar 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Hälften lax & hälften rullar",
        price: "119kr",
        image: images.placeholderNigiri,
        alt: "Lax & Rullar 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Hälften lax & hälften rullar",
        price: "139kr",
        image: images.placeholderNigiri,
        alt: "Lax & Rullar 12 bitar",
      },
    ],
  },
  {
    title: "Vegetarisk / Vegansk Sushi",
    variants: [
      {
        subtitle: "10 bitar",
        description:
          "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
        price: "109kr",
        image: images.placeholderNigiri,
        alt: "Vegansk Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description:
          "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
        price: "129kr",
        image: images.placeholderNigiri,
        alt: "Vegansk Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Mamma Sushi",
    variants: [
      {
        subtitle: "10 bitar",
        description: "Blandad sushi men utan råfisk",
        price: "109kr",
        image: images.placeholderNigiri,
        alt: "Mamma Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Blandad sushi men utan råfisk",
        price: "135kr",
        image: images.placeholderNigiri,
        alt: "Mamma Sushi 10 bitar",
      },
    ],
  },
  {
    title: "9 bitar Blandad Nigiri (utan rullar)",
    variants: [
      {
        subtitle: "9 bitar",
        description: "Endast blandat med olika fisksorter",
        price: "119kr",
        image: images.placeholderNigiri,
        alt: "Blandad Nigiri Sushi 9 bitar",
      },
    ],
  },
  {
    title: "12 bitar Blandad Nigiri (utan rullar)",
    variants: [
      {
        subtitle: "12 bitar",
        description: "Endast blandat med olika fisksorter",
        price: "150kr",
        image: images.placeholderNigiri,
        alt: "Blandad Nigiri Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Lax Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Laxsushi",
        price: "120kr",
        image: images.LaxSushi,
        alt: "Lax Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Laxsushi",
        price: "140kr",
        image: images.LaxSushi,
        alt: "Lax Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Laxsushi",
        price: "160kr",
        image: images.LaxSushi,
        alt: "Lax Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Lax & Avocado Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Hälften lax och hälften avocado",
        price: "115kr",
        image: images.LaxAvocadoSushi,
        alt: "Lax & Avocado Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Hälften lax och hälften avocado",
        price: "125kr",
        image: images.LaxAvocadoSushi,
        alt: "Lax & Avocado Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Hälften lax och hälften avocado",
        price: "145kr",
        image: images.LaxAvocadoSushi,
        alt: "Lax & Avocado Sushi 12 bitar",
      },
    ],
  },

  {
    title: "Lax & Räkor Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Hälften lax & hälften räkor",
        price: "115kr",
        image: images.LaxRäkorSushi,
        alt: "Lax & Räkor Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Hälften lax & hälften räkor",
        price: "130kr",
        image: images.LaxRäkorSushi,
        alt: "Lax & Räkor Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Hälften lax & hälften räkor",
        price: "150kr",
        image: images.LaxRäkorSushi,
        alt: "Lax & Räkor Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Avocado Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Avocadosushi",
        price: "105kr",
        image: images.AvocadoSushi,
        alt: "Avocado Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Avocadosushi",
        price: "125kr",
        image: images.AvocadoSushi,
        alt: "Avocado Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Avocadosushi",
        price: "140kr",
        image: images.AvocadoSushi,
        alt: "Avocado Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Räk Sushi",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Sushiräkor",
        price: "120kr",
        image: images.placeholderNigiri,
        alt: "Räk Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Sushiräkor",
        price: "139kr",
        image: images.placeholderNigiri,
        alt: "Räk Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Sushiräkor",
        price: "160kr",
        image: images.placeholderNigiri,
        alt: "Räk Sushi 12 bitar",
      },
    ],
  },
  {
    title: "Grillad Lax med chilimajo",
    variants: [
      {
        subtitle: "8 bitar",
        description: "Grillad laxsushi som toppas med chilimajonäs",
        price: "135kr",
        image: images.GrillLaxSushi,
        alt: "Grillad Lax Sushi 8 bitar",
      },
      {
        subtitle: "10 bitar",
        description: "Grillad laxsushi som toppas med chilimajonäs",
        price: "155kr",
        image: images.GrillLaxSushi,
        alt: "Grillad Lax Sushi 10 bitar",
      },
      {
        subtitle: "12 bitar",
        description: "Grillad laxsushi som toppas med chilimajonäs",
        price: "175kr",
        image: images.GrillLaxSushi,
        alt: "Grillad Lax Sushi 12 bitar",
      },
    ],
  },
];

export const familjeSushi = [
  {
    title: "Familjesushi 30 bitar",
    description:
      "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
    price: "329kr",
    image: images.FamiljeSushiSmall,
    alt: "Familjesushi 30 bitar",
  },
  {
    title: "Familjesushi 40 bitar",
    description:
      "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
    price: "429kr",
    image: images.FamiljeSushiMedium,
    alt: "Familjesushi 40 bitar",
  },
  {
    title: "Familjesushi 50 bitar",
    description:
      "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
    price: "529kr",
    image: images.FamiljeSushiMedium,
    alt: "Familjesushi 50 bitar",
  },
  {
    title: "Familjesushi 70 bitar",
    description:
      "En stor blandad sushi med alla möjliga sushityper vi erbjuder",
    price: "729kr",
    image: images.placeholderNigiri,
    alt: "Familjesushi 70 bitar",
  },
];
 */