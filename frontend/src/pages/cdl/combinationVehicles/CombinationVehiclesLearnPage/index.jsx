import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import CombinationVehiclesLearnCard from "./CombinationVehiclesLearnCard";
import * as cdlService from "services/cdl";

const CombinationVehiclesLearnPage = () => {
    const [combinationVehiclesLearnData, setCombinationVehiclesLearnData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [combinationVehiclesLearnIdx, setCombinationVehiclesLearnIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getCombinationVehicles();
            const data = await response.json();
            setCombinationVehiclesLearnData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && combinationVehiclesLearnIdx > 0) {
                setCombinationVehiclesLearnIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                combinationVehiclesLearnIdx < combinationVehiclesLearnData.length - 1
            ) {
                setCombinationVehiclesLearnIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [combinationVehiclesLearnIdx, combinationVehiclesLearnData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                combinationVehiclesLearnData.length > 0 && (
                    <div className="bg-cyan-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setCombinationVehiclesLearnIdx(combinationVehiclesLearnIdx - 1)
                                }
                                show={combinationVehiclesLearnIdx > 0}
                            />
                            <CombinationVehiclesLearnCard
                                combinationVehiclesLearn={
                                    combinationVehiclesLearnData[combinationVehiclesLearnIdx]
                                }
                                combinationVehiclesLearnQuestionQty={
                                    combinationVehiclesLearnData.length
                                }
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setCombinationVehiclesLearnIdx(combinationVehiclesLearnIdx + 1)
                                }
                                show={
                                    combinationVehiclesLearnIdx <
                                    combinationVehiclesLearnData.length - 1
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default CombinationVehiclesLearnPage;
