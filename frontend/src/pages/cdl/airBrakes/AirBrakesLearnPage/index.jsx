import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import AirBrakesLearnCard from "./AirBrakesLearnCard";
import * as cdlService from "services/cdl";

const AirBrakesLearnPage = () => {
    const [airBrakesLearnData, setAirBrakesLearnData] = useState(
        []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [airBrakesLearnIdx, setAirBrakesLearnIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getAirBrakes();
            const data = await response.json();
            setAirBrakesLearnData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && airBrakesLearnIdx > 0) {
                setAirBrakesLearnIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                airBrakesLearnIdx < airBrakesLearnData.length - 1
            ) {
                setAirBrakesLearnIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [airBrakesLearnIdx, airBrakesLearnData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                airBrakesLearnData.length > 0 && (
                    <div className="bg-cyan-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setAirBrakesLearnIdx(
                                        airBrakesLearnIdx - 1
                                    )
                                }
                                show={airBrakesLearnIdx > 0}
                            />
                            <AirBrakesLearnCard
                                airBrakesLearn={
                                    airBrakesLearnData[
                                        airBrakesLearnIdx
                                    ]
                                }
                                airBrakesLearnQuestionQty={
                                    airBrakesLearnData.length
                                }
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setAirBrakesLearnIdx(
                                        airBrakesLearnIdx + 1
                                    )
                                }
                                show={
                                    airBrakesLearnIdx <
                                    airBrakesLearnData.length - 1
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default AirBrakesLearnPage;
