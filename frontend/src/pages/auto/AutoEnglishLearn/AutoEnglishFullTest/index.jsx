import { useState, useEffect } from "react";
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
    const userId = useSelector((state) => state.session.user.id);

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
            score: String(calculatePercentage()),
            vehicleType: "auto",
            testType: "auto full test",
            testLanguage: "english",
            pass: calculatePercentage() >= 70,
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
    };

    const calculatePercentage = () => {
        const totalQuestions = englishFullTestData.length;
        const percentage = (countCorrectAnswers / totalQuestions) * 100;
        return percentage.toFixed(0);
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
                        className=" flex flex-col items-center bg-teal-50 h-screen pt-20 md:pt-48"
                    >
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
                                className="flex justify-center items-center font-bold text-xl md:text-3xl text-cyan-900 w-24 md:w-32 mt-4 bg-cyan-50 border border-cyan-900 rounded-lg"
                            >
                                submit
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

export default AutoEnglishFullTest;
