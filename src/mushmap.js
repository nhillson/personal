import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";

const geoUrl = "/mn_counties.json";

export default function MapChart() {
  const [content, setContent] = useState("");
  return (
    <div
      className="mushmap"
      style={{
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactTooltip>{content}</ReactTooltip>
      <div
        style={{
          width: "50%",
          borderStyle: "double",
        }}
      >
        <ComposableMap
          projection="geoAlbers"
          data-tip=""
          projectionConfig={{ center: [2.1, 133.5], scale: 5000 }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setContent("");
                  }}
                  style={{
                    hover: {
                      fill: "#F53",
                    },
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
