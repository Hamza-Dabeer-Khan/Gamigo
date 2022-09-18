import { useSelector } from "react-redux";
import { FlightInformation } from "./FlightInformation";

export const FlightDataBox = () => {
  const data = useSelector((state: any) => state.filters);

  return (
    <div className="Flight-DataBox">
      {data.filteredData.map((item: any) => {
        return (
          <FlightInformation key={item.id} info={item.transfers as number} />
        );
      })}
    </div>
  );
};
