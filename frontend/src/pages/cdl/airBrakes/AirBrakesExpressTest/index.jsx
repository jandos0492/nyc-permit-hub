import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AirBrakesExpressTestCard from "./AirBrakesExpressTestCard";
import ResultModal from "shared-components/ResultModal";
import * as cdlService from "services/cdl";
import * as testResult from "services/testResult";

const AirBrakesExpressTest = () => {
    const [
        airBrakesExpressTestData,
        setAirBrakesExpressTestData,
    ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [airBrakesExpressTestIdx, setAirBrakesExpressTestIdx] =
        useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [
        randowAirBrakesExpressTestData,
        setRandowAirBrakesExpressTestData,
    ] = useState([]);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const userId = useSelector((state) => state?.session?.user?.id);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getAirBrakes();
            const data = await response.json();
            setAirBrakesExpressTestData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (airBrakesExpressTestData.length > 0) {
            const shuffledArray = [...airBrakesExpressTestData].sort(
                () => Math.random() - 0.5
            );
            const randomData = shuffledArray.slice(0, 30);
            setRandowAirBrakesExpressTestData(randomData);
        }
    }, [airBrakesExpressTestData]);

    const handleSubmit = () => {
        testResult.sendTestResult({
            userId,
            score: String(
                (
                    (correct / randowAirBrakesExpressTestData.length) *
                    100
                ).toFixed(0)
            ),
            vehicleType: "cdl air brakes",
            testType: "express test",
            testLanguage:
                "https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/english-flag.jpg",
            pass:
                ((correct / randowAirBrakesExpressTestData.length) * 100).toFixed(
                    0
                ) >= 70,
            requiredScore: "70",
        });

        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                event.key === "ArrowLeft" &&
                randowAirBrakesExpressTestData.length > 0
            ) {
                setAirBrakesExpressTestIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                airBrakesExpressTestIdx <
                    randowAirBrakesExpressTestData.length - 1 &&
                selectedAnswers[airBrakesExpressTestIdx + 1] !==
                    undefined
            ) {
                setAirBrakesExpressTestIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        airBrakesExpressTestIdx,
        randowAirBrakesExpressTestData.length,
        selectedAnswers,
        randowAirBrakesExpressTestData,
    ]);

    const handleAnswerSelect = (questionId, answerIdx) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answerIdx,
        }));

        const isCorrect =
            randowAirBrakesExpressTestData[airBrakesExpressTestIdx]
                .correctAnswerIndex === answerIdx;

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
                randowAirBrakesExpressTestData.length > 0 && (
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
                                                randowAirBrakesExpressTestData.length) *
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
                                    setAirBrakesExpressTestIdx(
                                        airBrakesExpressTestIdx - 1
                                    )
                                }
                                show={airBrakesExpressTestIdx > 1000}
                            />
                            {randowAirBrakesExpressTestData.length > 0 && (
                                <AirBrakesExpressTestCard
                                    randowAirBrakesExpressTestData={
                                        randowAirBrakesExpressTestData[
                                            airBrakesExpressTestIdx
                                        ]
                                    }
                                    index={airBrakesExpressTestIdx}
                                    airBrakesExpressTestQuestionQty={
                                        randowAirBrakesExpressTestData.length
                                    }
                                    selectedAnswer={
                                        selectedAnswers[
                                            airBrakesExpressTestIdx + 1
                                        ]
                                    }
                                    onSelectAnswer={(answerIdx) =>
                                        handleAnswerSelect(
                                            airBrakesExpressTestIdx + 1,
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
                                    setAirBrakesExpressTestIdx(
                                        airBrakesExpressTestIdx + 1
                                    )
                                }
                                show={
                                    airBrakesExpressTestIdx <
                                        randowAirBrakesExpressTestData.length -
                                            1 &&
                                    selectedAnswers[
                                        airBrakesExpressTestIdx + 1
                                    ] !== undefined
                                }
                            />
                        </div>
                        {selectedAnswers.hasOwnProperty(
                            randowAirBrakesExpressTestData.length
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
                        navigate("/cdl/air-brakes");
                    }}
                    score={(
                        (correct / randowAirBrakesExpressTestData.length) *
                        100
                    ).toFixed(0)}
                />
            )}
        </>
    );
};

export default AirBrakesExpressTest;
