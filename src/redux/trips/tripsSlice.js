import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "trips",
  storage,
  whitelist: ["trips"],
};

export const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    trips: [
      { city: "Berlin", startDate: "14.03.2024", endDate: "28.03.2024" },
    ],
  },
  reducers: {
    addTrip: {
      reducer(state, action) {
        console.log(action.payload)
        state.push(action.payload);
      },

      prepare(city, startDate, endDate) {
        return {
          payload: {
            id: Math.random(),
            city,
            startDate,
            endDate,
          },
        };
      },
    },
    deleteTrip: {
      reducer(state, action) {
        return state.filter((trip) => trip.id !== action.payload);
      },
    },
  },
});

export const { addTrip, deleteTrip } = tripsSlice.actions;

export const getContacts = (state) => state.trips;
