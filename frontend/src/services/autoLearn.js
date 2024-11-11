import apiFetch from "./apiFetch";

export const getLearnEnglish = () => apiFetch("GET", "/api/auto/english");

export const getLearnRussian = () => apiFetch("GET", "/api/auto/russian");