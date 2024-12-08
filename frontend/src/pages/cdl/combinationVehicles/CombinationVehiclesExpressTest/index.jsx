import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import CombinationVehiclesExpressTestCard from "./CombinationVehiclesExpressTestCard";
import ResultModal from "shared-components/ResultModal";
import * as cdlService from "services/cdl";
import * as testResult from "services/testResult";

const CombinationVehiclesExpressTest = () => {
    const [combinationVehiclesExpressTestData, setCombinationVehiclesExpressTestData] = useState(
        []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [combinationVehiclesExpressTestIdx, setCombinationVehiclesExpressTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randowCombinationVehiclesExpressTestData, setRandowCombinationVehiclesExpressTestData] =
        useState([]);
    const userId = useSelector((state) => state?.session?.user?.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getCombinationVehicles();
            const data = await response.json();
            setCombinationVehiclesExpressTestData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (combinationVehiclesExpressTestData.length > 0) {
            const shuffledArray = [...combinationVehiclesExpressTestData].sort(
                () => Math.random() - 0.5
            );
            const randomData = shuffledArray.slice(0, 25);
            setRandowCombinationVehiclesExpressTestData(randomData);
        }
    }, [combinationVehiclesExpressTestData]);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(calculatePercentage()),
            vehicleType: "cdl combination vehicles",
            testType: "express test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass: calculatePercentage() >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                event.key === "ArrowLeft" &&
                randowCombinationVehiclesExpressTestData.length > 0
            ) {
                setCombinationVehiclesExpressTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                combinationVehiclesExpressTestIdx <
                    randowCombinationVehiclesExpressTestData.length - 1 &&
                selectedAnswers[combinationVehiclesExpressTestIdx + 1] !== undefined
            ) {
                setCombinationVehiclesExpressTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        combinationVehiclesExpressTestIdx,
        randowCombinationVehiclesExpressTestData.length,
        selectedAnswers,
        randowCombinationVehiclesExpressTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));
    };

    const calculatePercentage = () => {
        const totalQuestions = randowCombinationVehiclesExpressTestData.length;
        const percentage = (countCorrectAnswers / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                randowCombinationVehiclesExpressTestData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setCombinationVehiclesExpressTestIdx(
                                        combinationVehiclesExpressTestIdx - 1
                                    )
                                }
                                show={combinationVehiclesExpressTestIdx > 1000}
                            />
                            {randowCombinationVehiclesExpressTestData.length > 0 && (
                                <CombinationVehiclesExpressTestCard
                                    randowCombinationVehiclesExpressTestData={
                                        randowCombinationVehiclesExpressTestData[
                                            combinationVehiclesExpressTestIdx
                                        ]
                                    }
                                    index={combinationVehiclesExpressTestIdx}
                                    combinationVehiclesExpressTestQuestionQty={
                                        randowCombinationVehiclesExpressTestData.length
                                    }
                                    selectedAnswer={
                                        selectedAnswers[
                                            combinationVehiclesExpressTestIdx + 1
                                        ]
                                    }
                                    onSelectAnswer={(answerIdx) =>
                                        handleAnswerSelect(
                                            combinationVehiclesExpressTestIdx + 1,
                                            answerIdx
                                        )
                                    }
                                    countCorrectAnswers={countCorrectAnswers}
                                    setCountCorrectAnswers={
                                        setCountCorrectAnswers
                                    }
                                />
                            )}
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setCombinationVehiclesExpressTestIdx(
                                        combinationVehiclesExpressTestIdx + 1
                                    )
                                }
                                show={
                                    combinationVehiclesExpressTestIdx <
                                        randowCombinationVehiclesExpressTestData.length -
                                            1 &&
                                    selectedAnswers[
                                        combinationVehiclesExpressTestIdx + 1
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            randowCombinationVehiclesExpressTestData.length
                        ) && (
                            <button
                                onClick={handleSubmit}
                                className="flex justify-center items-center font-bold text-xl md:text-2xl text-white w-32 md:w-40 h-12 bg-gradient-to-r from-cyan-900 to-cyan-400 mt-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                            >
                                Submit
                            </button>
                        )}
                    </form>
                )
            )}
            {isModalOpen && (
                <ResultModal
                    onClose={() => {
                        setIsModalOpen(false);
                        window.location.reload();
                    }}
                    score={calculatePercentage()}
                />
            )}
        </>
    );
};

export default CombinationVehiclesExpressTest;
