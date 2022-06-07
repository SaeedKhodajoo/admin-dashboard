import "./chart.scss";
import React, { useContext, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { weeklyData, monthlyData } from "../../assets/data/chartData";
import { darkModeContext } from "../../context/darkModeContext";

const Chart = ({ height }) => {
  const [data, setData] = useState(monthlyData);
  const { darkMode } = useContext(darkModeContext);

  return (
    <div className={darkMode ? "chart dark" : "chart"}>
      <div className="chart-top">
        <h2>Last 6 Months (Income)</h2>
        <div className="buttons">
          <span
            className={data === weeklyData && "active"}
            onClick={() => setData(weeklyData)}
          >
            Weekly
          </span>
          <span
            className={data === monthlyData && "active"}
            onClick={() => setData(monthlyData)}
          >
            Monthly
          </span>
        </div>
      </div>
      <ResponsiveContainer
        className="responsiveContainer"
        width="100%"
        height={height}
      >
        <AreaChart
          className="areachart"
          width={700}
          height={250}
          data={data}
          margin={{ top: 10, right: 40, left: 40, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" className="strokeColor" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
