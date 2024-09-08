import Image from "next/image";
import z from "@/assets/materials/z.png";
import "./services.css";
import cnc from "@/assets/materials/cnc2.png";
import x from "@/assets/materials/x.png";

export default function Services() {
    return (
        <section className="flex flex-col justify-start pt-16 items-center ">
            <h1>Services</h1>
            <div class="flex items-center justify-between w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <Image src={z} alt="z" width={300} class="rounded-full mb-8" />
                    <span className="text-xl">Forging</span>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <Image src={cnc} alt="z" width={300} class="rounded-full mb-8" />
                    <span className="text-xl">CNC</span>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <Image src={x} alt="x" width={300} class="rounded-full mb-8" />
                    <span className="text-xl">Heat treatment</span>
                </div>
            </div>
        </section>
    );
}
