import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "93vw",
  height: "300px",
  zIndex: "0",
  marginLeft: "2vw",
};

// height: 300px;
// width: 100vw;

const center = {
  lat: 51.90429055868055,
  lng: -0.19682657672119408,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAXgRvteDQbnKAKdRe_Rx95lSIvQ7ppaUU",
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMaps;
