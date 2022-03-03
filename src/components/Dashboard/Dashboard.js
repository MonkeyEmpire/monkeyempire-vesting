import "./Dashboard.css";
import React, { Component } from "react";
import Progress from "./Progress";
import Details from "./Details";
import { Container } from "semantic-ui-react";
import Overview from "./Overview";
import Beneficiary from "./Beneficiary";
import Schedule from "./Schedule";
import Chart from "./Chart";

class Dashboard extends Component {
  render() {
    return (
      <Container className="dashboard">
        <Overview />
        <Beneficiary />
        <Progress />
        <Chart />
        <Schedule />
      </Container>
      // <div className="dashboard">
      //   <div className="dashboard-left">
      //     <Progress />
      //     <Details />
      //   </div>
      //   <div className="dashboard-right">
      //     <Schedule />
      //   </div>
      // </div>
    );
  }
}

export default Dashboard;
