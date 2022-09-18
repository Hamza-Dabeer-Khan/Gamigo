import { combineReducers } from "redux";
import { flightsData } from "../mock/FlightData";
import { IFlightItem } from "../types/filters";

const filterReducer = (
  state: { filters: [number]; filteredData: IFlightItem[] } = {
    filters: [-1],
    filteredData: flightsData,
  },
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "SET_FILTER":
      if (!state.filters.includes(action?.payload as number)) {
        state.filters.push(action.payload as number);
      } else {
        state.filters.splice(
          state.filters.indexOf(action.payload as number),
          1
        );
      }

      if (state.filters.includes(-1)) {
        state.filteredData = flightsData;
      } else {
        let arr: IFlightItem[] = [];

        flightsData.map((data) => {
          if (state.filters.includes(data.transfers)) {
            arr.push(data);
          }
        });
        state.filteredData = arr;
      }
      return { filters: state.filters, filteredData: state.filteredData };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  filters: filterReducer,
});
export default allReducers;
