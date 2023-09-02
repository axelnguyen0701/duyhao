import Link from "next/link";

export default function Products() {
    const products = [0, 1, 2, 3, 4, 5];
    const renderedProducts = products.map((p, i) => (
        <div key={i} className="w-52 bg-slate-400 text-white h-64 mt-1"></div>
    ));
    return (
        <section id="products" className="w-full px-4 md:px-20 mt-10">
            <h2 className=" text-duy-hao-purple font-medium text-2xl">
                Những Sản Phẩm Nổi Bật
            </h2>
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-around p-2 mt-4">
                {renderedProducts}
            </div>
            <div className="text-center mt-8">
                <Link
                    href="/products"
                    className="rounded-lg border-2 py-1 px-4 text-duy-hao-purple border-duy-hao-purple border-2 hover:bg-duy-hao-purple hover:text-white"
                >
                    Xem Tất Cả
                </Link>
            </div>
        </section>
    );
}
