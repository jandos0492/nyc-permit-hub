import { useEffect } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

const ResultModal = ({ onClose, score }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            event.preventDefault();
            if (event.key === "Enter") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const location = useLocation();
    const isPass = score >= 70;

    const isRussian = location.pathname.includes("russian");

    const passOrFailMessage = isPass
        ? isRussian
            ? "Поздравляем! Вы сдали 🎉"
            : "Congratulations! You Passed 🎉"
        : isRussian
        ? "Вы не сдали 😔"
        : "You Failed 😔";

    const encouragementMessage = isPass
        ? isRussian
            ? "Отличная работа! Так держать."
            : "Great job! Keep up the good work."
        : isRussian
        ? "Не переживайте, продолжайте практиковаться, и в следующий раз вы обязательно сдадите!"
        : "Don’t worry, keep practicing and you’ll pass next time!";

    return (
        <div className="fixed top-0 left-0 bg-black/50 backdrop-blur-md h-full w-full flex justify-center items-center font-playfair z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-8 w-96 flex flex-col items-center">
                <h2
                    className={clsx(
                        "text-2xl font-bold mb-4 text-center",
                        isPass ? "text-green-600" : "text-red-600"
                    )}
                >
                    {passOrFailMessage}
                </h2>

                <div className="text-gray-800 text-center mb-6">
                    {!isPass && (
                        <>
                            <p className="text-lg font-medium">
                                {isRussian
                                    ? "Требуемый результат: "
                                    : "Required Score: "}
                                <span className="font-bold">70%</span>
                            </p>
                            <p className="text-lg font-medium">
                                {isRussian ? "Ваш результат: " : "Your Score: "}
                                <span className="font-bold">{score}%</span>
                            </p>
                        </>
                    )}
                    <p className="text-sm mt-2 text-gray-600">
                        {encouragementMessage}
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="w-full py-2 px-4 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 transition"
                >
                    {isRussian ? "Закрыть" : "Close"}
                </button>
            </div>
        </div>
    );
};

export default ResultModal;
