import React, { useState, useEffect } from "react";
import LearnCard from "./LearnCard";
import { InfinitySpin } from "react-loader-spinner";

const CDLCombinationVehiclesLearnPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/cdl/combination-vehicles");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the CDL Combination Vehicles Learn data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin
                    width="200"
                    color="white"
                />
            </div>
        );
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

export default CDLCombinationVehiclesLearnPage;