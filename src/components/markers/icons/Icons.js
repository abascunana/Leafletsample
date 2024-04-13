import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import {
  GiCarSeat,
  GiParkBench,
  
} from "react-icons/gi";
import { IconContext } from "react-icons";
import {
  CAR,
  PARKING,
} from "../../consts";

export const determineIcon = ({ type, major }, zoom) => {
  switch (type) {
    case CAR:
        return car;
  
    case PARKING:
      if (zoom >= NEAR || major) {
        return village;
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
        <GiCarSeat />
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
