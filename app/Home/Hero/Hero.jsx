import Image from "next/image";
import arrowDown from "../../../public/arrow-204-64.ico";
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
            <button className="mt-5 rounded-lg border-2 py-1 px-4 text-duy-hao-purple border-duy-hao-purple border-2 hover:bg-duy-hao-purple hover:text-white">
                Sản Phẩm Của Chúng Tôi
            </button>
            <div className="relative top-48 text-white">
                <a href="#about">
                    <Image
                        src={arrowDown}
                        alt="Down Arrow"
                        priority
                        height={53}
                        width={53}
                    />
                </a>
            </div>
        </section>
    );
}
