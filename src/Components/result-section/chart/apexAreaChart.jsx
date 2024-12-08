import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexAreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-area"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        title: {
          text: 'Cumulative Enrollment'
        },
        fill: {
          opacity: 0.3
        }
      },
      series: [
        {
          name: "Cumulative Enrollment",
          data: [30, 40, 45, 50, 60, 70, 91, 110, 130]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexAreaChart;
