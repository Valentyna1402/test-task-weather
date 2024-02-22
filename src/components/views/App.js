import { store } from "../../redux/store";
import { Provider } from "react-redux";

import { SearchBar } from "../SearchBar/SearchBar";
import { TripList } from "../TripList/TripList";
import { AddTripModal } from "../AddTripModal/AddTripModal";
import { TripDetails } from "../TripDetails/TripDetails";
import { useState } from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          Weather <b>Forecast</b>
        </h1>
        <div>
          <SearchBar />
          <div>
            <TripList />
            <button>
              <svg width={5} height={5}></svg>
              <p>Add trip</p>
            </button>
          </div>
        </div>
          <TripDetails />
        <AddTripModal />
      </div>
    </Provider>
  );
}

export default App;
