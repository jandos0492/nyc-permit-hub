import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import GeneralKnowledgeFullTestCard from "./GeneralKnowledgeFullTestCard";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import ResultModal from "shared-components/ResultModal";
import * as cdlService from "services/cdl";
import * as testResult from "services/testResult";

const GeneralKnowledgeFullTest = () => {
    const [generalKnowledgeFullTestData, setGeneralKnowledgeFullTestData] =
        useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [generalKnowledgeFullTestIdx, setGeneralKnowledgeFullTestIdx] =
        useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userId = useSelector((state) => state?.session?.user?.id);

    useEffect(() => {
        (async () => {
            const response = await cdlService.getGeneralKnowledge();
            const data = await response.json();
            setGeneralKnowledgeFullTestData(data);
            setIsLoading(false);
        })();
    }, []);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(calculatePercentage()),
            vehicleType: "cdl general knowledge",
            testType: "full test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass: calculatePercentage() >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && generalKnowledgeFullTestIdx > 0) {
                setGeneralKnowledgeFullTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                generalKnowledgeFullTestIdx <
                    generalKnowledgeFullTestData.length - 1 &&
                selectedAnswers[
                    generalKnowledgeFullTestData[generalKnowledgeFullTestIdx].id
                ] !== undefined
            ) {
                setGeneralKnowledgeFullTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        generalKnowledgeFullTestIdx,
        generalKnowledgeFullTestData.length,
        selectedAnswers,
        generalKnowledgeFullTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));
    };

    const calculatePercentage = () => {
        const totalQuestions = generalKnowledgeFullTestData.length;
        const percentage = (countCorrectAnswers / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                generalKnowledgeFullTestData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setGeneralKnowledgeFullTestIdx(
                                        generalKnowledgeFullTestIdx - 1
                                    )
                                }
                                show={generalKnowledgeFullTestIdx > 1000}
                            />
                            <GeneralKnowledgeFullTestCard
                                generalKnowledgeFullTestCard={
                                    generalKnowledgeFullTestData[
                                        generalKnowledgeFullTestIdx
                                    ]
                                }
                                generalKnowledgeFullTestQuestionQty={
                                    generalKnowledgeFullTestData.length
                                }
                                selectedAnswer={
                                    selectedAnswers[
                                        generalKnowledgeFullTestData[
                                            generalKnowledgeFullTestIdx
                                        ].id
                                    ]
                                }
                                onSelectAnswer={(answerIdx) =>
                                    handleAnswerSelect(
                                        generalKnowledgeFullTestData[
                                            generalKnowledgeFullTestIdx
                                        ].id,
                                        answerIdx
                                    )
                                }
                                countCorrectAnswers={countCorrectAnswers}
                                setCountCorrectAnswers={setCountCorrectAnswers}
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setGeneralKnowledgeFullTestIdx(
                                        generalKnowledgeFullTestIdx + 1
                                    )
                                }
                                show={
                                    generalKnowledgeFullTestIdx <
                                        generalKnowledgeFullTestData.length -
                                            1 &&
                                    selectedAnswers[
                                        generalKnowledgeFullTestData[
                                            generalKnowledgeFullTestIdx
                                        ].id
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            generalKnowledgeFullTestData.length
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

export default GeneralKnowledgeFullTest;
