import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Products from "./Home/Products/Products";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero />
            <About />
            <Products />
        </main>
    );
}
