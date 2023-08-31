import Link from "next/link";

export default function Hero(props) {
    return (
        <section
            id="hero"
            className="flex flex-col items-center text-center h-4/5 w-full justify-center h-[85vh] bg-[#2E2F8A0B]"
        >
            {props.children}
            <div className="relative top-48 text-white">
                <Link href="#product-list">
                    <svg
                        fill="#ACABAB"
                        height="64px"
                        width="64px"
                        id="Layer_1"
                        viewBox="0 0 330 330"
                        stroke="#ACABAB"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                            ></path>{" "}
                        </g>
                    </svg>
                </Link>
            </div>
        </section>
    );
}
