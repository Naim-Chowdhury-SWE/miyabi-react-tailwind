import logo from "../../data/logos";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import SmoothScroll from "../ScrollLink/ScrollLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white font-opensans font-semibold lg:text-lg flex flex-col items-center border-2 border-violet-600">
      <div className="container border-2 border-white">
      <img src={logo.logo3} alt="Miyabi Logo" className="mx-8 lg:scale-50 border-2 border-green-600" />
      
        <address id="contact" className="flex flex-col-reverse md:justify-between md:flex-row m-8 lg:mx-12 xl:mx-40 lg:px-10 xl:px-24 border-2 border-yellow-400">
          <section className="border-2 border-green-400 container">
            <a
              href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
              target="_blank"
            rel="noreferrer"
            >
              <FaLocationDot style={{ marginRight: "0.5em" }} />
              Kyrkvägen, Hersbyholms Stationshus, Lidingö
            </a>
            <a href="tel:+46763043985">
              <BsTelephoneFill
                style={{
                  marginTop: "2em",
                  marginRight: "0.5em",
                }}
              />
              076-304 39 85
            </a>
          </section>
       

        <section className="border-2 border-pink-700 min-w-fit">
            <p className="pb-4 lg:text-2xl text-center">Öppettider</p>
          <div className="flex flex-row justify-around md:gap-4 lg:gap-12">
            <div className="border-2 border-blue-400">
            <p>Måndag-Lördag</p>
            <p>
              <time>11:00 - 21:00</time>
              </p>
            </div>
            <div className="border-2 border-blue-400">
            <p className="">Söndag</p>
            <p>
              <time>12:00 - 21:00</time>
              </p>
              </div>
            </div>
          </section>
        </address>
        </div>

      <section className=" bg-red-800 w-full text-black font-bold flex flex-col items-center">
        <p className="mt-2">
          OBS! Sista Beställning tas kl <time>20:30</time>
        </p>
        <SmoothScroll targetId="Hem">
          <div>
            <p className="mt-2 p-2 border-4 border-red-900 rounded-lg hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer">Till Toppen</p>
            </div>
          </SmoothScroll>
        <p className="mt-2">{currentYear} &copy; Miabi AB</p>
      </section>
    </footer>
  )
}

export default Footer