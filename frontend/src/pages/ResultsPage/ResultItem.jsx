import React from "react";

const ResultItem = ({ result }) => {
    const cardColor = result.pass
        ? "bg-green-100 border-green-400"
        : "bg-red-100 border-red-400";
    const textColor = result.pass ? "text-green-800" : "text-red-800";

    return (
        <div
            className={`border rounded-lg p-2 w-full shadow-lg flex flex-col gap-1 ${cardColor} transition-transform duration-300 hover:scale-105 mb-6 md:mb-8`}
        >
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center justify-center gap-3 md:gap-8">
                    <img
                        className="w-8 md:w-12 h-8 md:h-12 rounded-full border"
                        src={result.testLanguage}
                        alt="Language Flag"
                    />
                    <div className="text-xl md:text-3xl font-bold">
                        {result.vehicleType === "auto" ? (
                            <i className="fa-duotone fa-solid fa-car"></i>
                        ) : (
                            <i className="fa-duotone fa-solid fa-truck"></i>
                        )}
                    </div>
                </div>
                {result.vehicleType !== "auto" && (
                    <div className="text-sm md:text-base italic font-bold">
                        {result.vehicleType.slice(4)}
                    </div>
                )}
            </div>
            <div className="border-t border-gray-300 pt-2 flex flex-col text-xs md:text-base">
                <div className="flex justify-around items-center">
                    <div className="w-[82px] font-medium text-gray-700">
                        Date:
                    </div>
                    <div className="w-[100px] text-gray-900">
                        {new Date(result.createdAt).toLocaleDateString()}
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="w-[82px] font-medium text-gray-700">
                        Time:
                    </div>
                    <div className="w-[100px] text-gray-900">
                        {new Date(result.createdAt).toLocaleTimeString()}
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="w-[82px] font-medium text-gray-700">
                        Test Type:
                    </div>
                    <div className="w-[100px] text-gray-900 truncate">
                        {result.testType}
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <div className="w-[82px] font-medium text-gray-700">
                        Score:
                    </div>
                    <div className="w-[100px] text-gray-900">
                        {result.score}%
                    </div>
                </div>
                {!result.pass && (
                    <div className="flex justify-around items-center">
                        <div className="w-[82px] font-medium text-gray-700">
                            Required:
                        </div>
                        <div className="w-[100px] text-gray-900">
                            {result.requiredScore}%
                        </div>
                    </div>
                )}
            </div>
            <div className={`font-bold text-center text-base md:text-lg mt-1 ${textColor}`}>
                {result.pass ? "Passed" : "Failed"}
            </div>
        </div>
    );
};

export default ResultItem;