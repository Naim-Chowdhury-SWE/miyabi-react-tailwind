import Yakitori from "../../../assets/food/varmratter/Yakitori.webp";
import Yakiniku from "../../../assets/food/varmratter/Yakiniku.webp";
import YakinikuSushi from "../../../assets/food/varmratter/YakinikuSushi.webp";

import Bento from "../../../assets/food/varmratter/Bento.webp";
import BentoMiyabi from "../../../assets/food/varmratter/BentoMiyabi.webp";
import BentoDeluxe from "../../../assets/food/varmratter/BentoDeluxe.webp";
import BentoGyoza from "../../../assets/food/varmratter/BentoGyoza.webp";

import Gyoza from "../../../assets/food/varmratter/Gyoza.webp";
import Yakisoba from "../../../assets/food/varmratter/Yakisoba.webp";
import WokadKyckling from "../../../assets/food/varmratter/WokadKyckling.webp";
import WokadBiff from "../../../assets/food/varmratter/WokadBiff.webp";
import WokadRäkor from "../../../assets/food/varmratter/WokadRäkor.webp";
import StektRisVeg from "../../../assets/food/varmratter/StektRisVeg.webp";
import StektRisKyckling from "../../../assets/food/varmratter/StektRisKyckling.webp";
import StektRisRäka from "../../../assets/food/varmratter/StektRisRäka.webp";
import StektRisEntrecote from "../../../assets/food/varmratter/StektRisEntrecote.webp";
import Tempura from "../../../assets/food/varmratter/Tempura.webp";
import Karaage from "../../../assets/food/varmratter/Karaage.webp";
import Laxteriyaki from "../../../assets/food/varmratter/Laxteriyaki.webp";
import Vårrullar7 from "../../../assets/food/varmratter/Vårrullar7.webp";
import Vårrullar10 from "../../../assets/food/varmratter/Vårrullar10.webp";

import UdonEntrecote from "../../../assets/food/varmratter/UdonEntrecote.webp";
import UdonVegetarisk from "../../../assets/food/varmratter/UdonVegetarisk.webp";
import UdonTempura from "../../../assets/food/varmratter/UdonTempura.webp";
import UdonGyoza from "../../../assets/food/varmratter/UdonGyoza.webp";
import RamenKyckling from "../../../assets/food/varmratter/RamenKyckling.webp";
import RamenRäka from "../../../assets/food/varmratter/RamenRäka.webp";

import BibimbapEntrecote from "../../../assets/food/varmratter/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../../assets/food/varmratter/BibimbapKyckling.webp";
import BibimbapRäka from "../../../assets/food/varmratter/BibimbapRäka.webp";
import BibimbapLax from "../../../assets/food/varmratter/BibimbapLax.webp";
import BibimbapTofu from "../../../assets/food/varmratter/BibimbapTofu.webp";
import BibimbapMix from "../../../assets/food/varmratter/BibimbapMix.webp";
import { MenuCategory } from "../../../types";

const bentoNormal = "Yakiniku, Yakitori samt Sushi (2 rullar, 1 lax, 1 räka). Ris och sallad ingår";
const bentoGyoza = "Yakiniku, Yakitori samt Gyoza. Ris och sallad ingår";
const bentoMiyabi = "Yakiniku, Yakitori, Tempura samt Sushi (1 lax, 1 räka, 1 tonfisk). Ris och sallad ingår";
const bentoDeluxe = "Yakiniku, Yakitori, Tempura, Gyoza samt Sushi (1 lax, 1 räka, 1 tonfisk). Ris och sallad ingår";

export const sweVarmratter: MenuCategory = {
  id: "varmratter",
  name: "Varmrätter",
  dishes:
    [
      {
        id: 1,
        dishname: ["Yakiniku"],
        size: ["Normal", "Stor"],
        prices: [123, 143],
        images: [Yakiniku, Yakiniku],
        description: ["Strimlad Entrécôte, serveras med ris"],
      },
      {
        id: 2,
        dishname: ["Yakitori"],
        size: ["Normal", "Stor"],
        prices: [123, 143],
        images: [Yakitori, Yakitori],
        description: ["Kycklingspett med yakitorisås, serveras med ris"],
      },
      {id: 3,
        dishname: ["Yakiniku + 5 bitar sushi"],
        types: [],
        prices: [159],
        images: [YakinikuSushi],
        description: ["Strimlad Entrécôte, serveras med ris samt med 5 bitar blandad sushi"],
      },
      {
        id: 4,
        dishname: ["Bentolåda", "Bento Gyoza", "Miyabi Bento", "Bento Deluxe"],
        types: ["Normal", "Bento Gyoza", "Miyabi Bento", "Bento Deluxe"],
        prices: [149, 149, 165, 185],
        images: [Bento, BentoGyoza, BentoMiyabi, BentoDeluxe],
        description: [bentoNormal, bentoGyoza, bentoMiyabi, bentoDeluxe],
      },
      {
        id: 5,
        dishname: ["Gyoza"],
        types: ["6 Bitar", "8 Bitar"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: ["Blandfärsfyllda degknyten som serveras med ris och sås"],
      },
      {
        id: 6,
        dishname: ["Vegetarisk Gyoza"],
        types: ["6 Bitar", "8 Bitar"],
        prices: [118, 138],
        images: [Gyoza, Gyoza],
        description: ["Vegetariska degknyten som serveras med ris och sås"],
      },
      {
        id: 7,
        dishname: ["Yakisoba"],
        types: [],
        prices: [149],
        images: [Yakisoba],
        description: ["Wokad äggnudlar med entrecote, grönsaker"],
      },
      {
        id: 8,
        dishname: ["Wokad Kyckling", "Wokad Biff", "Wokad Räkor"],
        types: ["Kyckling", "Biff", "Räkor"],
        prices: [145, 145, 149],
        images: [WokadKyckling,WokadBiff,WokadRäkor],
        description: ["Serveras med grönsaker samt ris eller nudlar"],
      },
      {
        id: 9,
        dishname: ["Tempura"],
        types: [],
        prices: [150],
        images: [Tempura],
        description: ["Friterade jätteräkor med grönsaker och ris"],
      },
      {
        id: 10,
        dishname: ["Karaage"],
        types: [],
        prices: [150],
        images: [Karaage],
        description: ["Friterade kycklingbitar med ris samt sås"],
      },
      {
        id: 11,
        dishname: ["Stekt Ris med Grönsaker"],
        types: ["Entrécôte", "Kyckling", "Räkor", "Tofu"],
        prices: [149],
        images: [StektRisEntrecote, StektRisKyckling, StektRisRäka, StektRisVeg],
        description: ["Stekt ris blandat med broccoli, paprika, haricot verts, edamame, morötter och bambuskott sallad ingår"],
      },
      {
        id: 12,
        dishname: ["Lax Teriyaki"],
        types: [],
        prices: [150],
        images: [Laxteriyaki],
        description: ["Stekt Lax med wokade grönsaker, teriyakisås samt ris"],
      },
      {
        id: 13,
        dishname: ["Vegetariska Vårrullar"],
        types: ["7 Bitar", "10 Bitar"],
        prices: [110, 125],
        images: [Vårrullar7, Vårrullar10],
        description: ["Serveras med ris, sallad samt sås"],
      },
      {
        id: 14,
        dishname: ["Bibimbap"],
        types: ["Entrécôte", "Kyckling", "Räkor","Lax (rå)", "Tofu", "Mix"],
        prices: [139],
        images: [BibimbapEntrecote, BibimbapKyckling, BibimbapRäka, BibimbapLax, BibimbapTofu, BibimbapMix],
        description: ["Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg"],
      },
      {
        id: 15,
        dishname: ["Uddon"],
        types: ["Entrecote", "Tempura", "Vegetarisk", "Gyoza"],
        prices: [145],
        images: [UdonEntrecote, UdonTempura, UdonVegetarisk, UdonGyoza],
        description: ["Nudelsoppa gjord på Risnudlar samt grönsaker"],
      },
      {
        id: 16,
        dishname: ["Ramen"],
        types: ["Kyckling", "Räka"],
        prices: [145],
        images: [RamenKyckling, RamenRäka],
        description: ["Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg"],
      },
    ]
};