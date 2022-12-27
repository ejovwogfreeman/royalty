import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Royalty"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Play", 7],
  ["Read", 8],
  ["Cook", 6],
  ["Code", 3],
  ["Drum", 12],
];
export const options = {
  title: "Royalty Revenue Chart",
  colors: ["#006666"],
};

const Charts = () => {
  return (
    <Chart
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
      chartType="ColumnChart"
    />
  );
};
export default Charts;
