export default function ProductList() {
    const productLists = [...Array(10).keys()];
    const rendederedProductList = productLists.map((e) => (
        <div key={e}>
            <svg
                width="256px"
                height="256px"
                viewBox="-6.4 -6.4 76.80 76.80"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <rect x="8" y="8" width="48" height="48"></rect>
                    <line x1="56" y1="8" x2="8" y2="56"></line>
                    <line x1="56" y1="56" x2="8" y2="8"></line>
                </g>
            </svg>
            <h3 className="text-center">Lorem ipsum dolor sit</h3>
        </div>
    ));
    return (
        <section className="w-full mt-8 p-4" id="product-list">
            <div className="grid grid-cols-2 gap-x-1 justify-items-center md:grid-cols-4 md:gap-x-4">
                {rendederedProductList}
            </div>
        </section>
    );
}
