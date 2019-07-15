import React from "react";

interface BarProps {
  data: Array<number>;
  color: string;
}

// height is 300, width is 30
const Bar = ({ data, color }: BarProps) => {
  return (
    <g>
      {data.slice(0, data.length - 1).map((a, index) => (
        <line
          x1={30 * index + 15}
          y1={data[index] * 1.5 + 150}
          x2={30 * (index + 1) + 15}
          y2={data[index + 1] * 1.5 + 150}
          key={`${a}-${index}`}
          stroke={color}
        />
      ))}
    </g>
  );
};

export default Bar;
