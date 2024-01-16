import RisnudlarEntrecote from "../../assets/food/RisnudlarEntrecote.webp";
import KycklingJapanskCurry from "../../assets/food/KycklingJapanskCurry.webp";
import Yakisoba from "../../assets/food/Yakisoba.webp";
import WokadKyckling from "../../assets/food/WokadKyckling.webp";
import Karaage from "../../assets/food/Karaage.webp";
import BlandadSushi9 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi11 from "../../assets/food/BlandadSushiLiten.webp";
import BlandadSushi13 from "../../assets/food/BlandadSushiLiten.webp";
import Yakitori from "../../assets/food/Yakitori.webp";
import Yakiniku from "../../assets/food/Yakiniku.webp";
import BibimbapEntrecote from "../../assets/food/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../assets/food/BibimbapKyckling.webp";
import BibimbapRäka from "../../assets/food/BibimbapRäka.webp";
import BibimbapLax from "../../assets/food/BibimbapLax.webp";
import BibimbapTofu from "../../assets/food/BibimbapTofu.webp";
import PokebowlLax from "../../assets/food/PokebowlLax.webp"
import PokebowlRäka from "../../assets/food/PokebowlRäka.webp"
import PokebowlKyckling from "../../assets/food/PokebowlKyckling.webp"
import PokebowlTofu from "../../assets/food/PokebowlTofu.webp"

import { MenuCategory } from "../../types";


export const Lunch: MenuCategory = {
  id: "lunch",
  name:"Lunch Meny",
  dishes: [
    {
      id:1,
      dishname: ["Måndag","Tisdag","Onsdag","Torsdag","Fredag"],
      types: ["Måndag","Tisdag","Onsdag","Torsdag","Fredag"],
      prices: [125],
      images: [RisnudlarEntrecote,WokadKyckling,KycklingJapanskCurry,Yakisoba, Karaage],
      description: ["Wokade Risnudlar med entrecote samt grönsaker","Wokad kyckling med ris samt grönsaker","Japansk Curry med kyckling, grönsaker och ris","Yakisoba (Wokade äggnudlar med entrecote)","Kyckling Karage (Friterad kyckling med ris samt sås)"],
    },
    {
      id: 2,
      dishname: ["Blandad Sushi"],
      pieces: [9,11,13],
      prices: [109,129,149],
      images: [BlandadSushi9, BlandadSushi11, BlandadSushi13,],
      description: ["Blandad Sushi med många olika typer av sushibitar."]
    },
    {
      id: 3,
      dishname: ["Bibimbap"],
      types: ["Entrécôte", "Kyckling", "Räkor","Lax (rå)", "Tofu"],
      prices: [139],
      images: [BibimbapEntrecote, BibimbapKyckling, BibimbapRäka, BibimbapLax, BibimbapTofu],
      description: ["Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg"],
    },
    {
      id: 4,
      dishname: ["Yakiniku"],
      size: ["Normal"],
      prices: [123],
      images: [Yakiniku],
      description: ["Strimlad Entrécôte, serveras med ris"],
    },
    {
      id: 5,
      dishname: ["Yakitori"],
      size: ["Normal"],
      prices: [123],
      images: [Yakitori],
      description: ["Kycklingspett med yakitorisås, serveras med ris"],
    },
    {
      id: 5,
      dishname: ["Poké bowl Lax & Tonfisk", "Poké bowl Räkor", "Poké bowl Kyckling","Poké bowl Tofu"],
      types: ["Lax & Tonfisk", "Räkor", "Kyckling", "Tofu"],
      prices: [139],
      images: [PokebowlLax, PokebowlRäka, PokebowlKyckling,PokebowlTofu],
      description: [
        "Serveras med ris, mango, avokado, morötter, gurka, bönor. Toppas med chilimajo och teriyakisås",
      ],
    },
  ],
};
