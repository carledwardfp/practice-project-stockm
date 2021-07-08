import React from "react";
import { Line } from "react-chartjs-2";

const StockChart = ({ data }) => {
  const fData = { ...data };
  const fTitle = { ...fData["Meta Data"] };
  const title = fTitle["2. Symbol"];

  const fDailyData = { ...fData["Time Series (Daily)"] };
  const dates = Object.keys(fDailyData);
  dates.sort();
  const newData = Object.values(fDailyData);
  newData.reverse();

  return (
    <Line
      data={{
        labels: dates,
        datasets: [
          {
            data: newData.map((data) => data["2. high"]),
            label: title || "Loading data...",
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

export default StockChart;
