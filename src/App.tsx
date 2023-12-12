import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Lunch from "./components/Meny/Lunch/Lunch";
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
      <main>
        <Header />
      </main>
        <Footer />
    </>
  )
}

export default App
