import Image from "next/image";
import duyHaoTeam from "../../../public/landing/duy-hao-1.webp";
export default function About() {
    return (
        <section
            className="grid grid-cols-1 py-5 gap-y-5 md:grid-cols-2 lg:gap-x-52 md:px-16 mt-10"
            id="about"
        >
            <div className="p-4">
                <h2 className="text-duy-hao-purple font-medium text-2xl mb-4">
                    Lời Giới Thiệu
                </h2>
                <p className="leading-loose font-light text-lg">
                    Công ty Duy Hảo đã có 20 năm kinh nghiệm trong lĩnh vực
                    thiết kế, sản xuất, lắp đặt tủ bảng điện, thang máng cáp cho
                    công trình công nghiệp và dân dụng.
                </p>
                <button className="mt-7 rounded-lg border-2 py-1 px-4 text-duy-hao-purple border-duy-hao-purple border-2 hover:bg-duy-hao-purple hover:text-white">
                    Xem Thêm
                </button>
            </div>
            <div>
                <Image src={duyHaoTeam} alt="Duy Hao's team" />
            </div>
        </section>
    );
}
