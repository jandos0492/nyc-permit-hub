import React, { useEffect, useState } from "react";
import LearnCard from "./LearnCard";
import "./AutoLearnPage.css";
import { InfinitySpin } from "react-loader-spinner";

const AutoLearnPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/auto/english");
                    const result = await response.json();
                    setData(result);
                    setLoading(false);
            } catch (err) {
                console.error("Error fetching the Auto Learn data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <div className="loading">
            <InfinitySpin
                width='200'
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
                    image={learnCard.image}
                />
            ))}
        </div>
    )
}

export default AutoLearnPage;