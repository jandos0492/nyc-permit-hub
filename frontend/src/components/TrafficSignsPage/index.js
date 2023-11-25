import React, { useState, useEffect } from "react";
import TrafficSignsCard from "./TrafficSignsCard";
import "./TrafficSignsPage.css";
import { InfinitySpin } from "react-loader-spinner";

const TrafficSignsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/auto/traffic-signs");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Auto Traffic signs data", err)
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
        <div className="traffic-signs-list-container">
            {data.map((trafficSignsCard) => (
                <TrafficSignsCard
                    key={trafficSignsCard.id}
                    no={trafficSignsCard.no}
                    image={trafficSignsCard.image}
                    descriptionEnglish={trafficSignsCard.descriptionEnglish}
                />
            ))}
        </div>
    );
};

export default TrafficSignsPage;