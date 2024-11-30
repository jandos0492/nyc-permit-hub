import apiFetch from "./apiFetch";

export const getTestResults = ({ userId }) => apiFetch("GET", `/api/users/${userId}/results`);

export const sendTestResult = ({ userId, score, vehicleType, testType, testLanguage, pass, requiredScore }) => apiFetch("POST", `/api/users/${userId}/results`, {
    userId,
    score,
    vehicleType,
    testType,
    testLanguage,
    pass,
    requiredScore
});