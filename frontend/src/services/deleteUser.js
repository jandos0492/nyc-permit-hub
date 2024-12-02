import apiFetch from "./apiFetch";

export const deleteUser = ({ id }) => apiFetch("DELETE", `/api/users/${id}`);