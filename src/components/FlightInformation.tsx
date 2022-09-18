import { FC } from "react";
interface IFlightInformation {
  info: number;
}

export const FlightInformation: FC<IFlightInformation> = ({ info }) => {
  return <div className="Flight-InfoBox">{info} Transfer</div>;
};
