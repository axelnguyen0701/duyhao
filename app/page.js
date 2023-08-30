import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Products from "./Home/Products/Products";
import Projects from "./Home/Projects/Project";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero />
            <About />
            <Products />
            <Projects />
        </main>
    );
}
