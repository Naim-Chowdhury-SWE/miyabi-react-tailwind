import LaxSushi from "../assets/food/sushi/LaxSushi.webp";
import CaliforniaRollSpecial from "../assets/food/norimaki/CaliforniaRollSpecial.webp";
import BentoDeluxe from "../assets/food/varmratter/BentoDeluxe.webp";
import GrillLaxSushi from "../assets/food/sushi/GrillLaxSushi.webp";
import WokadKyckling from "../assets/food/varmratter/WokadKyckling.webp";
import FamiljeSushiMedium from "../assets/food/sushi/FamiljeSushi40.webp";

export const images = [
  {
    src: LaxSushi,
    alt: "Lax Sushi",
  },
  {
    src: CaliforniaRollSpecial,
    alt: "California Roll Special",
  },
  {
    src: BentoDeluxe,
    alt: "Bento Deluxe",
  },
  {
    src: GrillLaxSushi,
    alt: "Grillad Lax Sushi",
  },
  {
    src: WokadKyckling,
    alt: "Wokad Kyckling",
  },
  {
    src: FamiljeSushiMedium,
    alt: "Familje Sushi",
  },
];

const carouselData = (index: number) => images[index % images.length];


export default carouselData;