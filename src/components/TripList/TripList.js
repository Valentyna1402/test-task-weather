import { useSelector } from "react-redux";
import { selectFilter, selectTrips } from "../../redux/trips/selectors";
import cities from "../../data/citiesList";

export const TripList = () => {
  const {trips} = useSelector(selectTrips);
  const filter = useSelector(selectFilter);

  const visibleTrips = trips.filter(trip => {
    const hasTrip = trip.city
      .toLowerCase()
      .includes(filter.toLowerCase());
    return hasTrip;
  });

  console.log()
  return (
    <ul>
      {visibleTrips.map((trip) => {
        const { urlImg } = cities.find((city) => city.city === trip.city);
       return <li
          key={trip.startDate}
        >
          <div>
            <img alt={trip.city} src={urlImg} width={200} />
            <div>
              <p>{trip.city}</p>
              <p>{trip.startDate}-{trip.endDate}</p>
            </div>
          </div>
        </li>
})}
    </ul>
  );
};
