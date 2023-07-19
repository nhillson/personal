import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";

const geoUrl = "/mn_counties.json";

export default function MapChart() {
  const [content, setContent] = useState("");
  return (
    <div className="mushmap" style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <ReactTooltip>{content}</ReactTooltip>
      <div style={{
        width: "1400px",
        borderStyle: "double"
      }}>
      <ComposableMap projection="geoAlbers" data-tip="" height={500} width={500} projectionConfig={{center:[2, 134], scale:3000}}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} onMouseEnter={() => {
                const { NAME } = geo.properties;
                setContent(`${NAME}`);
              }}
              onMouseLeave={() => {
                setContent("");
              }}
              style={{
                hover: {
                  fill: "#F53",
                }
              }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
    </div>
  );
}
