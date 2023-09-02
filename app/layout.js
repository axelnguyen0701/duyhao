import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamePro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600"],
});

export const metadata = {
    title: "Duy Hao Engineering",
    metadataBase: new URL("duyhao.vercel.app"),
    alternates: {
        canonical: "/",
    },
    description:
        "Welcome to Duy Hao Engineering - Innovating the Future of Engineering Solutions. Chào mừng bạn đến với Duy Hao Engineering - Khám phá tương lai của các giải pháp kỹ thuật",
    keywords:
        "kỹ thuật, giải pháp, sáng tạo, công nghệ, sản xuất, engineering, solutions, innovation, technology, manufacturing",
    verification: {
        google: "j5EN_pdEzOUE8P5bmIJTEX1TqqRwBzpEWruVujcRi2g",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={beVietnamePro.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
