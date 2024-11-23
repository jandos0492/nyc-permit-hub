import { useState, useEffect } from "react";
import clsx from "clsx";
import TestRadioButton from "shared-components/TestRadioButton";

const AutoRussianExpressTestCard = ({
    randomRussianData,
    index,
    russianExpressTestQuestionQty,
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
            randomRussianData.correctAnswerIndex === selectedAnswer &&
            selectedAnswer !== undefined
        ) {
            setCorrectOrWrongAnswerMessage("Правильно");
        } else if (
            randomRussianData.correctAnswerIndex !== selectedAnswer &&
            selectedAnswer !== undefined
        ) {
            setCorrectOrWrongAnswerMessage("Ошибка");
        }
    }, [randomRussianData.correctAnswerIndex, selectedAnswer]);

    useEffect(() => {
        if (selectedAnswer === randomRussianData.correctAnswerIndex) {
            setCountCorrectAnswers((prevCount) => prevCount + 1);
        }
    }, [
        selectedAnswer,
        randomRussianData.correctAnswerIndex,
        setCountCorrectAnswers,
    ]);

    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {index + 1} / {russianExpressTestQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                {randomRussianData.image && (
                    <img
                        className="w-24 h-24 md:w-48 md:h-48 object-contain"
                        src={randomRussianData.image}
                        alt="auto english learn"
                    />
                )}
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl font-playfair font-bold text-center">
                    {randomRussianData.question}
                </div>
                <div className="mt-8 text-cyan-900 text-sm md:text-lg font-playfair flex flex-col items-start">
                    {randomRussianData.answers.map((answer, idx) => (
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
                            "font-lato text-3xl mt-4 italic px-4 py-2 rounded-lg shadow-md",
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
                        <div className="mt-2 flex justify-center text-center flex-shrink px-4 py-2 bg-green-50 border border-green-300 rounded-lg text-green-800 text-sm md:text-xl font-playfair font-bold shadow-sm">
                            {
                                randomRussianData.answers[
                                    randomRussianData.correctAnswerIndex
                                ]
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoRussianExpressTestCard;
