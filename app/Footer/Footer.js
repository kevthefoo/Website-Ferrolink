import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full flex flex-col justify-around items-center py-4 bg-stone-800">
            <div className="flex justify-center items-start w-full gap-10 mb-10">
                <div className="">
                    <p className="border-b-2 mb-4 text-center">Ferrolink</p>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/team">Our Team</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="">
                    <p className="border-b-2 mb-4 text-center">Product</p>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/products/hammers">Hammers</Link>
                            </li>
                            <li>
                                <Link href="/products/axes">Axes</Link>
                            </li>
                            <li>
                                <Link href="/products/accessories">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/gardening-tools">
                                    Gardening Tools
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="">
                    <p className="border-b-2 mb-4 text-center">Support</p>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Enquiry</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <span>©{year} Ferrolink, Inc. All rights reserved.</span>
        </footer>
    );
}
