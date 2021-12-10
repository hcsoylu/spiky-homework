import React, { useState } from "react";
import Chart from "react-apexcharts";

const Test = ({ cityName, categories, highTemp, lowTemp, setSelectedDay }) => {
  const [dataObj, setDataObj] = useState({
    series: [
      {
        name: "High",
        data: highTemp,
      },
      {
        name: "Low",
        data: lowTemp,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
        events: {
          click: function (event, chartContext, config) {
            // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
            setSelectedDay(config.dataPointIndex);
          },
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: `Average High & Low Temperature for ${cityName}`,
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: categories,
        title: {
          text: "Weekly Weather Forecast",
        },
      },
      yaxis: {
        title: {
          text: "Temperature",
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  return (
    <div>
      <Chart
        options={dataObj.options}
        series={dataObj.series}
        type="line"
        height={380}
        width={700}
      />
    </div>
  );
};

export default Test;
