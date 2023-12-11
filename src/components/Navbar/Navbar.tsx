import logo from "../../data/logos";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 w-full fixed z-50 top-0">
        <img src={logo.miyabitextredwhite} alt="Miyabi Logo" className="h-16 m-4 float-left" />
          <img src={logo.fanred}alt="Side Menu button"className="h-16 m-4 float-right lg:hidden"/>
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
    </nav>
  )
}

export default Navbar