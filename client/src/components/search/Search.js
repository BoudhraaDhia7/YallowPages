import React, { useEffect, useState } from "react";
import Map from "../map/Map";
const Search = (props) => {
  const data = props.data;
  const [map, setMap] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  useEffect(() => {
    console.log(data);
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

  if (data.length === 0) {
    return (
      <div className="search-results">
        <div className="cards">
          <div className="card">
            <h2>Aucun résultat trouvé</h2>
          </div>
        </div>
        <div className="map">
          <Map height="91vh" data={[]}></Map>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-results">
        <div className="cards">
          {/* Card 1 */}
          {data.map(
            (item, index) => (
              console.log(item),
              (
                <div
                  className="card"
                  key={index}
                  onMouseOver={() => setSelectedMarker(item)}
                  onMouseLeave={() => setSelectedMarker([])}
                >
                  <div className="rating">
                    <h1>{item.name}</h1>
                    <p>
                      <span className="dark-black">
                        {item.rating ? item.rating : "0"}/5
                      </span>
                      <span className="fa fa-star checked yallowStart"></span>
                    </p>
                  </div>
                  <p>Address: {item.address ? item.address : "test"}</p>
                  <p>
                    {item.open == false ? (
                      <span className="closed">Fermé </span>
                    ) : (
                      <span className="open">Ouvert </span>
                    )}
                  </p>
                  <a href="#">Visit Website</a>
                </div>
              )
            )
          )}
        </div>
        <div className="map">
          <Map
            data={map}
            marker={selectedMarker}
            townName={props.town}
            height="91vh"
          />
        </div>
      </div>
    );
  }
};

export default Search;
