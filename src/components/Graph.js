import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useParams } from "react-router-dom";
import '../css/Graph.css'

var axios = require("axios").default;

const Graph = () => {
  const { elementSymbol } = useParams();
  const [stats, setStats] = useState([]);
  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);
  const [label, setLabel] = useState("30-Day Stock Price");

  //Get daily stock close price for past 30 days.
  useEffect(() => {
    axios
      .get(
        ` https://financialmodelingprep.com/api/v3/historical-chart/5min/${elementSymbol}?apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log("responsedata", response.data);
        setStats(response.data);
        setDates(
          response.data
            .slice(0, 78)
            .reverse()
            .map((element, index) => {
              return element.date;
            })
        );
        setPrices(
          response.data
            .slice(0, 78)
            .reverse()
            .map((element, index) => {
              return element.close;
            })
        );
        setLabel("1 Day Stock Price for ");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const clickHandler = () => {
    console.log("hit");
    axios
      .get(
        ` https://financialmodelingprep.com/api/v3/technical_indicator/daily/${elementSymbol}?period=10&type=ema&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setStats(response.data);
        setDates(
          response.data
            .slice(0, 89)
            .reverse()
            .map((element, index) => {
              return element.date;
            })
        );
        setPrices(
          response.data
            .slice(0, 89)
            .reverse()
            .map((element, index) => {
              return element.close;
            })
        );
        setLabel("90-Day Stock Price");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const clickHandler1 = () => {
    axios
      .get(
        ` https://financialmodelingprep.com/api/v3/technical_indicator/daily/${elementSymbol}?period=10&type=ema&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setStats(response.data);
        setDates(
          response.data
            .slice(0, 29)
            .reverse()
            .map((element, index) => {
              return element.date;
            })
        );
        setPrices(
          response.data
            .slice(0, 29)
            .reverse()
            .map((element, index) => {
              return element.close;
            })
        );
        setLabel("30-Day Stock Price");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const clickHandler1Y = () => {
    axios
      .get(
        ` https://financialmodelingprep.com/api/v3/technical_indicator/daily/${elementSymbol}?period=10&type=ema&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setStats(response.data);
        setDates(
          response.data
            .slice(0, 364)
            .reverse()
            .map((element, index) => {
              return element.date;
            })
        );
        setPrices(
          response.data
            .slice(0, 364)
            .reverse()
            .map((element, index) => {
              return element.close;
            })
        );
        setLabel("1 Year Stock Price");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const clickHandler1D = () => {
    axios
      .get(
        ` https://financialmodelingprep.com/api/v3/historical-chart/5min/${elementSymbol}?apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log("responsedata", response.data);
        setStats(response.data);
        setDates(
          response.data
            .slice(0, 78)
            .reverse()
            .map((element, index) => {
              return element.date;
            })
        );
        setPrices(
          response.data
            .slice(0, 78)
            .reverse()
            .map((element, index) => {
              return element.close;
            })
        );
        setLabel("1 Day Stock Price for " + new Date().toJSON().slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div style={{ height: "800px", width: "50%" }}>
      <Line
        const
        data={{
          labels: dates,
          datasets: [
            {
              label: label,
              data: prices,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
      />
      <div id="graphButtons">

      <div className="btn-group btn-group-sm" role="group" aria-label="Basic example" >
        <button onClick={clickHandler1D} type="button" className="btn btn-secondary"> 1D </button>
        <button onClick={clickHandler1}type="button" className="btn btn-secondary">1M</button>
        <button onClick={clickHandler} type="button" className="btn btn-secondary">3M</button>
        <button onClick={clickHandler1Y} type="button" className="btn btn-secondary">1Y</button>
      </div>
      </div>
    </div>
  );
};

export default Graph;
