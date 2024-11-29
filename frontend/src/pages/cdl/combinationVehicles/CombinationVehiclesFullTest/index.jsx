import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CombinationVehiclesFullTestCard from "./CombinationVehiclesFullTestCard";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import ResultModal from "shared-components/ResultModal";
import * as cdlService from "services/cdl";
import * as testResult from "services/testResult";

const CombinationVehiclesFullTest = () => {
    const [combinationVehiclesFullTestData, setCombinationVehiclesFullTestData] =
        useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [combinationVehiclesFullTestIdx, setCombinationVehiclesFullTestIdx] =
        useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        (async () => {
            const response = await cdlService.getCombinationVehicles();
            const data = await response.json();
            setCombinationVehiclesFullTestData(data);
            setIsLoading(false);
        })();
    }, []);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(calculatePercentage()),
            vehicleType: "cdl",
            testType: "combination vehicles full test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass: calculatePercentage() >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && combinationVehiclesFullTestIdx > 0) {
                setCombinationVehiclesFullTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                combinationVehiclesFullTestIdx <
                    combinationVehiclesFullTestData.length - 1 &&
                selectedAnswers[
                    combinationVehiclesFullTestData[combinationVehiclesFullTestIdx].id
                ] !== undefined
            ) {
                setCombinationVehiclesFullTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        combinationVehiclesFullTestIdx,
        combinationVehiclesFullTestData.length,
        selectedAnswers,
        combinationVehiclesFullTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));
    };

    const calculatePercentage = () => {
        const totalQuestions = combinationVehiclesFullTestData.length;
        const percentage = (countCorrectAnswers / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                combinationVehiclesFullTestData.length > 0 && (
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className=" flex flex-col items-center bg-cyan-50 h-screen pt-20 md:pt-48"
                    >
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setCombinationVehiclesFullTestIdx(
                                        combinationVehiclesFullTestIdx - 1
                                    )
                                }
                                show={combinationVehiclesFullTestIdx > 1000}
                            />
                            <CombinationVehiclesFullTestCard
                                combinationVehiclesFullTestCard={
                                    combinationVehiclesFullTestData[
                                        combinationVehiclesFullTestIdx
                                    ]
                                }
                                combinationVehiclesFullTestQuestionQty={
                                    combinationVehiclesFullTestData.length
                                }
                                selectedAnswer={
                                    selectedAnswers[
                                        combinationVehiclesFullTestData[
                                            combinationVehiclesFullTestIdx
                                        ].id
                                    ]
                                }
                                onSelectAnswer={(answerIdx) =>
                                    handleAnswerSelect(
                                        combinationVehiclesFullTestData[
                                            combinationVehiclesFullTestIdx
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
                                    setCombinationVehiclesFullTestIdx(
                                        combinationVehiclesFullTestIdx + 1
                                    )
                                }
                                show={
                                    combinationVehiclesFullTestIdx <
                                        combinationVehiclesFullTestData.length -
                                            1 &&
                                    selectedAnswers[
                                        combinationVehiclesFullTestData[
                                            combinationVehiclesFullTestIdx
                                        ].id
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            combinationVehiclesFullTestData.length
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

export default CombinationVehiclesFullTest;
