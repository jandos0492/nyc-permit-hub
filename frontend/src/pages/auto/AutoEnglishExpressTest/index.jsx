import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoEnglishExpressTestCard from "./AutoEnglishExpressTestCard";
import ResultModal from "shared-components/ResultModal";
import * as englishTestService from "services/autoLearn";
import * as testResult from "services/testResult";

const AutoEnglishExpressTest = () => {
    const [englishExpressTestData, setEnglishExpressTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [englishExpressTestIdx, setEnglishExpressTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randomEnglishData, setRandomEnglishData] = useState([]);
    const [wrong, setWrong] = useState(0);
    const [correct, setCorrect] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await englishTestService.getLearnEnglish();
            const data = await response.json();
            setEnglishExpressTestData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (englishExpressTestData.length > 0) {
            const shuffledArray = [...englishExpressTestData].sort(
                () => Math.random() - 0.5
            );
            const randomData = shuffledArray.slice(0, 20);
            setRandomEnglishData(randomData);
        }
    }, [englishExpressTestData]);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(
                ((correct / randomEnglishData.length) * 100).toFixed(0)
            ),
            vehicleType: "auto",
            testType: "express test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass: ((correct / randomEnglishData.length) * 100).toFixed(0) >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && randomEnglishData.length > 0) {
                setEnglishExpressTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                englishExpressTestIdx < randomEnglishData.length - 1 &&
                selectedAnswers[englishExpressTestIdx + 1] !== undefined
            ) {
                setEnglishExpressTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        englishExpressTestIdx,
        randomEnglishData.length,
        selectedAnswers,
        randomEnglishData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));

        const isCorrect =
            randomEnglishData[englishExpressTestIdx].correctAnswerIndex ===
            answerIdx;

        if (isCorrect) {
            setCorrect((prev) => prev + 1);
            setCountCorrectAnswers((prevCount) => prevCount + 1);
        } else {
            setWrong((prev) => prev + 1);
        }
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                randomEnglishData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="w-full flex justify-center bg-cyan-50 pb-12">
                            <div className="flex justify-around w-full max-w-xs md:max-w-lg">
                                <div className="flex items-center justify-center bg-green-100 text-green-700 border border-green-300 font-lato text-xs md:text-lg p-2 md:p-4 rounded-lg shadow-md">
                                    Correct: {correct}
                                </div>
                                {correct > 0 && (
                                    <div className="flex items-center justify-center bg-cyan-800 border border-cyan-300 font-bold font-lato text-white text-xs md:text-lg p-2 md:p-4  rounded-lg shadow-md">
                                        Score:{" "}
                                        {(
                                            (correct /
                                                randomEnglishData.length) *
                                            100
                                        ).toFixed(0)}
                                        %
                                    </div>
                                )}
                                <div className="flex items-center justify-center bg-red-100 text-red-700 border border-red-300 font-lato text-xs md:text-lg p-2 md:p-4 rounded-lg shadow-md">
                                    Wrong: {wrong}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setEnglishExpressTestIdx(
                                        englishExpressTestIdx - 1
                                    )
                                }
                                show={englishExpressTestIdx > 1000}
                            />
                            {randomEnglishData.length > 0 && (
                                <AutoEnglishExpressTestCard
                                    randomEnglishData={
                                        randomEnglishData[englishExpressTestIdx]
                                    }
                                    index={englishExpressTestIdx}
                                    englishExpressTestQuestionQty={
                                        randomEnglishData.length
                                    }
                                    selectedAnswer={
                                        selectedAnswers[
                                            englishExpressTestIdx + 1
                                        ]
                                    }
                                    onSelectAnswer={(answerIdx) =>
                                        handleAnswerSelect(
                                            englishExpressTestIdx + 1,
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
                                    setEnglishExpressTestIdx(
                                        englishExpressTestIdx + 1
                                    )
                                }
                                show={
                                    englishExpressTestIdx <
                                        randomEnglishData.length - 1 &&
                                    selectedAnswers[
                                        englishExpressTestIdx + 1
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            randomEnglishData.length
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
                        navigate("/auto/english/")
                    }}
                    score={((correct / randomEnglishData.length) * 100).toFixed(
                        0
                    )}
                />
            )}
        </>
    );
};

export default AutoEnglishExpressTest;
