"use client";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "header" // untuk scroll react-scroll tidak menggunakan #
  },
  {
    name: "main",
    path: "main"
  },
  {
    name: "footer",
    path: "footer"
  }
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
   return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          
            <Link
            to={link.path}
            key={index}
            smooth={true}
            duration={500} 
            className={`${
              link.path === pathname ? "text-blue-500 border-b-4 border-blue-500" : ""
            } capitalize font-medium hover:text-blue-500 transition-all`}
          >
          {link.name}
          </Link>
          
          
        );
      })}
    </nav>
  );
};

export default Nav;
