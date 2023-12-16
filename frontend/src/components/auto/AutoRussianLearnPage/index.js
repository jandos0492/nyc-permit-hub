import React, { useState, useEffect } from "react";
import LearnRussianCard from "./LearnRussianCard";
import { InfinitySpin } from "react-loader-spinner";

const AutoRussianLearnPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/auto/russian");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Auto Russian Learn data", err);
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
            {data?.map((learnRussianCard) => (
                <LearnRussianCard
                    key={learnRussianCard.id}
                    no={learnRussianCard.no}
                    question={learnRussianCard.question}
                    answer={learnRussianCard.answers[learnRussianCard.correctAnswerIndex]}
                    image={learnRussianCard.image}
                />
            ))}
        </div>
    );
};

export default AutoRussianLearnPage;