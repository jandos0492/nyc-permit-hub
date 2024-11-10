import apiFetch from "./apiFetch";

export const getTestEnglish = () => apiFetch("GET", "/api/auto/english");