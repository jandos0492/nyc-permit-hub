import React, { useState } from "react";

const CDLAirBrakesFullTestCard = ({ data, submitted, onAnswerSubmit }) => {
    const { no, question, answers, correctAnswerIndex } = data;
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
        const isAnswerCorrect = e.target.value === String(correctAnswerIndex);
        onAnswerSubmit(isAnswerCorrect);
    }

    const resultClass = submitted
        ? selectedAnswer === String(correctAnswerIndex)
            ? "test-page-card__result-correct"
            : "test-page-card__result-incorrect"
        : "";

    return (
        <div className="test-page-card">
            <h4 className="test-page-card__number">{no}</h4>
            <div className="test-page-card__content">
                <h3 className="test-page-card__question">{question}</h3>
                <div className="test-page-card__answers">
                    {answers?.map((answer, index) => (
                        <label key={index} className="test-page-card__label">
                            <input
                                type="radio"
                                name={`question-${no}`}
                                value={index}
                                checked={selectedAnswer === String(index)}
                                onChange={handleAnswerChange}
                                disabled={submitted}
                                required
                            />
                            {answer}
                        </label>
                    ))}
                </div>
                {submitted && (
                    <span className={`test-page-card__result ${resultClass}`}>
                        {selectedAnswer === String(correctAnswerIndex)
                            ? "Correct answer!"
                            : `Incoreect! The correct answer is: ${answers[correctAnswerIndex]}`
                        }
                    </span>
                )}
            </div>
        </div>
    );
};

export default CDLAirBrakesFullTestCard;