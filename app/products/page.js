import Hero from "./Hero/Hero";
import ProductList from "./ProductList/ProductList";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero />
            <ProductList />
        </main>
    );
}
