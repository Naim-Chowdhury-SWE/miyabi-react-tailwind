import RisnudlarEntrecote from "../../../assets/food/lunch/RisnudlarEntrecote.webp";
import KycklingJapanskCurry from "../../../assets/food/lunch/KycklingJapanskCurry.webp";
import Yakisoba from "../../../assets/food/varmratter/Yakisoba.webp";
import WokadKyckling from "../../../assets/food/varmratter/WokadKyckling.webp";
import Karaage from "../../../assets/food/varmratter/Karaage.webp";
import BlandadSushi9 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi11 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import BlandadSushi13 from "../../../assets/food/sushi/BlandadSushiLiten.webp";
import Yakitori from "../../../assets/food/varmratter/Yakitori.webp";
import Yakiniku from "../../../assets/food/varmratter/Yakiniku.webp";
import BibimbapEntrecote from "../../../assets/food/varmratter/BibimbapEntrecote.webp";
import BibimbapKyckling from "../../../assets/food/varmratter/BibimbapKyckling.webp";
import BibimbapRäka from "../../../assets/food/varmratter/BibimbapRäka.webp";
import BibimbapLax from "../../../assets/food/varmratter/BibimbapLax.webp";
import BibimbapTofu from "../../../assets/food/varmratter/BibimbapTofu.webp";
import PokebowlLax from "../../../assets/food/pokebowl/PokebowlLax.webp"
import PokebowlRäka from "../../../assets/food/pokebowl/PokebowlRäka.webp"
import PokebowlKyckling from "../../../assets/food/pokebowl/PokebowlKyckling.webp"
import PokebowlTofu from "../../../assets/food/pokebowl/PokebowlTofu.webp"

import { MenuCategory } from "../../../types";


export const sweLunch: MenuCategory = {
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
      id: 6,
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
