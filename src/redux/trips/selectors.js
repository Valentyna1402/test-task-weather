//import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = state => state.filter.filter;
export const selectTrips = state => state.trips;
export const selectedTrip = state => state.trips.selectedTrip;
export const selectWeather = state => state.weather;