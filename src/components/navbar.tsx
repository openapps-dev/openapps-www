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
    <div className="flex flex-row justify-center gap-5 py-2 w-full">
      {links.map((link, index) => (
        <NavLink {...link} key={index} />
      ))}
    </div>
  );
}
