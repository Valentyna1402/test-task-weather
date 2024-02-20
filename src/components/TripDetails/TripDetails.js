export const TripDetails = ({ selectedTrip }) => {
     // Fetch weather data for selectedTrip using API (OpenWeatherMap)
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
              <p>Temperature</p>
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