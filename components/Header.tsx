import Link from "next/link";
//Componentes
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => (
    <header className="py-8 xl:py-12 mx-6 bg-background">
        <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl text-primary font-semibold">
                    MG.
                </h1>
            </Link>

            {/* Navegador Web */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
            </div>

            {/* Navegador Mobile */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
);

export default Header;
