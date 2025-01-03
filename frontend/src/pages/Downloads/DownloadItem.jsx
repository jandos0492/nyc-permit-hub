import { useState } from "react";

const DownloadItem = ({ download }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative flex h-[300px] w-[200px] md:h-[380px] md:w-[260px] flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform duration-200 hover:scale-105"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="mb-2 w-full text-center">
                <span className="absolute left-2 top-1 text-xs md:text-md font-bold text-gray-500">
                    {download.no}
                </span>
                <h3 className="text-md md:text-lg font-semibold text-cyan-900 mt-2">
                    {download.name}
                </h3>
            </div>

            <img
                src={isHovered ? download.gif : download.image}
                alt={download.name}
                className="w-full h-24 md:h-40 object-cover rounded-md mb-2 md:mb-4"
            />
            <div className="flex flex-col gap-3 w-full text-xs md:text-lg">
                <a
                    href={download.wordUrl}
                    download
                    className="flex items-center justify-center bg-cyan-500 text-white py-2 px-4 md:px-6 rounded-md shadow hover:bg-cyan-600 hover:shadow-lg transition-all"
                >
                    <i className="fa-solid fa-file-word mr-2 text-sm md:text-lg"></i>
                    Download Word
                </a>
                <a
                    href={download.pdfUrl}
                    download
                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 md:px-6 rounded-md shadow hover:bg-red-600 hover:shadow-lg transition-all"
                >
                    <i className="fa-solid fa-file-pdf mr-2 text-sm md:text-lg"></i>
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default DownloadItem;
