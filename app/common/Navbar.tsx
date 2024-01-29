import { MENU } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  return (
      <nav>
        <ul
          className="flex gap-5 items-center"
        >
          <Link href="./about">
            <li className="hover:text-gray-700">{MENU.ABOUT}</li>
          </Link>
          <Link className="hover:text-gray-700" href="./contact">
            <li>{MENU.CONTACT}</li>
          </Link>
        </ul>
      </nav>
  );
};

export default Navbar;
