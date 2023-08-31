"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const navLinks = [
        {
            title: "CÔNG TY",
            url: "/",
        },
        { title: "SẢN PHẨM", url: "/products" },
        { title: "DỰ ÁN", url: "#" },
        { title: "VỀ CHÚNG TÔI", url: "#" },
        {
            title: "LIÊN HỆ",
            url: "#",
        },
    ];
    return (
        <nav class="bg-duy-hao-gray border-gray-200 py-3 drop-shadow-lg text-lg">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <Image
                        src="/371.jpg"
                        alt="Duy Hao's logo"
                        width={197}
                        height={89}
                    />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => setToggle(!toggle)}
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-11 md:mt-0 md:border-0 text-black">
                        {navLinks.map((e, i) => (
                            <li key={e.title}>
                                <Link
                                    href={e.url}
                                    class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-gray-500"
                                    aria-current="page"
                                >
                                    {e.title}
                                </Link>
                            </li>
                        ))}

                        <li class="self-end pl-8 space-x-2">
                            <span>
                                <a
                                    href="#"
                                    class="transition ease-in-out delay-300 duration-1000 hover:-top-1 relative"
                                >
                                    VN
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#"
                                    class="transition ease-in-out delay-300 duration-1000 text-gray-400 hover:-top-1 relative"
                                >
                                    EN
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                {/* Mobile Navigation */}
                {/* Sidebar */}
                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-duy-hao-gray absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar md:hidden`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-5">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.title}
                                className={`text-[16px]${
                                    index === navLinks.length - 1
                                        ? "mb-0"
                                        : "mb-4"
                                }`}
                            >
                                <Link href={nav.url}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
