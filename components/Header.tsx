import Link from "next/link";
import { Button } from "./ui/button";
//Componentes
import Nav from "./Nav";

const Header = () => (
    <header className="py-8 xl:py-12 text-black">
        <div className="container m-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    MG.
                </h1>
            </Link>

            {/* Navegador Web*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/btn">
                    <Button>|||</Button>
                </Link>
            </div>

            {/* Navegador Mobile */}
            <div className="xl:hidden">
                Nav Mobile
            </div>
        </div>
    </header>
);

export default Header;
