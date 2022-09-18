import { FC } from "react";

import { IFilterItem } from "../types/filters";
import { setFilter } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export const FilterItem: FC<IFilterItem> = (filter) => {
  const filtersData = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();
  return (
    <section className="Filter-Item">
      <input
        type="checkbox"
        checked={filtersData.filters.includes(filter.value)}
        onChange={() => dispatch(setFilter(filter.value))}
      />
      <p
        className="Filter-ItemText"
        onClick={() => dispatch(setFilter(filter.value))}
      >
        {filter.name}
      </p>
    </section>
  );
};
