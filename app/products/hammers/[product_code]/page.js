import Image from 'next/image';
import wewe from '@/assets/products/Hammer/F-28.jpg'



export default function singleProductPage({ params }) {
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

    const product = data.find(item => item.name === params.product_code);

    return (
        <section className='flex justify-center items-center border-2 border-red-400'>
            <div className="w-full flex justify-around items-center border-2 border-blue-500">
                <Image src={product.img} alt={product.name} />
                <div>
                    <p>Name: {product.name}</p>
                    <p>Weight: {product.weight}</p>
                    <p>Dimension: {product.dimension}</p>
                    <p>Name: {product.name}</p>
                    <p>Name: {product.name}</p>
                </div>
            </div>
        </section>
    );
}