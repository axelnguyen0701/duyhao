import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-11 md:mt-0 md:border-0 text-black">
                        <li>
                            <Link
                                href="/"
                                class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-gray-500"
                                aria-current="page"
                            >
                                CÔNG TY
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                class="block py-2 pl-3 pr-4 rounded hover:text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                            >
                                SẢN PHẨM
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                            >
                                DỰ ÁN
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                            >
                                VỀ CHÚNG TÔI
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                class="block py-2 pl-3 pr-4 rounded hover:text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                            >
                                LIÊN HỆ
                            </Link>
                        </li>
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
            </div>
        </nav>
    );
}
