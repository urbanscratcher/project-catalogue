import Logo from "./feature/Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
      <header
        className="
      flex justify-between items-center px-3"
      >
        <Logo />
        <Navbar />
      </header>
  );
};

export default Header;
