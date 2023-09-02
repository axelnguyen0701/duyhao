"use client";
import { useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import ProjectCard from "../Components/Card/ProjectCard";
import Hero from "../Components/Hero/Hero";

export default function Home() {
    const projects = [
        {
            title: "NHÀ MÁY TẤM THẠCH CAO VGSI",
            location: "Bà Rịa, Vũng Tàu",
            description: [
                "Tủ điện dòng phụ tải: 3200A",
                "Thang máng cáp trên: 3500m",
            ],
            imgName: "ba-ria.png",
        },
        {
            title: "NHÀ MÁY TÂN HOÀNG GIA",
            location: "Củ Chi, TP.HCM",
            description: [
                "Tủ điện dòng phụ tải: 5000A",
                "Thang máng cáp trên: 4500m",
            ],
            imgName: "tan-hoang-gia.png",
        },
        {
            title: "XÂY DỰNG MỞ RỘNG BỆNH VIỆN QUÂN Y 175",
            location: "Gò Vấp, TP.HCM",
            description: ["Thang máng cáp trên 10000m"],
            imgName: "175.jpg",
        },
        {
            title: "NHÀ MÁY S&S GLOVE",
            location: "Vũng Tàu",
            description: ["Thang máng cáp trên 3000m"],
            imgName: "ba-ria.png",
        },
        {
            title: "CÔNG VIÊN NƯỚC SƠN TIÊN",
            location: "Vũng Tàu",
            description: [
                "Tủ điện dòng phụ tải: 4000A",
                "Thang máng cáp trên: 2500m",
            ],
            imgName: "son-tien.png",
        },
        {
            title: "CHUNG CƯ PICITY HIGH PARK (BLOCK C3, C4)",
            location: "TX 13, Quận 12, TPHCM",
            description: [
                "Tủ điện dòng phụ tải: 4000A",
                "Thang máng cáp trên: 4000m",
            ],
            imgName: "trung-nguyen.png",
        },
        {
            title: "CÔNG VIÊN NƯỚC SƠN TIÊN",
            location: "Vũng Tàu",
            description: [
                "Tủ điện dòng phụ tải: 4000A",
                "Thang máng cáp trên: 2500m",
            ],
            imgName: "son-tien.png",
        },
        {
            title: "NHÀ MÁY TẤM THẠCH CAO VGSI",
            location: "Bà Rịa, Vũng Tàu",
            description: [
                "Tủ điện dòng phụ tải: 3200A",
                "Thang máng cáp trên: 3500m",
            ],
            imgName: "ba-ria.png",
        },
        {
            title: "NHÀ MÁY TÂN HOÀNG GIA",
            location: "Củ Chi, TP.HCM",
            description: [
                "Tủ điện dòng phụ tải: 5000A",
                "Thang máng cáp trên: 4500m",
            ],
            imgName: "tan-hoang-gia.png",
        },
        {
            title: "NHÀ MÁY S&S GLOVE",
            location: "Vũng Tàu",
            description: ["Thang máng cáp trên 3000m"],
            imgName: "ba-ria.png",
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastPost = currentPage * projectsPerPage;
    const indexOfFirstPost = indexOfLastPost - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero scrollTo="#projects">
                <div className="text-4xl space-y-2 font-semibold mb-7 text-gray-500 leading-relaxed">
                    <h2>NHỮNG DỰ ÁN NỔI BẬT CỦA DUY HẢO</h2>
                </div>
            </Hero>
            <section
                id="projects"
                className="flex flex-col justify-center items-center mt-32 w-full"
            >
                <div className="grid grid-cols-3 gap-y-10 justify-items-center w-full mb-5">
                    {currentProjects.map((e, i) => (
                        <ProjectCard
                            key={i}
                            title={e.title}
                            location={e.location}
                            description={e.description}
                            imgName={e.imgName}
                        />
                    ))}
                </div>
                <Pagination
                    postsPerPage={projectsPerPage}
                    totalPosts={projects.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </section>
        </main>
    );
}
