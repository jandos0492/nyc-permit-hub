import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import GeneralKnowledgeExpressTestCard from "./GeneralKnowledgeExpressTestCard";
import ResultModal from "shared-components/ResultModal";
import * as cdlService from "services/cdl";
import * as testResult from "services/testResult";

const GeneralKnowledgeExpressTest = () => {
    const [generalKnowledgeExpressTestData, setGeneralKnowledgeExpressTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [generalKnowledgeExpressTestIdx, setGeneralKnowledgeExpressTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [randowGeneralKnowledgeExpressTestData, setRandowGeneralKnowledgeExpressTestData] = useState([]);
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getGeneralKnowledge();
            const data = await response.json();
            setGeneralKnowledgeExpressTestData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (generalKnowledgeExpressTestData.length > 0) {
            const shuffledArray = [...generalKnowledgeExpressTestData].sort(
                () => Math.random() - 0.5
            );
            const randomData = shuffledArray.slice(0, 50);
            setRandowGeneralKnowledgeExpressTestData(randomData);
        }
    }, [generalKnowledgeExpressTestData]);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(calculatePercentage()),
            vehicleType: "cdl general knowledge",
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
            if (event.key === "ArrowLeft" && randowGeneralKnowledgeExpressTestData.length > 0) {
                setGeneralKnowledgeExpressTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                generalKnowledgeExpressTestIdx < randowGeneralKnowledgeExpressTestData.length - 1 &&
                selectedAnswers[generalKnowledgeExpressTestIdx + 1] !== undefined
            ) {
                setGeneralKnowledgeExpressTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        generalKnowledgeExpressTestIdx,
        randowGeneralKnowledgeExpressTestData.length,
        selectedAnswers,
        randowGeneralKnowledgeExpressTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));
    };

    const calculatePercentage = () => {
        const totalQuestions = randowGeneralKnowledgeExpressTestData.length;
        const percentage = (countCorrectAnswers / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                randowGeneralKnowledgeExpressTestData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setGeneralKnowledgeExpressTestIdx(
                                        generalKnowledgeExpressTestIdx - 1
                                    )
                                }
                                show={generalKnowledgeExpressTestIdx > 1000}
                            />
                            {randowGeneralKnowledgeExpressTestData.length > 0 && (
                                <GeneralKnowledgeExpressTestCard
                                    randowGeneralKnowledgeExpressTestData={
                                        randowGeneralKnowledgeExpressTestData[generalKnowledgeExpressTestIdx]
                                    }
                                    index={generalKnowledgeExpressTestIdx}
                                    generalKnowledgeExpressTestQuestionQty={
                                        randowGeneralKnowledgeExpressTestData.length
                                    }
                                    selectedAnswer={
                                        selectedAnswers[
                                            generalKnowledgeExpressTestIdx + 1
                                        ]
                                    }
                                    onSelectAnswer={(answerIdx) =>
                                        handleAnswerSelect(
                                            generalKnowledgeExpressTestIdx + 1,
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
                                    setGeneralKnowledgeExpressTestIdx(
                                        generalKnowledgeExpressTestIdx + 1
                                    )
                                }
                                show={
                                    generalKnowledgeExpressTestIdx <
                                        randowGeneralKnowledgeExpressTestData.length - 1 &&
                                    selectedAnswers[
                                        generalKnowledgeExpressTestIdx + 1
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            randowGeneralKnowledgeExpressTestData.length
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

export default GeneralKnowledgeExpressTest;
