import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoEnglishFullTestCard from "./AutoEnglishFullTestCard";
import ResultModal from "shared-components/ResultModal";
import * as englishTestService from "services/autoLearn";
import * as testResult from "services/testResult";

const AutoEnglishFullTest = () => {
    const [englishFullTestData, setEnglishFullTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [englishFullTestIdx, setEnglishFullTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [wrong, setWrong] = useState(0);
    const [correct, setCorrect] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await englishTestService.getLearnEnglish();
            const data = await response.json();
            setEnglishFullTestData(data);
            setIsLoading(false);
        })();
    }, []);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(
                ((correct / englishFullTestData.length) * 100).toFixed(0)
            ),
            vehicleType: "auto",
            testType: "full test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass: ((correct / englishFullTestData.length) * 100).toFixed(0) >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && englishFullTestIdx > 0) {
                setEnglishFullTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                englishFullTestIdx < englishFullTestData.length - 1 &&
                selectedAnswers[englishFullTestData[englishFullTestIdx].id] !==
                    undefined
            ) {
                setEnglishFullTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        englishFullTestIdx,
        englishFullTestData.length,
        selectedAnswers,
        englishFullTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));

        const isCorrect = englishFullTestData[englishFullTestIdx].correctAnswerIndex === answerIdx;

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
                englishFullTestData.length > 0 && (
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
                                                englishFullTestData.length) *
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
                                    setEnglishFullTestIdx(
                                        englishFullTestIdx - 1
                                    )
                                }
                                show={englishFullTestIdx > 1000}
                            />
                            <AutoEnglishFullTestCard
                                englishFullTestDataCard={
                                    englishFullTestData[englishFullTestIdx]
                                }
                                englishFullTestQuestionQty={
                                    englishFullTestData.length
                                }
                                selectedAnswer={
                                    selectedAnswers[
                                        englishFullTestData[englishFullTestIdx]
                                            .id
                                    ]
                                }
                                onSelectAnswer={(answerIdx) =>
                                    handleAnswerSelect(
                                        englishFullTestData[englishFullTestIdx]
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
                                    setEnglishFullTestIdx(
                                        englishFullTestIdx + 1
                                    )
                                }
                                show={
                                    englishFullTestIdx <
                                        englishFullTestData.length - 1 &&
                                    selectedAnswers[
                                        englishFullTestData[englishFullTestIdx]
                                            .id
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            englishFullTestData.length
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
                        navigate("/auto/english/");
                    }}
                    score={(
                        (correct / englishFullTestData.length) *
                        100
                    ).toFixed(0)}
                />
            )}
        </>
    );
};

export default AutoEnglishFullTest;
