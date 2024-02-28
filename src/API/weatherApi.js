import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = BASE_URL;

export const fetchWeatherForTrip = (city, date1, date2) => async dispatch => {
    try {
      const response = await axios.get(`/${city}/${date1}/${date2}?unitGroup=metric&amp;include=days&amp;key=${API_KEY}&amp;contentType=json`);
      return response.data;
    } catch (e) {}
  };

 export const fetchWeatherForToday = (city) => async dispatch => {
    try {
      const response = await axios.get(`/${city}/today?unitGroup=metric&amp;include=days&amp;key=${API_KEY}&amp;contentType=json`);
      return response.data;
    } catch (e) {}
  };