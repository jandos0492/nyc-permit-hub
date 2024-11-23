import { useState, useEffect } from "react";
import clsx from "clsx";
import TestRadioButton from "shared-components/TestRadioButton";

const AutoRussianFullTestCard = ({
    russianFullTestDataCard,
    russianFullTestQuestionQty,
    selectedAnswer,
    onSelectAnswer,
    countCorrectAnswers,
    setCountCorrectAnswers,
}) => {
    const [correctOrWrongAnswerMessage, setCorrectOrWrongAnswerMessage] =
        useState("");

    useEffect(() => {
        setCorrectOrWrongAnswerMessage("");

        if (
            russianFullTestDataCard.correctAnswerIndex === selectedAnswer &&
            selectedAnswer !== undefined
        ) {
            setCorrectOrWrongAnswerMessage("Правильно");
        } else if (
            russianFullTestDataCard.correctAnswerIndex !== selectedAnswer &&
            selectedAnswer !== undefined
        ) {
            setCorrectOrWrongAnswerMessage("Ошибка");
        }
    }, [russianFullTestDataCard.correctAnswerIndex, selectedAnswer]);

    useEffect(() => {
        if (selectedAnswer === russianFullTestDataCard.correctAnswerIndex) {
            setCountCorrectAnswers((prevCount) => prevCount + 1);
        }
    }, [
        selectedAnswer,
        russianFullTestDataCard.correctAnswerIndex,
        setCountCorrectAnswers,
    ]);

    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {russianFullTestDataCard.no} / {russianFullTestQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                {russianFullTestDataCard.image && (
                    <img
                        className="w-24 h-24 md:w-48 md:h-48 object-contain"
                        src={russianFullTestDataCard.image}
                        alt="auto russian learn"
                    />
                )}
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl font-playfair font-bold text-center">
                    {russianFullTestDataCard.question}
                </div>
                <div className="mt-8 text-cyan-900 text-sm md:text-lg font-playfair flex flex-col items-start">
                    {russianFullTestDataCard.answers.map((answer, idx) => (
                        <TestRadioButton
                            key={idx}
                            checked={selectedAnswer === idx}
                            onChange={() => onSelectAnswer(idx)}
                            disabled={selectedAnswer !== undefined}
                            label={answer}
                        />
                    ))}
                </div>
                {correctOrWrongAnswerMessage && (
                    <div
                        className={clsx(
                            "font-lato text-lg md:text-3xl mt-4 italic px-2 md:px-4 py-1 md:py-2 rounded-lg shadow-md",
                            correctOrWrongAnswerMessage === "Правильно"
                                ? "text-green-700 bg-green-100 border border-green-300"
                                : "text-red-700 bg-red-100 border border-red-300"
                        )}
                    >
                        {correctOrWrongAnswerMessage}
                    </div>
                )}
                {correctOrWrongAnswerMessage === "Ошибка" && (
                    <div className="mt-4 flex flex-col items-center">
                        <div className="text-red-700 text-lg md:text-2xl font-lato italic">
                            Упс! Правильный ответ:
                        </div>
                        {russianFullTestDataCard.answers[
                            russianFullTestDataCard.correctAnswerIndex
                        ].includes(".jpg") ? (
                            <img
                                className="w-12 md:w-20 h-auto rounded-md mt-2"
                                src={
                                    russianFullTestDataCard.answers[
                                        russianFullTestDataCard
                                            .correctAnswerIndex
                                    ]
                                }
                                alt="russian express test"
                            />
                        ) : (
                            <div className="mt-2 flex justify-center text-center px-4 py-2 bg-green-50 border border-green-300 rounded-lg text-green-800 text-sm md:text-xl font-playfair font-bold shadow-sm">
                                {
                                    russianFullTestDataCard.answers[
                                        russianFullTestDataCard
                                            .correctAnswerIndex
                                    ]
                                }
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoRussianFullTestCard;
