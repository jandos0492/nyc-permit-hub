import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoRussianFullTestCard from "./AutoRussianFullTestCard";
import ResultModal from "shared-components/ResultModal";
import * as russianTestService from "services/autoLearn";
import * as testResult from "services/testResult";

const AutoRussianFullTest = () => {
    const [russianFullTestData, setrussianFullTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [russianFullTestIdx, setrussianFullTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await russianTestService.getLearnRussian();
            const data = await response.json();
            setrussianFullTestData(data);
            setIsLoading(false);
        })();
    }, []);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(
                ((correct / russianFullTestData.length) * 100).toFixed(0)
            ),
            vehicleType: "auto",
            testType: "full test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/russian-flag.jpg",
            pass: ((correct / russianFullTestData.length) * 100).toFixed(0) >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && russianFullTestIdx > 0) {
                setrussianFullTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                russianFullTestIdx < russianFullTestData.length - 1 &&
                selectedAnswers[russianFullTestData[russianFullTestIdx].id] !==
                    undefined
            ) {
                setrussianFullTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        russianFullTestIdx,
        russianFullTestData.length,
        selectedAnswers,
        russianFullTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));

        const isCorrect =
            russianFullTestData[russianFullTestIdx].correctAnswerIndex ===
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
                russianFullTestData.length > 0 && (
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
                                                russianFullTestData.length) *
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
                                    setrussianFullTestIdx(
                                        russianFullTestIdx - 1
                                    )
                                }
                                show={russianFullTestIdx > 1000}
                            />
                            <AutoRussianFullTestCard
                                russianFullTestDataCard={
                                    russianFullTestData[russianFullTestIdx]
                                }
                                russianFullTestQuestionQty={
                                    russianFullTestData.length
                                }
                                selectedAnswer={
                                    selectedAnswers[
                                        russianFullTestData[russianFullTestIdx]
                                            .id
                                    ]
                                }
                                onSelectAnswer={(answerIdx) =>
                                    handleAnswerSelect(
                                        russianFullTestData[russianFullTestIdx]
                                            .id,
                                        answerIdx
                                    )
                                }
                                countCorrectAnswers={countCorrectAnswers}
                                setCountCorrectAnswers={setCountCorrectAnswers}
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setrussianFullTestIdx(
                                        russianFullTestIdx + 1
                                    )
                                }
                                show={
                                    russianFullTestIdx <
                                        russianFullTestData.length - 1 &&
                                    selectedAnswers[
                                        russianFullTestData[russianFullTestIdx]
                                            .id
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            russianFullTestData.length
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
                    score={((correct / russianFullTestData.length) * 100).toFixed(
                        0
                    )}
                />
            )}
        </>
    );
};

export default AutoRussianFullTest;
