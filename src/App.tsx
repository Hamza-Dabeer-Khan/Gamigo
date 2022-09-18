import "./App.css";

import { FilterBox, FlightDataBox } from "./components";

const App = () => {
  return (
    <div className="App">
      <section className="main">
        <FilterBox />
        <FlightDataBox />
      </section>
    </div>
  );
};

export default App;
