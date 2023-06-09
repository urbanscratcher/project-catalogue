import { MENU } from "@/lib/constants";
import { convertCase } from "@/lib/util";
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
            <li className="hover:text-gray-400">{convertCase(MENU.ABOUT)}</li>
          </Link>
          <Link className="hover:text-gray-400" href="./projects">
            <li>{convertCase(MENU.PROJECTS)}</li>
          </Link>
          <Link className="hover:text-gray-400" href="./devlogs">
            <li>{convertCase(MENU.DEVLOGS)}</li>
          </Link>
          <Link className="hover:text-gray-400" href="./notes">
            <li>{convertCase(MENU.NOTES)}</li>
          </Link>
          <Link className="hover:text-gray-400" href="./personal">
            <li>{convertCase(MENU.PERSONAL)}</li>
          </Link>
          <Link className="hover:text-gray-400" href="./contact">
            <li>{convertCase(MENU.CONTACT)}</li>
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
