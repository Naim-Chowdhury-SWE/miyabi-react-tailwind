interface HeaderProps {
  language: string;
}

const Header: React.FC<HeaderProps> = ({ language }) =>  {

  const getTitle = () => {
    return language === 'swedish' ? 'Välkommen till Miyabi' : 'Welcome to Miyabi';
  };

  const getDescription1 = () => {
    return language === 'swedish'
      ? 'Vi serverar spännande mat från det japanska köket under veckans alla dagar.'
      : 'We serve exciting food from the Japanese kitchen every day of the week.';
  };

  const getDescription2 = () => {
    return language === 'swedish'
      ? 'Allt från olika typer av Sushi till California Rolls till Yakiniku.'
      : 'Everything from various types of Sushi to California Rolls to Yakiniku.';
  };

  const getDescription3 = () => {
    return language === 'swedish'
      ? 'Kolla in vår nya meny för'
      : 'Check out our new menu for';
  };

  return (
    <header className="text-center font-cormorant text-white font-bold lg:text-3xl m-12">
      <h2 className="text-golden text-6xl mb-8">{getTitle()}</h2>
      <p className="my-2">{getDescription1()}</p>
      <p className="my-2">{getDescription2()}</p>
      <p className="my-2">
        {getDescription3()} <span className="text-golden text-5xl font-cormorant">2024</span>
      </p>
    </header>
  );
};

export default Header;