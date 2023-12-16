import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./ShowAllUsers.css";

const ShowAllUsers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/all-users");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Users data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>
            <InfinitySpin
                width="200"
                color="white"
            />
        </div>
    }

    return (
        <div className="users-page-container">
            <h1 className="header">{data.length} Users</h1>
            <div className="users-cards">
                {data?.map((userCard, index) => (
                    <div key={userCard.id} className="users-card">
                        <h4 className="test-page-card__number">{index + 1}</h4>
                        <p><strong>Username:</strong>{userCard.username}</p>
                        <p><strong>Email:</strong>{userCard.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowAllUsers;