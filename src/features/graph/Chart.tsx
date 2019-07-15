import React, { useState } from "react";
import { Person } from "../../constants/people";
import { SVG, Legend } from ".";

interface ChartProps {
  person: Person;
}

const getTypes = (primaries: boolean) => {
  const types = [
    "physical",
    "emotional",
    "intellectual",
    "spiritual",
    "awareness",
    "aesthetic",
    "intuition"
  ];
  return primaries ? types.slice(0, 3) : types;
};

const Chart = ({ person }: ChartProps) => {
  const [primaries, setPrimaries] = useState(true);
  const types = getTypes(primaries);
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={primaries}
            onChange={() => setPrimaries(!primaries)}
          />{" "}
          Only primaries
        </label>
      </div>
      <SVG person={person} types={types} />
      <Legend types={types} />
    </>
  );
};

export default Chart;
