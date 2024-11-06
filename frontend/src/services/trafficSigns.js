import apiFetch from "./apiFetch";

export const getTrafficSigns = () => apiFetch("GET", "/api/auto/traffic-signs");

export const getTrafficSignsById = ({ id }) => apiFetch("GET", `/api/auto/traffic-signs/${id}`)