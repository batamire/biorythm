import React, { useState } from "react";
import moment from "moment";
import { Person } from "../../constants/people";
import { SVG, Legend } from ".";
import { bioCalc } from "../../helpers/biorythm";

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
      <Legend
        data={types.reduce((obj: any, type) => {
          obj[type] = bioCalc(moment(person.birthday), moment(), type);
          return obj;
        }, {})}
      />
    </>
  );
};

export default Chart;
