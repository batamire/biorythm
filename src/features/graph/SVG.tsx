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

interface BarProps {
  data: Array<number>;
}

const Bar = ({ data }: BarProps) => {
  console.log(data);
  return (
    <g>
      {data.slice(0, data.length - 1).map((a, index) => (
        <>
          {console.log(data[index])}
          <line
            x1={30 * index + 15}
            y1={data[index]}
            x2={30 * (index + 1) + 15}
            y2={data[index + 1]}
            key={`${a}-${index}`}
            stroke="#000"
          />
        </>
      ))}
    </g>
  );
};

const SVG = ({ person: { birthday } }: SVGProps) => (
  <svg viewBox={`0 0 900 300`} width="900" height="300">
    <g>
      {Array(30)
        .fill(0)
        .map((a, index) => (
          <Day dayNumber={index} dayName="Sa" offset={index} key={index} />
        ))}
    </g>
    <Bar
      data={Array.from({ length: 30 }, () =>
        Math.floor(Math.random() * 100 + 1)
      )}
    />
  </svg>
);

export default SVG;
