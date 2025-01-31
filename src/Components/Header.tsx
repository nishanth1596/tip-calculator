import logoImg from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="text-3D6666 mt-[3.125rem] mb-[2.55rem] md:mt-[10.19rem] md:mb-[5.47rem]">
      <h1 className="sr-only">Tip Calculator</h1>
      <img src={logoImg} alt="Splitter Logo" />
    </header>
  );
};

export default Header;
