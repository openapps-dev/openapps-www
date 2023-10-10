import Image from "next/image";
import NavLink, { NavLinkProps } from "./nav-link";

export default function Navbar() {
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
    <div className="flex flex-row items-center py-2 w-full">
      <div className="w-1/3">
        <Image
          src="./openapps_banner.svg"
          alt="banner"
          width="175"
          height="50"
          className="p-2"
        />
      </div>

      <div className="flex flex-row justify-center gap-6 w-1/3">
        {links.map((link, index) => (
          <NavLink {...link} key={index} />
        ))}
      </div>
    </div>
  );
}
