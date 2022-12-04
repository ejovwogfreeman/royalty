import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Royalty"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  title: "Royalty Revenue Chart",
};

const Charts = () => {
  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};
export default Charts;
