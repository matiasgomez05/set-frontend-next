"use client";
import Link from "next/link";
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
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

const MobileNav = () => {
    const pathname = usePathname();
    return (
      <Sheet>
        <SheetTitle>
          <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px]" />
          </SheetTrigger>
        </SheetTitle>
        <SheetContent className="flex justify-center items-center">
        <div>
          <nav className="flex flex-col justify-center items-center">
          { links.map((link, index) => {
            return <Link 
                href={ link.path } 
                key={ index } 
                className={ "text-blue-600 font-medium hover:text-black mb-5 transition-all" }
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
        </SheetContent>
      </Sheet>
    );
};

export default MobileNav;
