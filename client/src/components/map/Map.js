import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function Map(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //  const townName = null;
  const townName = searchParams.get("town");
  // props.saveTown === undefined
  //   ? (townName = searchParams.get("town"))
  //   : (townName = props.saveTown);

  console.log(townName);
  const [center, setCenter] = useState({});
  useEffect(() => {
    // Fetch the latitude and longitude of the town name from a geocoding API
    const apiKey = "AIzaSyAs2DHu6AvTQ-no_c4panFGZW0K5W-bdyg";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${townName}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const location = data.results[0].geometry.location;
        setCenter(location);
      });
  }, [townName]);

  const data = props.data;
  const mapMarker = props.marker;

  const containerStyle = {
    width: "100%",
    height: props.height,
  };

  // const center = {
  //   lat: 35.830213439587276,
  //   lng: 10.612389575020645,
  // };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAs2DHu6AvTQ-no_c4panFGZW0K5W-bdyg",
  });

  const [map, setMap] = React.useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(12);

    setMap(map);
  }, []);

  const onCloseClick = () => {
    setActiveMarker(null);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const mapArray = [];
      data.forEach((el) => {
        mapArray.push({
          id: el.id,
          lat: el.gmapLat,
          lng: el.gmapLen,
        });
      });
      setMap(mapArray);
    }
  }, [data]);

  useEffect(() => {
    if (mapMarker) {
      const marker = {
        position: {
          lat: mapMarker.gmapLat,
          lng: mapMarker.gmapLen,
        },
      };
      setActiveMarker(marker);
    }
  }, [mapMarker]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {data.map((item, index) => (
        <Marker key={index} position={{ lat: item.lat, lng: item.lng }} />
      ))}

      {activeMarker && (
        <InfoWindow
          position={{ lat: mapMarker.gmapLat, lng: mapMarker.gmapLen }}
          onCloseClick={onCloseClick}
        >
          <div>
            <h4>{mapMarker.name}</h4>
            <p>{mapMarker.address}</p>
          </div>
        </InfoWindow>
      )}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
