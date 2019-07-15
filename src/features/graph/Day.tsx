import React from "react";
import moment from "moment";

interface DayProps {
  date: moment.Moment;
  offset: number;
}

const Day = ({ date, offset }: DayProps) => {
  const current = moment().diff(date, "hours") === 0;
  return (
    <g>
      <rect
        x={30 * offset}
        y="0"
        height="300"
        width="30"
        stroke="#006600"
        fill={current ? "#00cc00" : "#fff"}
      />
      <text x={5 + 30 * offset} y="20">
        {moment(date).format("DD")}
      </text>
      <text x={5 + 30 * offset} y="290">
        {moment(date).format("dd")}
      </text>
    </g>
  );
};

export default Day;
