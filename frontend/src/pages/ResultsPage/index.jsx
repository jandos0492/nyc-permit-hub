import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import clsx from "clsx";
import ResultItem from "./ResultItem";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as resultsService from "services/testResult";

const PAGE_SIZE = 3;

const ResultsPage = () => {
    const [resultsData, setResultsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageIdx, setPageIdx] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await resultsService.getTestResults({ userId });
            const data = await response.json();
            setResultsData(data);
            setIsLoading(false);
        })();
    }, [userId]);

    const resultItems = resultsData
        .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
        .map((result, idx) => (
            <motion.div
                key={result.id}
                initial={{
                    opacity: 0,
                    translateY: "20px",
                }}
                whileInView={{
                    opacity: 1,
                    translateY: 0,
                }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3 + (idx % 3) * 0.2,
                    duration: 0.4,
                }}
            >
                <ResultItem result={result} />
            </motion.div>
        ));

    const numPages = Math.ceil(resultsData.length / PAGE_SIZE);

    const getVisiblePages = (currentPage, totalPages) => {
        const visiblePages = [];
        const window = 2;

        for (
            let i = Math.max(0, currentPage - window);
            i <= Math.min(totalPages - 1, currentPage + window);
            i++
        ) {
            visiblePages.push(i);
        }

        return visiblePages;
    };

    const visiblePages = getVisiblePages(pageIdx, numPages);

    const handlePageChange = (newPageIdx) => {
        if (newPageIdx >= 0 && newPageIdx < numPages) {
            setPageIdx(newPageIdx);
        }
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : resultsData.length > 0 ? (
                <div className="flex flex-col items-center bg-cyan-50 h-screen pt-12 md:pt-20">
                    <div className="w-full max-w-sm flex flex-col justify-center">
                        {resultItems}
                    </div>
                    {numPages > 1 && (
                        <div className="w-full max-w-2xl flex justify-center mt-4">
                            <button
                                onClick={() => handlePageChange(pageIdx - 1)}
                                disabled={pageIdx === 0}
                                className="bg-cyan-800 text-cyan-200 text-xl rounded-md m-1 w-[110px] px-4 py-2 disabled:opacity-50"
                            >
                                Previous
                            </button>

                            {visiblePages.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setPageIdx(page)}
                                    className={clsx(
                                        "bg-cyan-800 text-cyan-200 text-xl rounded-md m-1 w-6 transition-transform duration-200",
                                        pageIdx === page &&
                                            "bg-cyan-700 text-white scale-125 font-bold"
                                    )}
                                >
                                    {page + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(pageIdx + 1)}
                                disabled={pageIdx === numPages - 1}
                                className="bg-cyan-800 text-cyan-200 text-xl rounded-md m-1 px-4 w-[110px] py-2 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex justify-center pt-24 md:pt-48 text-slate-400 text-xl md:text-3xl">
                    No results found
                </div>
            )}
        </>
    );
};

export default ResultsPage;
