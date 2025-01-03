import apiFetch from "./apiFetch";

export const resetPasswordRequest = ({ email }) => apiFetch("POST", "/api/reset-password", {
    email
});

export const resetPassword = ({ token, password }) => apiFetch("POST", `/api/reset-password/${token}`, {
    password
});