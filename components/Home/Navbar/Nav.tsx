import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa"; 
import { navLinks } from "@/components/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-teal-500">
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* Logo */}
        <div className="text-black font-bold text-2xl sm:text-3xl">Logo</div>
          {/* Navlink */}
        <div className="hidden lg:flex flex-row items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-white hover:text-green-900 font-semibold transition-all duration-200">
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
            {/* Button code from https://devdojo.com/tailwindcss/buttons*/}
        <a
          href="#_"
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-indigo-200 hover:ring-offset-green-800 ease focus:outline-none">
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
            <FaShoppingBag className="mr-2" />
            Buy Now
          </span>
        </a>
        {/* Theme switch button */}
        {/* Burgur menu */}
        <HiBars3BottomRight  className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
      </div>
    </div>
  );
};

export default Nav;
