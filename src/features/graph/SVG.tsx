import React from "react";
import * as Moment from "moment";
import { extendMoment } from "moment-range";
import { Person } from "../../constants/people";
import { bioCalc, cycleColor } from "../../helpers/biorythm";
import Day from "./Day";
import Bar from "./Bar";

const moment = extendMoment(Moment);

const from = moment().subtract(5, "days");
const to = moment().add(25, "days");
const dayRange = moment.range(from, to);
const days = Array.from(dayRange.by("day"));

interface SVGProps {
  person: Person;
  types: string[];
}

const SVG = ({ person: { birthday }, types }: SVGProps) => (
  <svg viewBox={`0 0 900 300`} width="900" height="300">
    {days.map((m, index) => (
      <Day date={m} offset={index} key={index} />
    ))}
    {types.map(type => (
      <Bar
        color={cycleColor(type)}
        data={days.map(m => bioCalc(moment(birthday), m, type))}
        key={type}
      />
    ))}
  </svg>
);

export default SVG;
