import RisnudlarEntrecote from "../assets/food/RisnudlarEntrecote.webp";
import KycklingJapanskCurry from "../assets/food/KycklingJapanskCurry.webp";
import Yakisoba from "../assets/food/Yakisoba.webp";
import WokadKyckling from "../assets/food/WokadKyckling.webp";
import Karaage from "../assets/food/Karaage.webp";

const test = "Test";

export const Lunch = {
  name:"Lunch Meny",
  dishes: [
    {
      dishname: ["Måndag","Tisdag","Onsdag","Torsdag","Fredag"],
      types: ["Måndag","Tisdag","Onsdag","Torsdag","Fredag"],
      prices: [125],
      images: [RisnudlarEntrecote,WokadKyckling,KycklingJapanskCurry,Yakisoba, Karaage],
      description: ["Wokade Risnudlar med entrecote samt grönsaker","Wokad kyckling med ris samt grönsaker","Japansk Curry med kyckling, grönsaker och ris","Yakisoba (Wokade äggnudlar med entrecote)","Kyckling Karage (Friterad kyckling med ris samt sås)"],
    },
  ],
};
