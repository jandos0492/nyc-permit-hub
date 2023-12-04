import React, { useState, useEffect } from "react";
import CDLGeneralKnowledgeExpressTestCard from "./CDLGeneralKnowledgeExpressTestCard";
import { InfinitySpin } from "react-loader-spinner";

const CDLGeneralKnowledgeExpressTestPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(data.length).fill(null));
    const [randomData, setRandomData] = useState([]);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect = (() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/cdl/general-knowledge");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the CDL General Knowledge Express Test data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if (selectedAnswers.every(answer => answer === null)) {
            return setErrors(["Pleasee answer all questions."]);
        }

        setSubmitted(true);
    };

    useEffect(() => {
        const shuffledArray = [...data].sort(() => Math.random() - 0.5);
        const randomGeneralKnowledgeData = shuffledArray.slice(0, 50);
        setRandomData(randomGeneralKnowledgeData);
    }, [data]);
}