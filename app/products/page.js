import Hero from "../Components/Hero/Hero";
import ProductList from "./ProductList/ProductList";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero>
                <div className="text-4xl space-y-2 font-semibold mb-7 text-gray-500 leading-relaxed">
                    <h2>
                        TỰ HÀO LÀ MỘT NHÀ SẢN XUẤT <br /> VÀ CUNG CẤP HÀNG ĐẦU
                        VIỆT NAM
                    </h2>
                </div>
            </Hero>
            <ProductList />
        </main>
    );
}
