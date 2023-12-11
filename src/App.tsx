import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Carousel from "./components/Carousel/Carousel"


const OPTIONS = {};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
function App() {


  return (
    <>
      <Navbar />
      <div className="">
        {/* <Header /> */}
        <section className="">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
      <h1 className="text-3xl font-bold underline text-center text-white">
      Hello world!
      </h1>
      <Footer />
    </>
  )
}

export default App
