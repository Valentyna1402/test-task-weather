import { useDispatch, useSelector } from "react-redux";
import { selectWeather, selectedTrip } from "../../redux/trips/selectors"
import { fetchWeatherPeriod, fetchWeatherToday } from "../../redux/weather/operations";
import { useEffect } from "react";

export const TripDetails = () => {
    const dispatch = useDispatch();
    const currentTrip = useSelector(selectedTrip);
    const currentWeather = useSelector(selectWeather);

    //const {city, startDate, endDate} = currentTrip;
    //console.log(currentTrip.startDate, currentTrip.endDate)

    useEffect(() => {
        if (currentTrip) {
            
         dispatch(fetchWeatherPeriod(currentTrip.city, currentTrip.startDate, currentTrip.endDate));
         //console.log(weatherData())

        }
      }, [currentTrip, dispatch]);
  // Display weather forecast for each day of the trip
  // Show countdown timer to trip start date
    return(
        <div>
            <div>
        <p>Week</p>
        <ul>
          <li>
            <div>
              <p>Day</p>
              <svg width={5} height={5}></svg>
              {/* <p>{currentWeather.days[0].tempmin}</p> */}
            </div>
          </li>
        </ul>
        </div>
        <div>
            <svg width={5} height={5}></svg>
            <p>Day</p>
            <svg width={5} height={5}></svg>
            <p>Temp</p>
            <p>City</p>
            <div>Timer</div>
        </div>
        </div>
    )
}