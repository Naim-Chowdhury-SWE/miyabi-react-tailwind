import logo from "../../data/logos";

const Navbar = () => {
  return (
    <div className="">
        <img src={logo.miyabitextredwhite} alt="Miyabi Logo" className="h-16 m-4 float-left" />
      <div className="flex justify-center">
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
      <img
          src={logo.fanred}
          alt="Side Menu button"
          className="rotate"
        />
    </div>
  )
}

export default Navbar