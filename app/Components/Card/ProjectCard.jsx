import Image from "next/image";
export default function ProjectCard({ title, location, description, imgName }) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg w-full bg-white flex justify-center flex-col items-center py-10">
            <div class="px-6 py-4">
                <div class="font-medium mb-2">{title}</div>
                <p className="font-thin text-sm italic">{location}</p>
                <Image
                    src={"/projects/" + imgName}
                    alt={title}
                    height={300}
                    width={300}
                    className="my-3"
                />
                <div className="font-light">
                    <p>Sản phẩm và quy mô cung cấp</p>
                    <ul className="list-disc">
                        {description.map((e, i) => (
                            <li key={i} className="ml-11 mt-1">
                                <p class="text-gray-700 text-base">{e}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
