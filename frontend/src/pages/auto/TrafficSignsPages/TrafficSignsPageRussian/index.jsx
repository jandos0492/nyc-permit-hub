import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import TrafficSignCard from "./TrafficSignCard";
import NavButton from "../TrafficSignsPageEnglish/NavButton";
import * as trafficSignsService from "services/trafficSigns";

const TrafficSignsPageRussian = () => {
    const [trafficSignsData, setTrafficSignsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [trafficSignIdx, setTrafficSignIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await trafficSignsService.getTrafficSigns();
            const data = await response.json();
            setTrafficSignsData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && trafficSignIdx > 0) {
                setTrafficSignIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                trafficSignIdx < trafficSignsData.length - 1
            ) {
                setTrafficSignIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [trafficSignIdx, trafficSignsData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                trafficSignsData.length > 0 && (
                    <div className="bg-teal-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setTrafficSignIdx(trafficSignIdx - 1)
                                }
                                show={trafficSignIdx > 0}
                            />
                            <TrafficSignCard
                                image={trafficSignsData[trafficSignIdx].image}
                                description={
                                    trafficSignsData[trafficSignIdx]
                                        .descriptionRussian
                                }
                                no={trafficSignsData[trafficSignIdx].no}
                                signsQty={trafficSignsData.length}
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setTrafficSignIdx(trafficSignIdx + 1)
                                }
                                show={
                                    trafficSignIdx < trafficSignsData.length - 1
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default TrafficSignsPageRussian;
