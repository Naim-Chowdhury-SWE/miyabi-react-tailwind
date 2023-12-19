

const varmratterData = [
  {
    dishname: "Yakiniku",
    types: ["Normal", "Stor"],
    prices: [123, 143],
    images: [Yakiniku, Yakiniku],
    description: "Strimlad Entrecote, serveras med ris",
  },
  {
    dishname: "Yakitori",
    types: ["Normal", "Stor"],
    prices: [123, 143],
    images: [Yakitori, Yakitori],
    description: "Kycklingspett med yakitorisås, serveras med ris",
  },
  {
    dishname: "Yakiniku + 5 bitar sushi",
    types: [],
    prices: [159],
    images: [placeholderFood],
    description: "Strimlad Entrecote, serveras med ris samt med 5 bitar blandad sushi",
  },
  {
    dishname: "Bentolåda",
    types: [],
    prices: [149],
    images: [Bento],
    description: "Yakiniku, Yakitori (2 kycklingspett) samt Sushi (2 rullar, 1 lax, 1 räka)",
  },
  {
    dishname: "Miyabi Bento",
    types: [],
    prices: [165],
    images: [BentoMiyabi],
    description: "Yakiniku, Yakitori, Tempura (2st friterade jätträkor) samt Sushi (1 lax, 1 räka, 1 )",
  },
  {
    dishname: "Bento Deluxe",
    types: [],
    prices: [185],
    images: [BentoDeluxe],
    description: "Yakiniku, Yakitori, Tempura, Gyoza (2st) samt Sushi (1 lax, 1 räka, 1 tuna alt valfritt)",
  },
  {
    dishname: "Bento Gyoza",
    types: [],
    prices: [185],
    images: [BentoGyoza],
    description: "Yakiniku, Yakitori och Gyoza (2st)",
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
    images: [placeholderFood, placeholderFood],
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
    dishname: "Wokade räkor med grönsaker",
    types: [],
    prices: [149],
    images: [WokadRäkor],
    description: "Serveras med ris eller nudlar",
  },
  {
    dishname: "Wokad kyckling med grönsaker",
    types: [],
    prices: [145],
    images: [WokadKyckling],
    description: "Serveras med ris eller nudlar",
  },
  {
    dishname: "Wokad biff med grönsaker",
    types: [],
    prices: [145],
    images: [placeholderFood],
    description: "Serveras med ris eller nudlar",
  },
  {
    dishname: "Tempura",
    types: [],
    prices: [150],
    images: [placeholderFood],
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
    dishname: "Stekt Ris med Entrecote",
    types: [],
    prices: [149],
    images: [placeholderFood],
    description: "Grönsaker samt sallad ingår",
  },
  {
    dishname: "Stekt Ris med Kyckling",
    types: [],
    prices: [149],
    images: [placeholderFood],
    description: "Grönsaker samt sallad ingår",
  },
  {
    dishname: "Stekt Ris med Räkor",
    types: [],
    prices: [149],
    images: [placeholderFood],
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
    images: [placeholderFood, placeholderFood],
    description: "Serveras med ris sallad samt sås",
  },
  {
    dishname: "Uddon Entrecote",
    sizes: [],
    prices: [145],
    images: [UdonEntrecote],
    description: "Nudelsoppa gjord på Risnudlar, grönsaker samt entrecote",
  },
  {
    dishname: "Uddon Tempura",
    sizes: [],
    prices: [145],
    images: [UdonTempura],
    description: "Nudelsoppa gjord på Risnudlar grönsaker samt friterade grönsaker",
  },
  {
    dishname: "Uddon Vegetarisk",
    sizes: [],
    prices: [145],
    images: [UdonVegetarisk],
    description: "Nudelsoppa gjord på Risnudlar samt grönsaker",
  },
  {
    dishname: "Uddon Gyoza",
    sizes: [],
    prices: [145],
    images: [UdonGyoza],
    description: "Nudelsoppa gjord på Risnudlar, grönsaker samt Gyoza (Kött eller Veg)",
  },
  {
    dishname: "Ramen Kyckling",
    sizes: [],
    prices: [145],
    images: [placeholderFood],
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
  },
  {
    dishname: "Ramen Räka",
    sizes: [],
    prices: [145],
    images: [RamenRäka],
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
  },
];


/* const Varmratter = [
  {
    title: "Yakiniku Normal",
    description: "Strimlad Entrecote, serveras med ris",
    price: "123kr",
    image: Yakiniku,
  },
  {
    title: "Yakiniku Stor",
    description: "Strimlad Entrecote, serveras med ris",
    price: "143kr",
    image: Yakiniku,
  },
  {
    title: "Yakitori Normal",
    description: "5 st Kycklingspett med yakitorisås, serveras med ris",
    price: "123kr",
    image: Yakitori,
  },
  {
    title: "Yakitori Stor",
    description: "7 st Kycklingspett med yakitorisås, serveras med ris",
    price: "143kr",
    image: Yakitori,
  },
  {
    title: "Yakiniku + 5 bitar sushi",
    description:
      "Strimlad Entrecote, serveras med ris samt med 5 bitar blandad sushi",
    price: "159kr",
    image: placeholderFood,
  },
  {
    title: "Bentolåda",
    description:
      "Yakiniku, Yakitori (2 kycklingspett) samt Sushi (2 rullar, 1 lax, 1 räka)",
    price: "149kr",
    image: Bento,
  },
  {
    title: " Miyabi Bento",
    description:
      "Yakiniku, Yakitori, Tempura (2st friterade jätträkor) samt Sushi (1 lax, 1 räka, 1 )",
    price: "165kr",
    image: BentoMiyabi,
  },
  {
    title: "Bento Deluxe",
    description:
      "Yakiniku, Yakitori, Tempura, Gyoza (2st) samt Sushi (1 lax, 1 räka, 1 tuna alt valfritt)",
    price: "185kr",
    image: BentoDeluxe,
  },
  {
    title: "Bento Gyoza",
    description: "Yakiniku, Yakitori och Gyoza (2st)",
    price: "185kr",
    image: BentoGyoza,
  },
  {
    title: "Gyoza 6 Bitar",
    description:
      "6 bitar blandfärsfyllda degknyten som serveras med ris och sås",
    price: "118kr",
    image: Gyoza,
  },
  {
    title: "Gyoza 8 Bitar",
    description:
      "8 bitar blandfärsfyllda degknyten som serveras med ris och sås",
    price: "138kr",
    image: Gyoza,
  },
  {
    title: "Vegetarisk Gyoza 6 Bitar",
    description: "6 bitar vegetariska degknyten som serveras med ris och sås",
    price: "118kr",
    image: placeholderFood,
  },
  {
    title: "Vegetarisk Gyoza 8 Bitar",
    description: "6 bitar vegetariska degknyten som serveras med ris och sås",
    price: "138kr",
    image: placeholderFood,
  },
  {
    title: "Yakisoba",
    description: "Wokad äggnudlar med entrecote, grönsaker",
    price: "149kr",
    image: Yakisoba,
  },
  {
    title: "Wokade räkor med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "149kr",
    image: WokadRäkor,
  },
  {
    title: "Wokad kyckling med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "145kr",
    image: WokadKyckling,
  },
  {
    title: "Wokad biff med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "145kr",
    image: placeholderFood,
  },
  {
    title: "Tempura",
    description: "Friterade jätteräkor med grönsaker och ris",
    price: "150kr",
    image: placeholderFood,
  },
  {
    title: "Karaage",
    description: "Friterade kycklingbitar med ris samt sås",
    price: "150kr",
    image: Karaage,
  },
  {
    title: "Stekt Ris med Entrecote",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: placeholderFood,
  },
  {
    title: "Stekt Ris med Kyckling",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: placeholderFood,
  },
  {
    title: "Stekt Ris med Räkor",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: placeholderFood,
  },
  {
    title: "Lax Teriyaki",
    description: "Stekt Lax med wokade grönsaker, teriyakisås samt ris",
    price: "150kr",
    image: Laxteriyaki,
  },
  {
    title: "Vegetariska Vårrullar 7 bitar",
    description: "Serveras med ris sallad samt sås",
    price: "110kr",
    image: placeholderFood,
  },
  {
    title: "Vegetariska Vårrullar 10 Bitar",
    description: "Serveras med ris sallad samt sås",
    price: "125kr",
    image: placeholderFood,
  },
];

const Soppor = [
  {
    title: "Uddon Entrecote",
    description: "Nudelsoppa gjord på Risnudlar, grönsaker samt entrecote",
    price: "145kr",
    image: UdonEntrecote,
  },
  {
    title: "Uddon Tempura",
    description:
      "Nudelsoppa gjord på Risnudlar grönsaker samt friterade grönsaker",
    price: "145kr",
    image: UdonTempura,
  },
  {
    title: "Uddon Vegetarisk",
    description: "Nudelsoppa gjord på Risnudlar samt grönsaker",
    price: "145kr",
    image: UdonVegetarisk,
  },
  {
    title: "Uddon Gyoza",
    description:
      "Nudelsoppa gjord på Risnudlar, grönsaker samt Gyoza (Kött eller Veg)",
    price: "145kr",
    image: UdonGyoza,
  },
  {
    title: "Ramen Kyckling",
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
    price: "145kr",
    image: placeholderFood,
  },
  {
    title: "Ramen Räka",
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
    price: "145kr",
    image: RamenRäka,
  },
];

export default { VarmratterMeny, Soppor };
 */