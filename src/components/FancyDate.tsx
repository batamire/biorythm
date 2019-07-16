import React from "react";
import moment from "moment";
import styled from "@emotion/styled";

const FancySpan = styled.span`
  font-family: Georgia, "Times New Roman", Times, serif;
  color: ${props => props.color};
`;

const FancyDate = ({
  date,
  showDayName
}: {
  date: string;
  showDayName?: boolean;
}) => {
  const m = moment(date);
  return (
    <>
      {showDayName && <FancySpan color="#333">{m.format("dddd")}, </FancySpan>}
      <FancySpan color="#555">{m.format("YYYY")}/</FancySpan>
      <FancySpan color="#777">{m.format("MM")}/</FancySpan>
      <FancySpan color="#999">{m.format("DD")}</FancySpan>
    </>
  );
};

export default FancyDate;
