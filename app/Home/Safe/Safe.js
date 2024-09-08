import wew from "@/assets/materials/ferro/1.jpg";
import Image from "next/image";

export default function Safe() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1>Durability and Sasfety</h1>
            <div className="flex justify-around items-center w-full">
                <Image src={wew} alt="" height={500}></Image>
                <p className="w-1/2">
                    At Ferrolink, safety and durability are at the forefront of
                    our product design. Our hand tools are meticulously crafted
                    using high-quality materials and advanced CNC techniques to
                    ensure they withstand the toughest conditions and rigorous
                    use. Each tool undergoes stringent testing to meet and
                    exceed industry safety standards, providing you with peace
                    of mind during every project. Our ergonomic designs minimize
                    user fatigue and enhance control, further promoting safe
                    usage. Trust in Ferrolink for tools that not only deliver
                    exceptional performance but also prioritize your safety and
                    long-lasting reliability.
                </p>
            </div>
        </section>
    );
}
