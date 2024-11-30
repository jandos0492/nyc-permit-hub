import React from "react";

const ResultItem = ({ result }) => {
    const cardColor = result.pass
        ? "bg-green-100 border-green-400"
        : "bg-red-100 border-red-400";
    const textColor = result.pass ? "text-green-800" : "text-red-800";

    return (
        <div
            className={`border rounded-lg p-4 shadow-lg flex flex-col gap-2 ${cardColor} transition-transform duration-300 hover:scale-105 mb-8`}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-8">
                    <img
                        className="w-12 h-12 rounded-full border"
                        src={result.testLanguage}
                        alt="Language Flag"
                    />
                    <div className="text-3xl font-bold">
                        {result.vehicleType === "auto" ? (
                            <i className="fa-duotone fa-solid fa-car"></i>
                        ) : (
                            <i className="fa-duotone fa-solid fa-truck"></i>
                        )}
                    </div>
                </div>
                {result.vehicleType !== "auto" && (
                    <div className="font-bold">
                        {result.vehicleType.slice(4)}
                    </div>
                )}
            </div>
            <div className="border-t border-gray-300 pt-4 flex flex-col gap-1">
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
            <div className={`font-bold text-center text-lg mt-4 ${textColor}`}>
                {result.pass ? "Passed" : "Failed"}
            </div>
        </div>
    );
};

export default ResultItem;
