import React, { Component } from "react";

export default class ProgressBarSalary extends Component {
  render() {
    const { descontoInss, descontoIrrf, percentualLiquido } = this.props;

    return (
      <>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              height: "30px",
              backgroundColor: "#ff8c00",
              width: descontoInss + "%",
            }}
          ></div>
          <div
            style={{
              height: "30px",
              backgroundColor: "#FFB6C1",
              width: descontoIrrf + "%",
            }}
          ></div>
          <div
            style={{
              height: "30px",
              backgroundColor: "#00ff00",
              width: percentualLiquido + "%",
            }}
          ></div>
        </div>
        
      </>
    );
  }
}