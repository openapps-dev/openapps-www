import Image from "next/image";
import NavLink, { NavLinkProps } from "./nav-link";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false)

  const links: NavLinkProps[] = [
    {
      content: "About",
      url: "/about",
    },
    {
      content: "Info",
      url: "",
    },
    {
      content: "Contact",
      url: "",
    },
  ];

  return (

    <nav className="bg-white border-gray-200 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="./openapps_banner.svg"
            alt="banner"
            width="175"
            height="50"
            className="p-2"
          />
          <span className="self-center hidden">Openapps</span>
        </a>
        <button onClick={() => setShow(!show)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={"md:w-auto w-full md:block" + (!show && " hidden")} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 border rounded-lg md:border-none">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink {...link} key={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
