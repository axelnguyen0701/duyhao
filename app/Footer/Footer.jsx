import Image from "next/image";
import footer from "../../public/footer/footer.jpg";
export default function Footer() {
    return (
        <footer class="bg-duy-hao-red">
            <div>
                <Image
                    src={footer}
                    alt="Tu Dien"
                    placeholder="blur"
                    style={{
                        position: "static",
                        width: "100vw",
                        height: "35vh",
                    }}
                />
                <a
                    href="tel:+84914443478"
                    className="rounded-full border px-5 py-3 bg-duy-hao-red border-transparent relative -top-20 left-40 text-white"
                >
                    HOTLINE: 0914443478
                </a>
            </div>

            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div className="md:w-1/5 w-full">
                        <a href="/" class="flex items-center mb-4 sm:mb-0">
                            <Image
                                src="/371.jpg"
                                alt="Duy Hao Logo"
                                width={158}
                                height={128}
                            />
                        </a>
                        <div className="text-xs font-light mt-5 space-y-4">
                            <p>
                                Văn Phòng: 989 Nguyễn Duy Trinh
                                <br />
                                phường Phú Hữu , Quận 9
                                <br />
                                TP. Thủ Đức
                            </p>
                            <p>
                                Nhà Máy: 44/17 Bình Phú, Bình Chuẩn Thuận An,
                                Bình Dương
                            </p>
                            <p>Duyhaoco@gmail.com</p>
                            <p>Hotline: 0914443478</p>
                        </div>
                    </div>

                    <ul class="flex flex-wrap items-center mt-4 md:mt-0 md:mb-6 font-light text-white sm:mb-0 self-start md:space-x-8 ">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">
                                Sản Phẩm
                            </a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">
                                Dự Án{" "}
                            </a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">
                                Về Duy Hảo{" "}
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline md:mr-6">
                                Chứng Nhận
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline md:ml-0 ml-4">
                                Liên Hệ
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-300 sm:text-end">
                    © 2023 Duy Hao Engg. All rights reserved
                </span>
            </div>
        </footer>
    );
}
