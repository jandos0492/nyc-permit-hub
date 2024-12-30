import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import TrafficSignCard from "./TrafficSignCard";
import NavButton from "./NavButton";
import * as trafficSignsService from "services/trafficSigns";

const TrafficSignsPageEnglish = () => {
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

    // Func for switch the traffic signs card with right and left arrow using the keyboard
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
                    <div className="relative bg-cyan-50 h-screen pt-20 md:pt-48">
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
                                        .descriptionEnglish
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
                        {/* {trafficSignIdx === trafficSignsData.length - 1 && (
                            <Link
                                to="/auto/english/learn"
                                className="absolute top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-gradient-to-r from-teal-300 to-cyan-400 shadow-lg px-6 py-4 rounded-lg text-white text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    className="object-cover w-[80px] h-[80px] mb-2 rounded-full border-2 border-white shadow-sm"
                                    src="https://algify-videos.s3.us-east-2.amazonaws.com/nyc-permit-hub-images/learn.jpg"
                                    alt="Learn English"
                                />
                                <div className="font-bold text-lg">
                                    Learn All Questions
                                </div>
                            </Link>
                        )} */}
                    </div>
                )
            )}
        </>
    );
};

export default TrafficSignsPageEnglish;
