import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrips } from "../../redux/trips/selectors";
import { addTrip } from "../../redux/trips/tripsSlice";
import cities from "../../data/citiesList";

export const AddTripModal = () => {
  const dispatch = useDispatch();
  //const trips = useSelector(selectTrips);
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "city":
        return setCity(value);
      case "startDate":
        return setStartDate(value);
      case "endDate":
        return setEndDate(value);
      default:
        return;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTrip( city, startDate, endDate ));
    setCity(" ");
    setStartDate(" ");
    setEndDate(" ");
  };

  return (
    <div>
      <div>
        <p>Create trip</p>
        <button>
          <svg width={5} height={5}></svg>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">*City</label>
        <select
        name="city"
        value={city}
        onChange={handleChange}>
          <option value="" disabled >Please select a city</option>
          {cities.map((city) => {
           return <option key={city.id}>{city.city}</option>
          })}
        </select>
        <label htmlFor="startDate">*Start date</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          placeholder="Select date"
          onChange={handleChange}
        />
        <label htmlFor="endDate">*End date</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          placeholder="Select date"
          onChange={handleChange}
        />
        <div>
          <button>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
