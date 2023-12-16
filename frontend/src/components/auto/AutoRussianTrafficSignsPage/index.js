import React, { useState, useEffect } from "react";
import AutoRussianTrafficSignsCard from "./AutoRussianTrafficSignsCard";
import { InfinitySpin } from "react-loader-spinner";

const AutoRussianTrafficSignsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/auto/traffic-signs");
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
                <AutoRussianTrafficSignsCard
                    key={trafficSignsCard.id}
                    no={trafficSignsCard.no}
                    image={trafficSignsCard.image}
                    descriptionRussian={trafficSignsCard.descriptionRussian}
                />
            ))}
        </div>
    );
};

export default AutoRussianTrafficSignsPage;