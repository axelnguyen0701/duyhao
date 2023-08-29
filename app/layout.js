import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
