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
    trips: [{ city: "Berlin", startDate: "14-03-2024", endDate: "20-03-2024" }],
    selectedTrip: null,
  },
  reducers: {
    addTrip: {
      reducer(state, action) {
        state.trips.push(action.payload);
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
    selectTrip: {
      reducer(state, action) {
        state.selectedTrip = action.payload;
      },
    },
  },
});

export const { addTrip, selectTrip } = tripsSlice.actions;

