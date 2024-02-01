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



const languages = {
    swedish: [sweLunch, sweSushi, sweNorimaki, sweSashimi, swePokebowl, sweVarmratter, sweSpecial, sweBarn],
    english: [engLunch, engSushi,engNorimaki, engSashimi, engPokebowl, engVarmratter, engSpecial, engBarn],
    french: [],
    spanish: [],
    japanese: [],
  };
  
  let currentLanguage = "swedish";

  const toggleLanguage = () => {
    if (currentLanguage === "swedish") {
      currentLanguage = "english";
    } else {
      currentLanguage = "swedish";
    }
  };
  
  const getMeny = () => languages[currentLanguage];
  
  export { languages, getMeny, currentLanguage, toggleLanguage };

/* import {Lunch} from "./Lunch";
import {Sushi} from "./Sushi";
import {Norimaki} from "./Norimaki";
import {Sashimi} from "./Sashimi";
import {Pokebowl} from "./Pokebowl";
import {Varmratter} from "./Varmratter";
import {Special} from "./Special";
import { Barn } from "./Barn"; */

/* import { MenuCategory } from "../../types";

const swedishMeny: MenuCategory[] = [sweLunch, sweSushi, sweNorimaki, sweSashimi, swePokebowl, sweVarmratter, sweSpecial, sweBarn];
const englishMeny: MenuCategory[] = [engLunch, engSushi, engNorimaki, engSashimi, engPokebowl, engVarmratter, engSpecial, engBarn]; */