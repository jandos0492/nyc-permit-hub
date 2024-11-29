import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "../TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AutoRussianLearnCard from "./AutoRussianLearnCard";
import * as russianLearnService from "services/autoLearn";

const AutoRussianLearn = () => {
    const [russianLearnData, setRussianLearnData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [russianLearnIdx, setRussianLearnIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await russianLearnService.getLearnRussian();
            const data = await response.json();
            setRussianLearnData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && russianLearnIdx > 0) {
                setRussianLearnIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                russianLearnIdx < russianLearnData.length - 1
            ) {
                setRussianLearnIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [russianLearnIdx, russianLearnData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                russianLearnData.length > 0 && (
                    <div className="bg-cyan-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setRussianLearnIdx(russianLearnIdx - 1)
                                }
                                show={russianLearnIdx > 0}
                            />
                            <AutoRussianLearnCard
                                autoRussianLearn={
                                    russianLearnData[russianLearnIdx]
                                }
                               russianLearnQuestionQty={
                                    russianLearnData.length
                                }
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setRussianLearnIdx(russianLearnIdx + 1)
                                }
                                show={
                                    russianLearnIdx <
                                    russianLearnData.length - 1
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default AutoRussianLearn;
