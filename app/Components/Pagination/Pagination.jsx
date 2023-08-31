export default function Pagination({
    postsPerPage,
    totalPosts,
    paginate,
    currentPage,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="py-2">
            <nav className="flex items-center content-center">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage == 1}
                >
                    <svg
                        fill={currentPage > 1 ? "#ffffff" : "#747474"}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="81px"
                        height="81px"
                        viewBox="-6 -6 112.00 112.00"
                        enable-background="new 0 0 100 100"
                        stroke="#ffffff"
                        stroke-width="0.001"
                    >
                        <g
                            id="SVGRepo_bgCarrier"
                            stroke-width="0"
                            transform="translate(22.499999999999996,22.499999999999996), scale(0.55)"
                        >
                            <rect
                                x="-6"
                                y="-6"
                                width="112.00"
                                height="112.00"
                                rx="56"
                                fill={currentPage > 1 ? `#2E2F8A` : `#D8D8D8`}
                                strokewidth="0"
                            ></rect>
                        </g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044 c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519 c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"></path>{" "}
                                <path d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458 S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457 c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"></path>{" "}
                            </g>
                        </g>
                    </svg>
                </button>
                <div className="w-[81px] h-[81px] flex justify-center items-center text-[#2E2F8A] font-medium text-xl">
                    {currentPage} / {pageNumbers.length}
                </div>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage == pageNumbers.length}
                >
                    <svg
                        fill={
                            currentPage < pageNumbers.length
                                ? "#ffffff"
                                : "#747474"
                        }
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="81px"
                        height="81px"
                        viewBox="-6 -6 112.00 112.00"
                        enable-background="new 0 0 100 100"
                        stroke="#ffffff"
                        stroke-width="0.001"
                        transform="matrix(-1, 0, 0, 1, 0, 0)"
                    >
                        <g
                            id="SVGRepo_bgCarrier"
                            stroke-width="0"
                            transform="translate(22.499999999999996,22.499999999999996), scale(0.55)"
                        >
                            <rect
                                x="-6"
                                y="-6"
                                width="112.00"
                                height="112.00"
                                rx="56"
                                fill={
                                    currentPage < pageNumbers.length
                                        ? `#2E2F8A`
                                        : `#D8D8D8`
                                }
                                strokewidth="0"
                            ></rect>
                        </g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044 c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519 c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"></path>{" "}
                                <path d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458 S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457 c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"></path>{" "}
                            </g>
                        </g>
                    </svg>
                </button>
            </nav>
        </div>
    );
}
