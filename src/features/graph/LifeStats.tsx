import React from "react";
import moment from "moment";
import styled from "@emotion/styled";
import { Person } from "../../constants/people";
import { FancyDate } from "../../components";

interface LifeStatsProps {
  person: Person;
}

const Wrap = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  font-style: italic;
  border-top: 0.25rem solid #dee2e6;
  p {
    margin: 0.5rem 0;
  }
`;

const LifeStats = ({ person: { birthday } }: LifeStatsProps) => (
  <Wrap>
    <p>
      Day born: <FancyDate date={birthday} showDayName />
    </p>
    <p>
      Days alive:{" "}
      <strong>
        {moment()
          .diff(birthday, "days")
          .toLocaleString("en")}
      </strong>
    </p>
  </Wrap>
);

export default LifeStats;
