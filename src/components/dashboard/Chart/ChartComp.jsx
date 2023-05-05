/* eslint-disable no-unused-vars */
import React from "react";
import "./Chart.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartComp = ({ signDataList }) => {

  // Extract date and secondsSpent from each object and store in a new array
  const extractedData = signDataList.map((item) => {
    const date =
      item.createdAt.split(" ")[1] +
      "/" +
      item.createdAt.split(" ")[2] +
      "/" +
      item.createdAt.split(" ")[3];
    return {
      date,
      secondsSpent: item.secondsSpent,
    };
  });

  // Combine secondsSpent for same dates
  const reducedData = extractedData.reduce((acc, curr) => {
    const matchingIndex = acc.findIndex((item) => item.date === curr.date);
    if (matchingIndex !== -1) {
      acc[matchingIndex].secondsSpent += curr.secondsSpent;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  // Sort by date
  reducedData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Separate dates and secondsSpent into separate arrays
  const dates = reducedData.map((item) => item.date).reverse();
  const secondsSpent = reducedData.map((item) => item.secondsSpent).reverse();

  console.log(dates);
  console.log(secondsSpent);

  const data = {
    labels: dates.slice(0, 7),
    datasets: [
      {
        data: secondsSpent,
        backgroundColor: "#f07458",
        barThickness: 20,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#81AFDD",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "#81AFDD",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="signlang_chart">
      {dates.length && secondsSpent.length > 0 ? (
        <>
          <h2 className="gradient__text">Time Spent By You (in seconds)</h2>
          <Bar className="bar-chart" data={data} options={options} />
        </>
      ) : (
        <h2 className="gradient__text">
          You don't have any Data for Chart !<br />
          Please go to Detect Page to Start
        </h2>
      )}
    </div>
  );
};

export default ChartComp;
