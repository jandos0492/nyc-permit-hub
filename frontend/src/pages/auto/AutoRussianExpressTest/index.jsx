import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoRussianExpressTestCard from "./AutoRussianExpressTestCard";
import ResultModal from "shared-components/ResultModal";
import * as russianTestService from "services/autoLearn";
import * as testResult from "services/testResult";

const AutoRussianExpressTest = () => {
    const [russianExpressTestData, setRussianExpressTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [russianExpressTestIdx, setrussianExpressTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randomRussianData, setRandomRussianData] = useState([]);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await russianTestService.getLearnRussian();
            const data = await response.json();
            setRussianExpressTestData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (russianExpressTestData.length > 0) {
            const shuffledArray = [...russianExpressTestData].sort(
                () => Math.random() - 0.5
            );
            const randomData = shuffledArray.slice(0, 20);
            setRandomRussianData(randomData);
        }
    }, [russianExpressTestData]);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(
                ((correct / randomRussianData.length) * 100).toFixed(0)
            ),
            vehicleType: "auto",
            testType: "express test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/russian-flag.jpg",
            pass: ((correct / randomRussianData.length) * 100).toFixed(0) >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && randomRussianData.length > 0) {
                setrussianExpressTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                russianExpressTestIdx < randomRussianData.length - 1 &&
                selectedAnswers[russianExpressTestIdx + 1] !== undefined
            ) {
                setrussianExpressTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        russianExpressTestIdx,
        randomRussianData.length,
        selectedAnswers,
        randomRussianData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));

        const isCorrect =
            randomRussianData[russianExpressTestIdx].correctAnswerIndex ===
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
                randomRussianData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="w-full flex justify-center bg-cyan-50 pb-12">
                            <div className="flex justify-around w-full max-w-xs md:max-w-lg">
                                <div className="flex items-center justify-center bg-green-100 text-green-700 border border-green-300 font-lato text-xs md:text-lg p-2 md:p-4 rounded-lg shadow-md">
                                    Правильно: {correct}
                                </div>
                                {correct > 0 && (
                                    <div className="flex items-center justify-center bg-cyan-800 border border-cyan-300 font-bold font-lato text-white text-xs md:text-lg p-2 md:p-4  rounded-lg shadow-md">
                                        Результат:{" "}
                                        {(
                                            (correct /
                                                randomRussianData.length) *
                                            100
                                        ).toFixed(0)}
                                        %
                                    </div>
                                )}
                                <div className="flex items-center justify-center bg-red-100 text-red-700 border border-red-300 font-lato text-xs md:text-lg p-2 md:p-4 rounded-lg shadow-md">
                                    Ошибки: {wrong}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setrussianExpressTestIdx(
                                        russianExpressTestIdx - 1
                                    )
                                }
                                show={russianExpressTestIdx > 1000}
                            />
                            {randomRussianData.length > 0 && (
                                <AutoRussianExpressTestCard
                                    randomRussianData={
                                        randomRussianData[russianExpressTestIdx]
                                    }
                                    index={russianExpressTestIdx}
                                    russianExpressTestQuestionQty={
                                        randomRussianData.length
                                    }
                                    selectedAnswer={
                                        selectedAnswers[
                                            russianExpressTestIdx + 1
                                        ]
                                    }
                                    onSelectAnswer={(answerIdx) =>
                                        handleAnswerSelect(
                                            russianExpressTestIdx + 1,
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
                                    setrussianExpressTestIdx(
                                        russianExpressTestIdx + 1
                                    )
                                }
                                show={
                                    russianExpressTestIdx <
                                        randomRussianData.length - 1 &&
                                    selectedAnswers[
                                        russianExpressTestIdx + 1
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            randomRussianData.length
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
                    score={((correct / randomRussianData.length) * 100).toFixed(
                        0
                    )}
                />
            )}
        </>
    );
};

export default AutoRussianExpressTest;
