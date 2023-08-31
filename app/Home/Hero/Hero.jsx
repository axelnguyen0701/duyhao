import Link from "next/link";
export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center text-center h-4/5 w-full justify-center h-[85vh] bg-contain"
            style={{ backgroundImage: "url('/landing/hero.jpg')" }}
        >
            <div className="text-2xl space-y-2 font-semibold mb-7 text-white">
                <h2>CHẤT LƯỢNG SẢN PHẨM</h2>
                <h2> LÀ CUỘC SỐNG CỦA CHÚNG TÔI</h2>
            </div>
            <div className="text-xl font-light space-y-1 text-white">
                <p>Duy Hảo cam kết có đội ngũ kỹ thuật chuyên nghiệp</p>
                <p> để phục vụ quý khách trong vòng 24h</p>
            </div>
            <Link
                href="/products"
                className="mt-5 rounded-lg border-2 py-1 px-4 text-duy-hao-purple border-duy-hao-purple border-2 hover:bg-duy-hao-purple hover:text-white"
            >
                Sản Phẩm Của Chúng Tôi
            </Link>
            <div className="relative top-48 text-white">
                <a href="#about">
                    <svg
                        fill="#ffffff"
                        height="64px"
                        width="64px"
                        id="Layer_1"
                        viewBox="0 0 330 330"
                        stroke="#ACABAB"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            ></path>{" "}
                        </g>
                    </svg>
                </a>
            </div>
        </section>
    );
}
