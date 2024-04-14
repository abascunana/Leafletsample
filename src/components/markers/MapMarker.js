import { Marker, Popup, Tooltip } from "react-leaflet";

import { determineIcon } from "./icons/Icons";

const MapMarker = ({ marker, zoom, index }) => {
  const { name, type, location, description, link, major } = { ...marker };
  let icon = determineIcon({ type, major }, zoom);

  return !!icon ? (
    <Marker position={location} icon={icon} id={index + name}>
        <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
        {description}
      </Tooltip>
    </Marker>
  ) : null;
};

export default MapMarker;
