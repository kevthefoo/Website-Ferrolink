import ProductCatlog from "../../Component/productCatlog/productCatlog";

export default function Gardening() {
    return (
        <section className="flex flex-col justify-center items-center ">
            <h1>Gardening Tools</h1>
            <div className="border-2 border-red-700 p-8 w-full">
                <ProductCatlog />
            </div>
        </section>
    );
}
