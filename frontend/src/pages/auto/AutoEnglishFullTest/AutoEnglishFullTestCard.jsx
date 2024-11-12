import { useState, useEffect } from "react";
import clsx from "clsx";
import TestRadioButton from "shared-components/TestRadioButton";

const AutoEnglishFullTestCard = ({
    englishFullTestDataCard,
    englishFullTestQuestionQty,
    selectedAnswer,
    onSelectAnswer,
}) => {

    const [correctOrWrongAnswerMessage, setCorrectOrWrongAnswerMessage] = useState("");

    useEffect(() => {
        setCorrectOrWrongAnswerMessage("");

        if (englishFullTestDataCard.correctAnswerIndex === selectedAnswer && selectedAnswer !== undefined) {
            setCorrectOrWrongAnswerMessage("Correct")
        } else if (englishFullTestDataCard.correctAnswerIndex !== selectedAnswer && selectedAnswer !== undefined) {
            setCorrectOrWrongAnswerMessage("Wrong");
        }
    }, [englishFullTestDataCard.correctAnswerIndex, selectedAnswer])


    return (
        <div className="flex flex-col items-center">
            <div className="text-cyan-900 md:text-3xl mb-4 font-lato">
                {englishFullTestDataCard.no} / {englishFullTestQuestionQty}
            </div>
            <div className="border border-teal-800 rounded-lg p-4 md:p-12 flex flex-col items-center">
                {englishFullTestDataCard.image && (
                    <img
                        className="w-24 h-24 md:w-48 md:h-48 object-contain"
                        src={englishFullTestDataCard.image}
                        alt="auto english learn"
                    />
                )}
                <div className="flex flex-shrink justify-center w-48 md:w-96 mt-4 text-cyan-900 text-sm md:text-xl font-playfair font-bold text-center">
                    {englishFullTestDataCard.question}
                </div>
                <div className="mt-8 text-cyan-900 text-sm md:text-lg font-playfair flex flex-col items-start">
                    {englishFullTestDataCard.answers.map((answer, idx) => (
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
                            "font-lato text-3xl text-red-700 mt-4 italic",
                            correctOrWrongAnswerMessage === "Correct" &&
                                "text-green-700"
                        )}
                    >
                        {correctOrWrongAnswerMessage}
                    </div>
                )}
                {correctOrWrongAnswerMessage === "Wrong" && (
                    <div className="mt-2 flex flex-shrink justify-center w-48 md:w-96 text-green-700 text-sm md:text-xl font-playfair font-bold text-center">
                        {
                            englishFullTestDataCard.answers[
                                englishFullTestDataCard.correctAnswerIndex
                            ]
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoEnglishFullTestCard;

