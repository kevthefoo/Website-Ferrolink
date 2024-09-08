import ProductCatlog from "../../Component/productCatlog/productCatlog";

export default function Hammers() {
    return (
        <section className="flex flex-col justify-center items-center ">
            <h1>Tool Handles</h1>
            <div className="border-2 border-red-700 p-8 w-full">
                <ProductCatlog />
            </div>
        </section>
    );
}
