import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Meny from "./components/Meny/Meny";
import Footer from "./components/Footer/Footer"
import Carousel from "./components/Carousel/Carousel"
import {EmblaCarouselProps} from "./types"

const OPTIONS: EmblaCarouselProps['options'] = {
  loop: true,
  startIndex: 0,
  draggable: true,
  speed: 500,
};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
function App() {


  return (
    <>
      <Navbar />
      <div className="">
        <section className="">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
        <Header />
      <main>
      <Meny />
      </main>
        <Footer />
    </>
  )
}

export default App
