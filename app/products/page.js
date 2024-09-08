"use client";

import Link from "next/link";
import "./products.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

import g from "@/assets/materials/ggg.png";
import q from "@/assets/materials/qa.png";
import d from "@/assets/materials/ddd.png";
import b from "@/assets/materials/bbb.png";
import r from "@/assets/materials/rr.png";
import v from "@/assets/materials/vvvvv.png";

export default function Products() {
    const pathname = usePathname();
    return (
        <>
            <section className="flex justify-center items-end product_hero">
                <Link
                    href="/proudcts"
                    className="border-2 font-medium px-4 py-2 rounded-xl hover:bg-slate-700"
                >
                    Check
                </Link>
            </section>
            <section className="text-center justify-start pt-16 ">
                <h1>Catogories</h1>
                <div className="grid grid-cols-4 gap-8">
                    <Link
                        className="flex flex-col justify-center items-center py-4 px-4 border-2  rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/hammers`}
                    >
                        <Image
                            src={g}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Hammer</p>
                    </Link>

                    <Link
                        className="flex flex-col justify-center items-center border-2 py-4 px-4 rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/axes`}
                    >
                        <Image
                            src={q}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Axe</p>
                    </Link>

                    <Link
                        className="flex flex-col justify-center items-center border-2 py-4 px-4 rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/shovels`}
                    >
                        <Image
                            src={d}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Shovel</p>
                    </Link>

                    <Link
                        className="flex flex-col justify-center items-center border-2 py-4 px-4 rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/gardening-tools`}
                    >
                        <Image
                            src={b}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Gardening Tools</p>
                    </Link>

                    <Link
                        className="flex flex-col justify-center items-center border-2 py-4 px-4 rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/tool_handles`}
                    >
                        <Image
                            src={r}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Tool Handles</p>
                    </Link>

                    <Link
                        className="flex flex-col justify-center items-center border-2 py-4 px-4 rounded-3xl hover:bg-slate-800"
                        href={`${pathname}/accessories`}
                    >
                        <Image
                            src={v}
                            alt="hammer"
                            className="rounded-full mb-4"
                            width={250}
                        />
                        <p>Accessories</p>
                    </Link>
                </div>
            </section>
        </>
    );
}
