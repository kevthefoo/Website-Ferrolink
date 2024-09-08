import Link from "next/link";
import Image from "next/image";

export default function singleProductPage({ params }) {
    const { product_code } = params;
    const imagePath = `/assets/products/Hammer/${product_code}.jpg`

    return (
        <section className="flex flex-col justify-start pt-16 items-center border-2 border-red-500">
            <h1 className="text-center">{product_code}</h1>
            <div className="flex w-full justify-around items-center border-2 border-blue-400">
                <Image src={imagePath} width={300} height={300} alt="xx" />
                <div>
                    <h2>Weight</h2>
                    <p>100kg</p>
                    <h2>Dimension</h2>
                    <p>12x12x12</p>
                </div>
            </div>
        </section>
    );
}
