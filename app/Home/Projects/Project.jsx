"use client";

import Carousel from "../../Components/Carousel";

export default function Projects() {
    return (
        <div className="w-full p-20">
            <h2 className=" text-duy-hao-purple font-medium text-2xl">
                Những Dự Án Nổi Bật
            </h2>
            <Carousel />
            <div className="text-center mt-8">
                <button className="rounded-lg border-2 py-1 px-4 text-duy-hao-purple border-duy-hao-purple border-2 hover:bg-duy-hao-purple hover:text-white">
                    Xem Tất Cả
                </button>
            </div>
        </div>
    );
}
