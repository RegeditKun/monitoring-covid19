import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Axios from "axios";

const ChartData = (props) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    let totalCases = [];
    let totalRecovered = [];
    let totalDeaths = [];
    let dateCases = [];

    Axios.get("https://corona.lmao.ninja/v2/historical/")
      .then((res) => {
        const targetCountry = props.data.country;
        const getAllData = res.data;
        const getDataCountry = getAllData.find(
          (dataCountry) => dataCountry.country === targetCountry
        );
        const getDataCountryCases = getDataCountry.timeline.cases;
        const getDataCountryRecovered = getDataCountry.timeline.recovered;
        const getDataCountryDeaths = getDataCountry.timeline.deaths;

        for (const date in getDataCountryCases) {
          dateCases.push(date);
          totalCases.push(getDataCountryCases[date]);
        }

        for (const date in getDataCountryRecovered) {
          totalRecovered.push(getDataCountryRecovered[date]);
        }

        for (const date in getDataCountryDeaths) {
          totalDeaths.push(getDataCountryDeaths[date]);
        }

        setChartData({
          labels: dateCases,

          datasets: [
            {
              label: "Cases",
              data: totalCases,
              borderColor: "#5280bb",
              backgroundColor: "#5280bb",
              borderWidth: 5,
              fill: false,
            },
            {
              label: "Recovered",
              data: totalRecovered,
              borderColor: "#72b4a5",
              backgroundColor: "#72b4a5",
              borderWidth: 5,
              fill: false,
            },
            {
              label: "Deaths",
              data: totalDeaths,
              borderColor: "#e75c5f",
              backgroundColor: "#72b4a5",
              borderWidth: 5,
              fill: false,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <section id="chart-data">
      <h1>Data Chart</h1>
      <div>
        <Line
          data={chartData}
          options={{
            legend: {
              labels: {
                // This more specific font property overrides the global property
                fontColor: "white",
                fontSize: 18
              },
            },
            responsive: true,
            // title: { text: "Line Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                    color: "grey"
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                    color: "grey"
                  },
                },
              ],
            },
          }}
        />
      </div>
    </section>
  );
};

export default ChartData;
