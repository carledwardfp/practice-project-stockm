import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  const fData = { ...props.data };
  const fTitle = { ...fData["Meta Data"] };
  const title = fTitle["4. Market Code"]; // FOR DATASETS.LABEL
  const fDailyData = { ...fData["Time Series (Digital Currency Weekly)"] };
  const dates = Object.keys(fDailyData);
  dates.sort(); // FOR LABELS
  const newData = Object.values(fDailyData);
  newData.reverse(); // FOR DATASETS.DATA

  return (
    <Line
      data={{
        labels: dates,
        datasets: [
          {
            data: newData.map((data) => data["2a. high (PHP)"]),
            label: title ? title : "Loading data...",
            borderColor: "#00ccff",
            borderWidth: 2,
            backgroundColor: "rgba(0,204,255,0.1)",
            fill: true,
          },
        ],
      }}
    />
  );
};

export default Chart;
