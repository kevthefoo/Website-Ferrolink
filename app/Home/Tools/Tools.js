import Image from "next/image";

import wew from "@/assets/materials/ferro/3.jpg";

export default function Tools() {
    return (
        <section className=" flex flex-col justify-center items-center">
            <h1>Everything You Need</h1>
            <div className="flex justify-around items-center w-full">
                <p className="w-1/2">
                    At Ferrolink, we offer a diverse range of hand tools
                    designed to meet the needs of professionals and hobbyists
                    alike. Our collection includes everything from precision
                    screwdrivers and pliers to versatile wrenches and hammers,
                    each crafted with meticulous attention to detail. Utilizing
                    cutting-edge CNC technology, our tools deliver unparalleled
                    accuracy and durability, ensuring superior performance in
                    every use. Whether you are working on intricate projects or
                    demanding tasks, our tools provide the reliability and
                    precision you need to achieve outstanding results. Discover
                    the difference of expertly engineered tools at Ferrolink.
                </p>
                <Image src={wew} alt="" height={500}></Image>
            </div>
        </section>
    );
}
