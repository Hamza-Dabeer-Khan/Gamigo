import { filters } from "../mock/FiltersData";
import { FilterItem } from "./FilterItem";

export const FilterBox = () => {
  return (
    <div className="Filter-Box">
      {filters?.map((filter) => {
        return <FilterItem key={filter.id} {...filter} />;
      })}
    </div>
  );
};
