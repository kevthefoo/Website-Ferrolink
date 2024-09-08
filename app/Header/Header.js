import Link from "next/link";

import "./header.css";
import Image from "next/image";
import logo from "@/assets/materials/logo.png";

export default function Header() {
    return (
        <header className="h-20 w-full flex justify-around items-center py-4 bg-stone-800">
            <Image className="" src={logo} height={50} alt="logo_image" />
            <nav className="navbar__container">
                <ul className="flex justify-center items-center gap-4">
                    <li className="hover:text-gray-400">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="/products">Products</Link>
                    </li>

                    <li className="hover:text-gray-400">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="hover:text-gray-400">
                        <Link href="/team">Team</Link>
                    </li>

                    <li className="hover:text-gray-400">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
