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
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await resultsService.getTestResults({ userId });
            const data = await response.json();
            setResultsData(data);
            setIsLoading(false);
        })();
    }, []);

    const resultItems = resultsData
        .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1))
        .map((result, idx) => <motion.div
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
        )

    const numPages = Math.ceil(resultsData.length / PAGE_SIZE);
    const buttons = [];
    for (let i = 0; i < numPages; i++) {
        buttons.push(
            <button
                onClick={() => setPageIdx(i)}
                key={i}
                className={clsx(
                    "bg-cyan-800 text-cyan-200 text-xl rounded-sm m-1 w-6 transition-transform duration-200",
                    pageIdx === i &&
                        "bg-cyan-700 text-white scale-125 font-bold"
                )}
            >
                {i + 1}
            </button>
        );
    }

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : resultsData.length > 0 ? (
                <div className="flex flex-col items-center bg-cyan-50 h-screen pt-12 md:pt-24">
                    <div className="w-full max-w-sm flex flex-col justify-center">
                        {resultItems}
                    </div>
                    <div className="flex justify-center">{buttons}</div>
                </div>
            ) : (
                <div className="text-center text-gray-500 mt-8">
                    No results found.
                </div>
            )}
        </>
    );
};

export default ResultsPage;
