// LanguageDecider.tsx

// SWEDISH MENY
import { sweLunch } from "./Swedish/Lunch";
import { sweSushi } from "./Swedish/Sushi";
import { sweNorimaki } from "./Swedish/Norimaki";
import { sweSashimi } from "./Swedish/Sashimi";
import { swePokebowl } from "./Swedish/Pokebowl";
import { sweVarmratter } from "./Swedish/Varmratter";
import { sweSpecial } from "./Swedish/Special";
import { sweBarn } from "./Swedish/Barn";

//ENGLISH MENY

import { engLunch } from "./English/Lunch";
import { engSushi } from "./English/Sushi";
import { engNorimaki } from "./English/Norimaki";
import { engSashimi } from "./English/Sashimi";
import { engPokebowl } from "./English/Pokebowl";
import { engVarmratter } from "./English/Varmratter";
import { engSpecial } from "./English/Special";
import { engBarn } from "./English/Barn";

import { MenuCategory } from "../../types";



const languages = {
    swedish: [sweLunch, sweSushi, sweNorimaki, sweSashimi, swePokebowl, sweVarmratter, sweSpecial, sweBarn],
    english: [engLunch, engSushi,engNorimaki, engSashimi, engPokebowl, engVarmratter, engSpecial, engBarn],
    french: [],
    spanish: [],
    japanese: [],
  };
  
  type LanguageKey = "swedish" | "english" | "french" | "spanish" | "japanese";

  type languages = {
    [key in LanguageKey]: MenuCategory[];
  };
  
  let currentLanguage: LanguageKey = "swedish";
  

  const toggleLanguage = () => {
    if (currentLanguage === "swedish") {
      currentLanguage = "english";
    } else {
      currentLanguage = "swedish";
    }
  };
  
  const getMeny = () => languages[currentLanguage];
  
  export { languages, getMeny, currentLanguage, toggleLanguage };