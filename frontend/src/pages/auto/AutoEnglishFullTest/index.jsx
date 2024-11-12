import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoEnglishFullTestCard from "./AutoEnglishFullTestCard";
import * as englishTestService from "services/autoLearn";

const AutoEnglishFullTest = () => {
    const [englishFullTestData, setEnglishFullTestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [englishFullTestIdx, setEnglishFullTestIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0)

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await englishTestService.getLearnEnglish();
            const data = await response.json();
            setEnglishFullTestData(data);
            setIsLoading(false);
        })();
    }, []);

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

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                englishFullTestData.length > 0 && (
                    <div className="bg-teal-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setEnglishFullTestIdx(
                                        englishFullTestIdx -1
                                    )
                                }
                                show={
                                    englishFullTestIdx > 1000 
                                }
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
                    </div>
                )
            )}
        </>
    );
};

export default AutoEnglishFullTest;
