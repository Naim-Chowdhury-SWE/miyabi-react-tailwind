// menuData.tsx
import {Lunch} from "./Lunch";
import {Sushi} from "./Sushi";
import {Norimaki} from "./Norimaki";
import {Sashimi} from "./Sashimi";
import {Varmratter} from "./Varmratter";
import {Special} from "./Special";
import {Barn} from "./Barn";
import { MenuCategory } from "../../types";

export const Meny: MenuCategory[] = [Lunch, Sushi, Norimaki, Sashimi, Varmratter, Special, Barn];
