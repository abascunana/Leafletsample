import {
  LayerGroup,
  LayersControl,
  Marker,
  Tooltip,
  Polyline,
  TileLayer,
} from "react-leaflet";
import {
  CAR,
  PARKING,
  UNKNOWN,
} from "../consts";
import { markers } from "../../data/markers";
import { arrows } from "../../data/borders";
import MapMarker from "./MapMarker";

const MapElements = ({ zoom, coords }) => {
  let parking = [];
  let car = [];
  markers.forEach((marker, index) => {
    switch (marker.type) {
      
      case PARKING:
        parking.push(MapMarker({ marker, zoom, index }));
        break;

        case CAR:
        if(window.location.href.endsWith("patricio")){
          marker.location = [-76,142]
        }
       else if(window.location.href.endsWith("bob")){
          marker.location = [-70.5,180]
        }
        else if(window.location.href.endsWith("calamardo")){
          marker.location = [-79,162.5]
        }
        else if(window.location.href.endsWith("holandes")){
          marker.location = [-47,66]
        }
        else{
          marker.location = [0,0]
        }
       
        car.push(MapMarker({ marker, zoom, index }));
        break;
      default:
        console.error("Invalid Location Type");
    }
  });
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Basemap">
        <TileLayer url="tiles/{z}/{x}/{y}.png" noWrap={true} />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay checked name="Indicaciones a salidas" id="Borders">
        <LayerGroup>
          <Polyline
            positions={arrows}
            pathOptions={{ color: "green", dashArray: "10" }}
          />
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay
        checked
        name="Aparcamientos"
        id="ParkingsLocation"
      >
        <LayerGroup>{parking}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay
        checked
        name="Localización actual"
        id="CarLocation"
      >
        <LayerGroup>{car}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Click Location" id="ClickLocation">
        {coords !== [] ? (
          <Marker position={coords}>
            <Tooltip>
              {coords[0]},{coords[1]}
            </Tooltip>
          </Marker>
        ) : null}
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default MapElements;
