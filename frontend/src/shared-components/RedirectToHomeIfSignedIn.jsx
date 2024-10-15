import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectToHomeIfSignedIn = ({ children }) => {
    const username = useSelector((state) => state.session.user?.username);
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            navigate("/home");
        }
    }, [username, navigate]);
    
    return children
};

export default RedirectToHomeIfSignedIn;