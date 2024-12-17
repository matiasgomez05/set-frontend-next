"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    return (
      <div key={ pathname }>
        <nav className="flex gap-8">
            { links.map((link, index) => {
                return <Link 
                href={ link.path } 
                key={ index } 
                className={ "text-blue-600 font-medium hover:text-black" }
            >
              <motion.button 
                className={ link.path == pathname? "text-black border-black border-b-2" : "" }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}> 
                  {link.name} 
              </motion.button>
            </Link>
            })}
        </nav>
      </div>
    );
};

export default Nav;
