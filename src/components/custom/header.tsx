import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
// import { ModeToggle } from "../ui/dark-mode-button";

const Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between container custom-container py-6 2xl:py-8">
                <div className="w-48">
                    <Image
                        src={"/oscc.svg"}
                        width={500}
                        height={500}
                        alt="oscc logo"
                    />
                </div>
                <div>
                    <ul className="flex items-center gap-x-5 font-medium">
                        <li>
                            <Link href={"/"}>Philosophy</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Vision</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Academia</Link>
                        </li>
                        <li>
                            <Link href={"/"}>FAQ</Link>
                        </li>
                        <li>
                            <Button variant={"default"}>
                                <Link href={"/"}>Login to My Account</Link>
                            </Button>
                        </li>
                        {/* <li>
                            <ModeToggle />
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
