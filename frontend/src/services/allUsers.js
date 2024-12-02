import apiFetch from "./apiFetch";

export const getAllUsers = () => apiFetch("GET", "/api/all-users");