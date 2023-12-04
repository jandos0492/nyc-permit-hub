import React from "react";

const LearnCard = ({ no, question, answer }) => {
    return (
        <article className="learn-card">
            <h4 className="learn-card__number">{no}</h4>
            <div className="learn-card__content">
                <h3 className="learn-card__question-section">Question:</h3>
                <p className="learn-card__question-text">{question}</p>
            </div>
            <div className="learn-card__answer-section">
                <h3 className="learn-card__answer">Answer:</h3>
                <p className="learn-card__answer-text">{answer}</p>
            </div>
        </article>
    );
};

export default LearnCard;