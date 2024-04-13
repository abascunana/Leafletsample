import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {
  GiCarSeat,
  GiParkBench,
  
} from "react-icons/gi";

import { FaParking, FaCarSide} from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  CAR,
  PARKING,
  FAR,
  MID,
  NEAR
} from "../../consts";

export const determineIcon = ({ type, major }, zoom) => {
  switch (type) {
    case CAR:
      if (zoom >= FAR || major) {
        return car;
      } else {
        return null;
      }
    case PARKING:
      if (zoom >= FAR || major) {
        return parking;
      } else {
        return null;
      }

    default:
      console.error("Invalid Type", type);
      return null;
  }
};

export const car = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <FaCarSide />
      </div>
    </IconContext.Provider>
  ),
});

export const parking = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <FaParking/>
      </div>
    </IconContext.Provider>
  ),
});

export const unknown = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(
    <IconContext.Provider value={{ size: "2em" }}>
      <div>
        <GiParkBench />
      </div>
    </IconContext.Provider>
  ),
});
