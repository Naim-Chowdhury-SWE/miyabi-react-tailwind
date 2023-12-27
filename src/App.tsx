import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Lunch from "./components/Meny/Lunch/Lunch";
import Sushi from "./components/Meny/Sushi/Sushi";
import Norimaki from "./components/Meny/Norimaki/Norimaki";
import MenuComponent from "./components/Meny/Sushi/Test";
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
        <Header />
      <main>
        {/* <Lunch />
        <Sushi /> */}
        <div>
      {/* <h1 className="text-3xl font-bold text-center my-8 text-white">Sushi Restaurant Menu</h1> */}
      <MenuComponent />
    </div>
      </main>
        <Footer />
    </>
  )
}

export default App
