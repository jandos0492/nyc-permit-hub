import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import "./ResultPage.css";

const ResultsPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/users/${userId}/results`);
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Results data: ", err);
                setLoading(false);
            }
        }
        fetchData();
    }, [userId]);

    if (loading) {
        return <div className="loading">
            <InfinitySpin
                width="200"
                color="white"
            />
        </div>
    }

    return (
        <div className="result-page-container">
            <div className="result-cards">
                {data?.map((resultCard, index) => (
                    <div key={resultCard.id} className={`result-card ${resultCard.pass ? "result-pass" : "result-fail"}`}>
                        <p>Date: {new Date(resultCard.createdAt).toLocaleDateString()}</p>
                        <p>Time: {new Date(resultCard.createdAt).toLocaleTimeString()}</p>
                        <p>Score: {resultCard.score}%</p>
                        <p>Status: {resultCard.pass ? "Passed" : "Failed"}</p>
                        <p>Test type: {`${resultCard.vehicleType} ${resultCard.testType}`}</p>
                        <p>Language: {resultCard.testLanguage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultsPage;