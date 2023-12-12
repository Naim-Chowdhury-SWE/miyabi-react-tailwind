import BlandadSushi7 from "../../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi8 from "../../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi9 from "../../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi11 from "../../../assets/food/BlandadSushiSmall.webp";
import BlandadSushi13 from "../../../assets/food/BlandadSushi.webp";
import BlandadSushi14 from "../../../assets/food/BlandadSushi.webp";
import BlandadSushi16 from "../../../assets/food/BlandadSushi.webp";
import BlandadSushi20 from "../../../assets/food/BlandadSushi.webp";

const blandadSushi = [
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

const Sushi = () => {
    console.log(blandadSushi);
  return (
      <div>
          <h2 className="text-golden text-center font-cormorant font-extrabold text-6xl">Sushi Meny</h2>
    </div>
  )
}

export default Sushi