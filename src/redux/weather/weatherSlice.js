import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherPeriod } from "./operations";

// const initialState = {
//   weather: null,
//   loading: false,
//   error: null,
// };

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null
  },
  reducers: {
    // addWeather: {
    //   reducer(state, action) {
    //     state.weather = action.payload;
    //   }},
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchWeather.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
      .addCase(fetchWeatherPeriod.fulfilled, (state, action) => {
        //state.loading = false;
        state.weather = action.payload;
      })
    //   .addCase(fetchWeather.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message || "An error occurred";
    //   });
  },
});

export const { addWeather } = weatherSlice.actions;


