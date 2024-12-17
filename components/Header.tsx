import Link from "next/link";
import { Button } from "./ui/button";
//Componentes
import Nav from "./Nav";

const Header = () => (
    <header className="py-8 xl:py-12 text-black">
        <div className="m-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    MG.
                </h1>
            </Link>

            {/* Navegador Web */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
            </div>

            {/* Navegador Mobile */}
            <div className="xl:hidden">
                <span className="mr-4">Nav Mobile</span> 
                <Link href="#">
                    <Button>|||</Button>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;
