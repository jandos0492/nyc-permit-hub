import React, { useState } from "react" ;

const AutoExpressTestCard = ({ data, submitted, index, onAnswerSubmit }) => {
    const { no, question, answers, correctAnswerIndex, image } = data;
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
        const isAnswerCorrect = e.target.value === String(correctAnswerIndex);
        onAnswerSubmit(isAnswerCorrect);
    };

    const isImage = image !== null;

    const resultClass = submitted
        ? selectedAnswer === String(correctAnswerIndex)
            ? "test-page-card__result-correct"
            : "test-page-card__result-incorrect"
        : "";

    return (
        <div className="test-page-card">
            <h4 className="test-page-card__number">{index + 1}</h4>
            <div className="test-page-card__content">
                {isImage && <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Question" className="test-page-card__image" />}
                <h3 className="test-page-card__question">{question}</h3>
                <div className="test-page-card__answers">
                    {answers.map((answer, idx) => (
                        <label key={idx} className="test-page-card__label">
                            <input 
                                type="radio"
                                name={`question-${no}`}
                                value={idx}
                                checked={selectedAnswer === String(idx)}
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
                            : `Incorrect! The correct answer is: ${answers[correctAnswerIndex]}`
                        }
                    </span>
                )}
            </div>
        </div>
    );
};

export default AutoExpressTestCard;