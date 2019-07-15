import moment from "moment";

export const cycleLength = (type: string) => {
  switch (type) {
    case "physical":
      return 23;
    case "emotional":
      return 28;
    case "intellectual":
      return 33;
    case "spiritual":
      return 53;
    case "awareness":
      return 48;
    case "aesthetic":
      return 43;
    case "intuition":
      return 38;
    default:
      return 23;
  }
};

export const cycleColor = (type: string) => {
  switch (type) {
    case "physical":
      return "#ac000d";
    case "emotional":
      return "#007800";
    case "intellectual":
      return "#007ee8";
    case "spiritual":
      return "#ce7425";
    case "awareness":
      return "#ca8900";
    case "aesthetic":
      return "#f35faf";
    case "intuition":
      return "#a6006b";
    default:
      return "blue";
  }
};

export const bioCalc = (
  birthday: moment.Moment,
  day: moment.Moment,
  type: string
) => {
  const days = day.diff(birthday, "days");
  return Math.sin((2 * Math.PI * days) / cycleLength(type)) * 100;
};
