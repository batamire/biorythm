import React from "react";
import { Person } from "../../constants/people";

interface SVGProps {
  person: Person;
}

interface DayProps {
  dayNumber: number;
  dayName: string;
  offset: number;
}

const Day = ({ dayNumber, dayName, offset }: DayProps) => (
  <g>
    <rect
      x={30 * offset}
      y="0"
      height="300"
      width="30"
      stroke="#006600"
      fill="#00cc00"
    />
    <text x={5 + 30 * offset} y="20">
      {dayNumber}
    </text>
    <text x={5 + 30 * offset} y="290">
      {dayName}
    </text>
  </g>
);

const SVG = ({ person }: SVGProps) => (
  <svg viewBox={`0 0 900 300`} width="900" height="300">
    {Array(30)
      .fill(0)
      .map((a, index) => (
        <Day dayNumber={index} dayName="Sa" offset={index} key={index} />
      ))}
  </svg>
);

export default SVG;
