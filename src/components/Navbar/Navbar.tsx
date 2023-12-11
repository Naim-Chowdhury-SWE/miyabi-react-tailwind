import logo from "../../data/logos";
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };
  return (
    <nav className="bg-black bg-opacity-80 w-full fixed z-50 top-0">
        <img src={logo.miyabitextredwhite} alt="Miyabi Logo" className="h-24 m-auto float-left" />
          <img src={logo.fanred} alt="Side Menu button" className="h-12 m-6 p-auto float-right lg:hidden cursor-pointer" onClick={toggleDropdown} />
      <div className="justify-center hidden lg:flex">
        <ul className="text-white flex items-center mx-4">
          <li className="m-8">Meny</li>
          <li className="m-8">Kontakta Oss</li>
          <li><a
          href="https://app.fasterorder.se/menu/sv/37"
          target="_blank"
            rel="noreferrer"
            className="m-8"
        >Beställ Takeaway</a></li>
          <li><a
          href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
          target="_blank"
            rel="noreferrer"
            className="m-8"
        >Hemleverans med Wolt</a></li>
        </ul>
      </div>
      {isDropdownOpen && (
        <div className="w-full z-40 overflow-auto">
          <ul className="text-center text-white">
              <li className="">
                <a href="tel:+46763043985">Ring och Beställ</a>
              </li>
              <li className="my-2">
                <a
                  href="https://app.fasterorder.se/menu/sv/37"
                  target="_blank"
                  rel="noreferrer"
                >Beställ Takeaway via vår App</a>
              </li>
              <li className="my-2">
                <a
                  href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi"
                  target="_blank"
                  rel="noreferrer"
                >Hemleverans med Wolt
                </a>
              </li>
              <li className="my-2">Hem</li>
              <li className="my-2">Meny</li>
              <li className="my-2">Contact</li>
            </ul>
        </div>
        )}
    </nav>
  )
}

export default Navbar