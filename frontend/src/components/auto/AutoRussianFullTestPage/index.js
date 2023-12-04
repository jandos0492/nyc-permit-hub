import React, { useState, useEffect } from "react";
import AutoRussianFullTestCard from "./AutoRussianFullTestCard";
import { InfinitySpin } from "react-loader-spinner";

const AutoRussianFullTestPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length).fill(null));
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/auto/russian");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Auto Russian Full Test data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if (selectedAnswers.every(answer => answer === null)) {
            return setErrors(["Пожалуйста, ответьте на все вопросы."]);
        }

        setSubmitted(true);
    };

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
        const totalQuestions = data.length;
        const percentage = (correctAnswerCount / totalQuestions) * 100;
        return percentage.toFixed(0);
    };

    const renderResultMessage = () => {
        const percentage = calculatePercentage();
        if (submitted && percentage >= 70) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-pass">
                        Поздравляем! Вы успешно прошли тест. Ваш результат: {percentage}%.
                    </span>
                </div>
            );
        } else if (submitted && percentage < 70) {
            return (
                <div className="test-page-result">
                    <span className="test-page__result-fail">
                        Вы не прошли тест! Ваш результат: {percentage}%. Вам нужно набрать 70% и более, чтобы пройти тест.
                    </span>
                </div>
            )
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
                    {errors && (
                        <div>{errors[0]}</div>
                    )}
                    {data?.map((testCard, index) => (
                        <AutoRussianFullTestCard
                            key={testCard.id}
                            data={testCard}
                            submitted={submitted}
                            onAnswerSubmit={(isAnswerCorrect) => handleAnswerSubmit(isAnswerCorrect, index)}
                        />
                    ))}
                    <button
                        className="test-page__submit-btn"
                        type="submit"
                        disabled={submitted}
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AutoRussianFullTestPage;