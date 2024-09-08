"use client";

import Link from "next/link";
import "./productCatlog.css";
import wewe from "@/assets/products/Hammer/F-28.jpg";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Pagination from "./pagination";
import { usePathname } from "next/navigation";

export default function ProductCatlog() {
    const itemsPerPage = 6;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page") ?? 1;

    const data = [
        {
            id: 1,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 2,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 3,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 4,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 5,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 6,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 7,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 8,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 9,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 10,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 11,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 12,
            name: "FX-3878",
            img: wewe,
        },
        {
            id: 13,
            name: "FX-3878",
            img: wewe,
        },
    ];

    const dataLength = data.length;

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div className="catlog_container">
                {paginatedData.map((item) => (
                    <Link
                        key={item.id}
                        className="catlog_item"
                        href={`${pathname}/${item.name}`}
                    >
                        <Image
                            src={item.img}
                            alt="FX-3878"
                            width={200}
                            className="mb-4"
                        />
                        <h3>{item.name}</h3>
                    </Link>
                ))}
            </div>

            <Pagination dataLength={dataLength} productType="hammers" />
        </div>
    );
}
