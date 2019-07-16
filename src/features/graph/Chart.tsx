import React, { useState } from "react";
import moment from "moment";
import { Person } from "../../constants/people";
import { SVG, Legend, LifeStats } from ".";
import { Input } from "../../components/form";
import { bioCalc } from "../../helpers/biorythm";

interface ChartProps {
  person: Person;
}

interface LegendData {
  [key: string]: number;
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
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [primaries, setPrimaries] = useState(true);
  const types = getTypes(primaries);
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Input
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={primaries}
            onChange={() => setPrimaries(!primaries)}
          />{" "}
          Only primaries
        </label>
      </div>
      <SVG person={person} types={types} date={moment(date)} />
      <Legend
        data={types.reduce((obj: LegendData, type) => {
          obj[type] = bioCalc(moment(person.birthday), moment(), type);
          return obj;
        }, {})}
      />
      <LifeStats person={person} />
    </>
  );
};

export default Chart;
