import axios from "axios";

import {REACT_APP_API_KEY, REACT_APP_BASE_URL} from 'process.env';
//const API_KEY = process.env.

axios.defaults.baseURL = REACT_APP_BASE_URL;

const fetchWeatherForTrip = (city, date1, date2) => async dispatch => {
    try {
      const response = await axios.get(`/${city}/${date1}/${date2}?unitGroup=metric&amp;include=days&amp;key=${REACT_APP_API_KEY}&amp;contentType=json`);
      return response.data;
    } catch (e) {}
  };

  const fetchWeatherForToday = (city) => async dispatch => {
    try {
      const response = await axios.get(`/${city}/today?unitGroup=metric&amp;include=days&amp;key=${REACT_APP_API_KEY}&amp;contentType=json`);
      return response.data;
    } catch (e) {}
  };