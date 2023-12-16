import React, { useEffect, useState } from "react";
import LearnCard from "./LearnCard";
import { InfinitySpin } from "react-loader-spinner";

const CDLGeneralKnowledgeLearnPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/cdl/general-knowledge");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the CDL General Knowledge Learn data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">
            <InfinitySpin
                width="200"
                color="white"
            />
        </div>
    }

    return (
        <div className="learn-list-container">
            {data?.map((learnCard) => (
                <LearnCard
                    key={learnCard.id}
                    no={learnCard.no}
                    question={learnCard.question}
                    answer={learnCard.answers[learnCard.correctAnswerIndex]}
                />
            ))}
        </div>
    );
};

export default CDLGeneralKnowledgeLearnPage;