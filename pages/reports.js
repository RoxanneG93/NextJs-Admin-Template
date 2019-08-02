import React, { Component } from 'react';
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
  } from "../variables/charts.jsx";

export default class reports extends Component {
    render() {
        return (
            <div>
                {/* ===== NEED TO CHECKOUT A TUTORIAL ON CHART JS ====== */}
                <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
            </div>
        )
    }
}
