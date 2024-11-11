import apiFetch from "./apiFetch";

export const getGeneralKnowledge = () => apiFetch("GET", "/api/cdl/general-knowledge");

export const getAirBrakes = () => apiFetch("GET", "/api/cdl/air-brakes");

export const getCombinationVehicles = () => apiFetch("GET", "/api/cdl/combination-vehicles")