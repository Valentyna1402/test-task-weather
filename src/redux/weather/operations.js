import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherToday = createAsyncThunk(
  "weather/fetchWeatherToday",
  async (city) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchWeatherPeriod = createAsyncThunk(
  "weather/fetchWeatherPeriod",
  async (city, startDate, endDate) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${city}/14-03-2024/20-03-2024?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
