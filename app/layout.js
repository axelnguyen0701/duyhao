import NavBar from "./NavBar/NavBar";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamePro = Be_Vietnam_Pro({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Duy Hao Engineering - ",
    description:
        "Welcome to Duy Hao Engineering - Innovating the Future of Engineering Solutions. Chào mừng bạn đến với Duy Hao Engineering - Khám phá tương lai của các giải pháp kỹ thuật",
    keywords:
        "kỹ thuật, giải pháp, sáng tạo, công nghệ, sản xuất, engineering, solutions, innovation, technology, manufacturing",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={beVietnamePro.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
