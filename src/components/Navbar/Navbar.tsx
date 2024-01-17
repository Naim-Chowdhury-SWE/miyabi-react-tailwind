import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../data/logos";
import { useState, useEffect } from 'react';
import SmoothScroll from "../ScrollLink/ScrollLink";
import { Meny } from "../../data/Meny/Meny";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isDropdownEnabled, setIsDropdownEnabled] = useState(true);

  const toggleDropdown = () => {
    setIsContactDropdownOpen(false);
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleContactDropdown = () => {
    setIsDropdownOpen(false);
    setIsContactDropdownOpen(prevState => !prevState);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };
  const handleScroll = () => {
    closeDropdowns();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    closeDropdowns();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownEnabled(window.innerWidth <= 1024);
      closeDropdowns();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-red-800 w-full fixed z-50 top-0 p-2">
        <img src={logo.miyabitextblack} alt="Miyabi Logo" className="h-12 lg:h-24 m-auto float-left" />
          <img src={logo.fanblack} alt="Side Menu button" className="h-12 lg:m-6 p-auto float-right lg:hidden cursor-pointer" onClick={toggleDropdown} />
      <div className="justify-center hidden lg:flex p-4">
      <ul className="flex items-center mx-4 text-black font-bold">
        <div className="hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
        <li className="m-4" onClick={toggleDropdown}>
          Meny
          <ul className={` ${isDropdownOpen ? 'block' : 'hidden'}`}>
            {Meny.map((category) => (
              <li key={category.name}>
                <SmoothScroll targetId={category.id} offset={"8rem"}  onClick={closeDropdowns}>
                  {category.name}
                </SmoothScroll>
              </li>
            ))}
          </ul>
              </li>
          </div>
          <div className="hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
            <li className="m-4">
            <SmoothScroll targetId={"contact"}>
            Kontakt
          </SmoothScroll>
            </li>
          </div>
          <div className="hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
          <li className="m-4"><a
          href="https://app.fasterorder.se/menu/sv/37"
          target="_blank"
            rel="noreferrer"
            >Beställ Takeaway</a></li>
          </div>
          <div className="hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer rounded-lg mx-2">
          <li className="m-4"><a
          href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
          target="_blank"
            rel="noreferrer"
            >Hemleverans med Wolt</a></li>
            </div>
        </ul>
      </div>
      {isDropdownOpen && isDropdownEnabled && (
        <div className="w-full z-40 overflow-auto" onClick={handleLinkClick}>
          <ul className="text-center text-black font-semibold mt-8">
              <li className="hover:bg-red-900 hover:text-white transition duration-300">
                <a href="tel:+46763043985">Ring och Beställ</a>
              </li>
              <li className="my-2 hover:bg-red-900 hover:text-white transition duration-300">
                <a
                  href="https://app.fasterorder.se/menu/sv/37"
                  target="_blank"
                  rel="noreferrer"
                >Beställ Takeaway via vår App</a>
              </li>
              <li className="my-2 hover:bg-red-900 hover:text-white transition duration-300">
                <a
                  href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
                  target="_blank"
                  rel="noreferrer"
                >Hemleverans med Wolt
                </a>
              </li>
              <br />
            <li className="my-2 hover:bg-red-900 hover:text-white transition duration-300 cursor-pointer">Meny</li>
            <br />
            </ul>
        </div>
      )}
      {isDropdownOpen && isDropdownEnabled && (
          <p className="my-2 hover:bg-red-900 font-semibold text-center hover:text-white transition duration-300 cursor-pointer" onClick={toggleContactDropdown}>Kontakt</p>
      )}
       {isContactDropdownOpen && isDropdownEnabled && (
        <div className="text-black font-bold w-full z-40 overflow-auto p-4" onClick={handleLinkClick}>
          <address className="bg-red-800 w-full lg:w-1/5 lg:p-4">
            <a className="flex flex-col items-center" href="tel:+46763043985">
            <BsTelephoneFill />
              <p className="top-4">076-304 39 85</p>
            </a>
            <a
              className="flex flex-col items-center mt-4"
              href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot />
              <p>Kyrkvägen, Hersbyholms Stationshus, Lidingö</p>
            </a>
          </address>
        </div>
          )}
    </nav>
  )
}

export default Navbar