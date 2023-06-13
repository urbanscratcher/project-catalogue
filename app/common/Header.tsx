import Logo from "./feature/Logo";
import Navbar from "./Navbar";

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
