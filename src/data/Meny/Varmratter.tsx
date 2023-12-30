import placeholderFood from "../../assets/food/food.svg";

import Yakitori from "../../assets/food/Yakitori.webp";
import Yakiniku from "../../assets/food/Yakiniku.webp";
import YakinikuSushi from "../../assets/food/YakinikuSushi.webp";

import Bento from "../../assets/food/Bento.webp";
import BentoMiyabi from "../../assets/food/BentoMiyabi.webp";
import BentoDeluxe from "../../assets/food/BentoDeluxe.webp";
import BentoGyoza from "../../assets/food/BentoGyoza.webp";

import Gyoza from "../../assets/food/Gyoza.webp";
import Yakisoba from "../../assets/food/Yakisoba.webp";
import WokadKyckling from "../../assets/food/WokadKyckling.webp";
import WokadBiff from "../../assets/food/WokadBiff.webp";
import WokadRäkor from "../../assets/food/WokadRäkor.webp";
import StektRisVeg from "../../assets/food/StektRisVeg.webp";
import StektRisKyckling from "../../assets/food/StektRisKyckling.webp";
import StektRisRäka from "../../assets/food/StektRisRäka.webp";
import StektRisEntrecote from "../../assets/food/StektRisEntrecote.webp";
import Tempura from "../../assets/food/Tempura.webp";
import Karaage from "../../assets/food/Karaage.webp";
import Laxteriyaki from "../../assets/food/Laxteriyaki.webp";
import Vårrullar7 from "../../assets/food/Vårrullar7.webp";
import Vårrullar10 from "../../assets/food/Vårrullar10.webp";

import UdonEntrecote from "../../assets/food/UdonEntrecote.webp";
import UdonVegetarisk from "../../assets/food/UdonVegetarisk.webp";
import UdonTempura from "../../assets/food/UdonTempura.webp";
import UdonGyoza from "../../assets/food/UdonGyoza.webp";

import BibimbapEntrecote from "../../assets/food/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../assets/food/BibimbapKyckling.webp";
import BibimbapRäka from "../../assets/food/BibimbapRäka.webp";
import BibimbapLax from "../../assets/food/BibimbapLax.webp";
import BibimbapTofu from "../../assets/food/BibimbapTofu.webp";
import BibimbapMix from "../../assets/food/BibimbapMix.webp";
import { MenuCategory } from "../../types";

export const Varmratter: MenuCategory = {
  name: "Varmrätter",
  dishes:
    [
      {
        dishname: "Yakiniku",
        size: ["Normal", "Stor"],
        prices: [123, 143],
        images: [Yakiniku, Yakiniku],
        description: "Strimlad Entrecote, serveras med ris",
      },
      {
        dishname: "Yakitori",
        size: ["Normal", "Stor"],
        prices: [123, 143],
        images: [Yakitori, Yakitori],
        description: "Kycklingspett med yakitorisås, serveras med ris",
      },
      {
        dishname: "Yakiniku + 5 bitar sushi",
        types: [],
        prices: [159],
        images: [YakinikuSushi],
        description: "Strimlad Entrecote, serveras med ris samt med 5 bitar blandad sushi",
      },
      {
        dishname: "Bentolåda",
        types: ["Normal", "Miyabi Bento", "Bento Deluxe", "Bento Gyoza"],
        prices: [149, 165, 185, 149],
        images: [Bento, BentoMiyabi, BentoDeluxe, BentoGyoza],
        description: "Yakiniku, Yakitori (2 kycklingspett) samt Sushi (2 rullar, 1 lax, 1 räka)",
      },
      {
        dishname: "Gyoza",
        types: ["6 Bitar", "8 Bitar"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: "Blandfärsfyllda degknyten som serveras med ris och sås",
      },
      {
        dishname: "Vegetarisk Gyoza",
        types: ["6 Bitar", "8 Bitar"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: "Vegetariska degknyten som serveras med ris och sås",
      },
      {
        dishname: "Yakisoba",
        types: [],
        prices: [149],
        images: [Yakisoba],
        description: "Wokad äggnudlar med entrecote, grönsaker",
      },
      {
        dishname: "Wok",
        types: ["Kyckling", "Biff", "Räkor"],
        prices: [145, 145, 149],
        images: [WokadKyckling,WokadBiff,WokadRäkor],
        description: "Serveras med grönsaker samt ris eller nudlar",
      },
      {
        dishname: "Tempura",
        types: [],
        prices: [150],
        images: [Tempura],
        description: "Friterade jätteräkor med grönsaker och ris",
      },
      {
        dishname: "Karaage",
        types: [],
        prices: [150],
        images: [Karaage],
        description: "Friterade kycklingbitar med ris samt sås",
      },
      {
        dishname: "Stekt Ris med Grönsaker",
        types: ["Entrecote", "Kyckling", "Räkor", "Tofu"],
        prices: [149],
        images: [StektRisEntrecote, StektRisKyckling, StektRisRäka, StektRisVeg],
        description: "Grönsaker samt sallad ingår",
      },
      {
        dishname: "Lax Teriyaki",
        types: [],
        prices: [150],
        images: [Laxteriyaki],
        description: "Stekt Lax med wokade grönsaker, teriyakisås samt ris",
      },
      {
        dishname: "Vegetariska Vårrullar",
        types: ["7 Bitar", "10 Bitar"],
        prices: [110, 125],
        images: [Vårrullar7, Vårrullar10],
        description: "Serveras med ris sallad samt sås",
      },
      {
        dishname: "Bibimbap",
        types: ["Entrécôte", "Kyckling", "Räkor","Lax (rå)", "Tofu", "Mix"],
        prices: [139],
        images: [BibimbapEntrecote, BibimbapKyckling, BibimbapRäka, BibimbapLax, BibimbapTofu, BibimbapMix],
        description: "Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg",
      },
      {
        dishname: "Uddon",
        size: ["Entrecote", "Tempura", "Vegetarisk", "Gyoza"],
        prices: [145],
        images: [UdonEntrecote, UdonTempura, UdonVegetarisk, UdonGyoza],
        description: "Nudelsoppa gjord på Risnudlar, grönsaker samt entrecote",
      },
      {
        dishname: "Ramen",
        types: ["Kyckling", "Räka"],
        prices: [145],
        images: [placeholderFood],
        description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
      },
    ]
};