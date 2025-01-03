import apiFetch from "./apiFetch";

export const resetPassword = ({ email }) => apiFetch("POST", "/api/reset-password", {
    email
});