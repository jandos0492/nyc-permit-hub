import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import NavButton from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish/NavButton";
import GeneralKnowledgePageCard from "./GeneralKnowledgePageCard";
import * as cdlService from "services/cdl";

const GeneralKnowledgeLearnPage = () => {
    const [generalKnowledgeLearnData, setGeneralKnowledgeLearnData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [generalKnowledgeLearnIdx, setGeneralKnowledgeLearnIdx] = useState(0);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await cdlService.getGeneralKnowledge();
            const data = await response.json();
            setGeneralKnowledgeLearnData(data);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && generalKnowledgeLearnIdx > 0) {
                setGeneralKnowledgeLearnIdx((prevIdx) => prevIdx - 1);
            } else if (
                event.key === "ArrowRight" &&
                generalKnowledgeLearnIdx < generalKnowledgeLearnData.length - 1
            ) {
                setGeneralKnowledgeLearnIdx((prevIdx) => prevIdx + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [generalKnowledgeLearnIdx, generalKnowledgeLearnData.length]);

    return (
        <>
            <NavBar />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                generalKnowledgeLearnData.length > 0 && (
                    <div className="bg-teal-50 h-screen pt-20 md:pt-48">
                        <div className="flex justify-center items-center">
                            <NavButton
                                icon="fa-circle-chevron-left"
                                onClick={() =>
                                    setGeneralKnowledgeLearnIdx(generalKnowledgeLearnIdx - 1)
                                }
                                show={generalKnowledgeLearnIdx > 0}
                            />
                            <GeneralKnowledgePageCard
                                generalKnowledgeLearn={
                                    generalKnowledgeLearnData[generalKnowledgeLearnIdx]
                                }
                                generalKnowledgeLearnQuestionQty={
                                    generalKnowledgeLearnData.length
                                }
                            />
                            <NavButton
                                icon="fa-circle-chevron-right"
                                onClick={() =>
                                    setGeneralKnowledgeLearnIdx(generalKnowledgeLearnIdx + 1)
                                }
                                show={
                                    generalKnowledgeLearnIdx <
                                    generalKnowledgeLearnData.length - 1
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default GeneralKnowledgeLearnPage;
