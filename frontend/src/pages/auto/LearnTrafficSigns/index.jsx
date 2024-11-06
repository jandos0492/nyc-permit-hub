import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as trafficSignsService from "services/trafficSigns";

const TrafficSignsPage = () => {
    const [trafficSignsData, setTrafficSignsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await trafficSignsService.getTrafficSigns();
            const data = await response.json();
            setTrafficSignsData(data);
            setIsLoading(false);
        })();
    }, []);

    console.log(trafficSignsData);
};

export default TrafficSignsPage;