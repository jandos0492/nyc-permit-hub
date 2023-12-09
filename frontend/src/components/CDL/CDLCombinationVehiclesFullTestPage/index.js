import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CDLCombinationVehiclesFullTestCard from "./CDLCombinationVehiclesFullTestCard";
import { InfinitySpin } from "react-loader-spinner";

const CDLCombinationVehiclesFullTestPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/cdl/combination-vehicles");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the CDL Combination Vehicles Full Test data", err);
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const xsrfToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN"))
            .split("=")[1];
        
        try {
            await fetch(`/api/users/${userId}/results`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "XSRF-TOKEN": xsrfToken,
                },
                body: JSON.stringify({
                    score: String(calculatePercentage()),
                    userId,
                    vehicleType: "CDL Combination Vehicles",
                    testType: "Full test",
                    testLanguage: "English",
                }),
            });
        } catch (err) {
            console.error("Error adding result from the CDLCombinationVehiclesFullTestPage: ", err);
        }

        setSubmitted(true);
    }

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
        const totalQuestions = data.length;
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
            );
        } else if (submitted && percentage < 80) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-fail">
                        You failed. Your score is: {percentage}%. You need to get at least 80% to pass the test.
                    </span>
                </div>
            );
        } else {
            return null;
        }
    };

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin
                    width="200"
                    color="white"
                />
            </div>
        );
    }

    return (
        <div className="test-page">
            {renderResultMessage()}
            <div className="test-page__card-list">
                <form onSubmit={handleSubmit}>
                    {data?.map((testCard, index) => (
                        <CDLCombinationVehiclesFullTestCard
                            key={testCard.id}
                            data={testCard}
                            submitted={submitted}
                            onAnswerSubmit={(isAnswerCorrect) => handleAnswerSubmit(isAnswerCorrect, index)}
                        />
                    ))}
                    <button
                        type="submit"
                        disabled={submitted}
                        className="test-page__submit-btn"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CDLCombinationVehiclesFullTestPage