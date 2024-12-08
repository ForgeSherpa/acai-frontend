import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexPieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-pie"
        },
        labels: ['Apple', 'Mango', 'Banana', 'Pineapple']
      },
      series: [44, 55, 41, 17] // Data for the pie chart
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
              type="pie"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexPieChart;
