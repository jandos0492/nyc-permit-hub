import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Example = () => {
    const isAuthenticated = useSelector((state) => Boolean(state.session.user));
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    // If the user is authenticated, render the children
    return (
        <div>
            {isAuthenticated && <div>Hello world</div>}
        </div>
    );
};

export default Example;
