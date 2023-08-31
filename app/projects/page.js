"use client";
import { useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import Hero from "../Components/Hero/Hero";

export default function Home() {
    const projects = [...new Array(23).keys()];
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastPost = currentPage * projectsPerPage;
    const indexOfFirstPost = indexOfLastPost - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <main className="flex min-h-screen flex-col items-center bg-duy-hao-blue">
            <Hero>
                <div className="text-4xl space-y-2 font-semibold mb-7 text-gray-500 leading-relaxed">
                    <h2>NHỮNG DỰ ÁN NỔI BẬT CỦA DUY HẢO</h2>
                </div>
            </Hero>
            <div className="grid grid-cols-3 gap-4">
                {currentProjects.map((e) => (
                    <div className="w-80 h-80 bg-gray-700" key={e}>
                        Project {e}
                    </div>
                ))}
            </div>

            <Pagination
                postsPerPage={projectsPerPage}
                totalPosts={projects.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </main>
    );
}
