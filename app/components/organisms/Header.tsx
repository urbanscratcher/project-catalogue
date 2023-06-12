import Logo from "../molecules/Logo";
import Navbar from "../molecules/Navbar";

const Header = () => {
  return (
    <>
      <header
        className="
      flex justify-around items-center
      p-3"
      >
        <Logo />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
