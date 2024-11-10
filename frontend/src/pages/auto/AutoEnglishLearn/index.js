import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "../TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoEnglishLearnCard from "./AutoEnglishLearnCard";
import * as englishQuestionsAndAnswersService from "services/testEnglish";

const AutoEnglishLearn = () => {
    const [englishLearnData, setEnglishLearnData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [englishLearnIdx, setEnglishLearnIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await englishQuestionsAndAnswersService.getTestEnglish();
            const data = await response.json();
            setEnglishLearnData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && englishLearnIdx > 0) {
                setEnglishLearnIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" && englishLearnIdx < englishLearnData.length - 1
            ) {
                setEnglishLearnIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [englishLearnIdx, englishLearnData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                englishLearnData.length > 0 && (
                    <div className="bg-teal-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                                <NavButton
                                    icon="fa-circle-chevron-left"
                                    onClick={() =>
                                        setEnglishLearnIdx(englishLearnIdx - 1)
                                    }
                                    onKeyboardLeftClick={(e) => {
                                        if (e.key === "leftArrow") {
                                            setEnglishLearnIdx(englishLearnIdx - 1);
                                        }
                                    }}
                                    show={englishLearnIdx > 0}
                                />
                                <AutoEnglishLearnCard
                                    autoEnglishLearn={englishLearnData[englishLearnIdx]}
                                    englishLearnQuestionQty={englishLearnData.length}
                                />
                                <NavButton
                                    icon="fa-circle-chevron-right"
                                    onClick={() =>
                                        setEnglishLearnIdx(englishLearnIdx + 1)
                                    }
                                    show={
                                        englishLearnIdx < englishLearnData.length - 1
                                    }
                                />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default AutoEnglishLearn