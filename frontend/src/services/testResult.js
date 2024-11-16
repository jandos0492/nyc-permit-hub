import apiFetch from "./apiFetch";

export const sendTestResult = ({ userId, score, vehicleType, testType, testLanguage, pass, requiredScore }) => apiFetch("POST", `/api/users/${userId}/results`, {
    userId,
    score,
    vehicleType,
    testType,
    testLanguage,
    pass,
    requiredScore
});