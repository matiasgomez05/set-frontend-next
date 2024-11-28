"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Acerca de",
    path: "/about",
  },
  {
    name: "Otro",
    path: "/otro",
  },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            { links.map((link, index) => {
                return <Link 
                href={ link.path } 
                key={ index } 
                className={`${ link.path == pathname && "border-black border-b-2" } text-blue-600 font-medium hover:text-black`}
            > 
                {link.name} 
            </Link>
            })}
        </nav>
    );
};

export default Nav;
