import React, { useState, useEffect } from "react";
import CDLAirBrakesExpressTestCard from "./CDLAirBrakesExpressTestCard";
import { InfinitySpin } from "react-loader-spinner";

const CDLAirBrakesExpressTestPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length).fill(null));
    const [randomData, setRandomData] = useState([]);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/cdl/air-brakes");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the CDL General Knowledge Express Test data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if (selectedAnswers.every(answer => answer === null)) {
            return setErrors(["Pleasee answer all questions."]);
        }

        setSubmitted(true);
    };

    useEffect(() => {
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const randomGeneralKnowledgeData = shuffledArray.slice(0, 30);
        setRandomData(randomGeneralKnowledgeData);
    }, [data]);

    useEffect(() => {
        if (submitted) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [submitted]);

    const handleAnswerSubmit = (isAnswerCorrect, index) => {
        if (isAnswerCorrect) {
            setCorrectAnswerCount((prevCount) => prevCount + 1);
        }

        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = isAnswerCorrect;
            return newAnswers;
        });
    };

    const calculatePercentage = () => {
        const totalQuestions = randomData.length;
        const percentage = (correctAnswerCount / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    const renderResultMessage = () => {
        const percentage = calculatePercentage();
        if (submitted && percentage >= 80) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-pass">
                        Congratulations! You passed the test. Your score is: {percentage}%.
                    </span>
                </div>
            )
        } else if (submitted && percentage < 80) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-fail">
                        You failed. Your score is: {percentage}%. You need to get at least 80% to pass the test.
                    </span>
                </div>
            )
        } else {
            return null;
        }
    };

    if (loading) {
        return <div className="loading">
            <InfinitySpin
                width="200"
                color="white"
            />
        </div>
    }

    return (
        <div className="test-page">
            {renderResultMessage()}
            <div className="test-page__card-list">
                <form onSubmit={handleSubmit}>
                    {randomData?.map((testCard, index) => (
                        <CDLAirBrakesExpressTestCard
                            key={testCard.id}
                            data={testCard}
                            submitted={submitted}
                            index={index}
                            onAnswerSubmit={(isAnswerCorrect) => handleAnswerSubmit(isAnswerCorrect, index)}
                        />
                    ))}
                    <button type="submit" disabled={submitted} className="test-page__submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CDLAirBrakesExpressTestPage;