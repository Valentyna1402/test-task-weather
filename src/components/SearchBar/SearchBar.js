import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/trips/selectors";
import { updateFilter } from "../../redux/trips/filterSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <form>
      <button>
        <svg width={5} height={5}></svg>
      </button>
      <input
        placeholder="Search your trip"
        value={filter}
        onChange={(evt) => dispatch(updateFilter(evt.target.value))}
      />
    </form>
  );
};
