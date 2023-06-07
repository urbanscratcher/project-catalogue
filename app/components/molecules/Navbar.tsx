import Link from "next/link";
import { BiGlobe } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul
          className="flex gap-5 items-center
        font-inconsolata"
        >
          <Link href="./about">
            <li className="hover:text-gray-400">About</li>
          </Link>
          <Link className="hover:text-gray-400" href="./projects">
            <li>Projects</li>
          </Link>
          <Link className="hover:text-gray-400" href="./devlogs">
            <li>Devlogs</li>
          </Link>
          <Link className="hover:text-gray-400" href="./notes">
            <li>Notes</li>
          </Link>
          <Link className="hover:text-gray-400" href="./personal">
            <li>Personal</li>
          </Link>
          <Link className="hover:text-gray-400" href="./contact">
            <li>Contact</li>
          </Link>
          <li className="cursor-pointer hover:text-gray-400">
            <BiGlobe />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
