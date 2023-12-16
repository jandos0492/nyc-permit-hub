import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AutoExpressTestCard from "./AutoExpressTestCard";
import "./AutoExpressTestPage.css";
import { InfinitySpin } from "react-loader-spinner";

const AutoExpressTestPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [randomEnglishData, setRandomEnglishData] = useState([]);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/auto/english");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Auto Express Test data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const xsrfToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN"))
            .split("=")[1];

        try {
            await fetch(`http://localhost:3000/api/users/${userId}/results`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                body: JSON.stringify({
                    score: String(calculatePercentage()),
                    userId,
                    vehicleType: "Auto",
                    testType: "Express test",
                    testLanguage: "English",
                    pass: calculatePercentage() >= 70,
                    requiredScore: "70%",
                }),
            });
        } catch (err) {
            console.error("Error adding result from the AutoExpressTestPage:", err);
        }

        setSubmitted(true);
    };

    useEffect(() => {
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const randomData = shuffledArray.slice(0, 20);
        setRandomEnglishData(randomData);
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
    };

    const calculatePercentage = () => {
        const totalQuestions = randomEnglishData.length;
        const percentage = (correctAnswerCount / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    const renderResultMessage = () => {
        const percentage = calculatePercentage();
        if (submitted && percentage >= 70) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-pass">
                        Congratulations! You passed the test. Your score is: {percentage}%.
                    </span>
                </div>
            )
        } else if (submitted && percentage < 70) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-fail">
                        You failed. Your score is: {percentage}%. You need to get at least 70% to pass the test.
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
                    {randomEnglishData.map((testCard, index) => (
                        <AutoExpressTestCard
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

export default AutoExpressTestPage;