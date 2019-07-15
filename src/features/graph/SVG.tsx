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
}

const SVG = ({ person: { birthday } }: SVGProps) => (
  <svg viewBox={`0 0 900 300`} width="900" height="300">
    <g>
      {days.map((m, index) => (
        <Day date={m} offset={index} key={index} />
      ))}
    </g>
    <Bar
      color={cycleColor("physical")}
      data={days.map(m => bioCalc(moment(birthday), m, "physical"))}
    />
    <Bar
      color={cycleColor("emotional")}
      data={days.map(m => bioCalc(moment(birthday), m, "emotional"))}
    />
    <Bar
      color={cycleColor("intellectual")}
      data={days.map(m => bioCalc(moment(birthday), m, "intellectual"))}
    />
  </svg>
);

export default SVG;
