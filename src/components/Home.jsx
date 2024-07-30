/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Teleoperation from "../components/Teleoperation";
import { Row, Col, Container } from "react-bootstrap";
import { Joystick } from "react-joystick-component";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
          <h1 className="text-center mt-3">Robot Control Page</h1>
          {/* <Teleoperation /> */}
          <Joystick
            size={100}
            baseColor="#EEEEEE"
            stickColor="#BBBBBB"
            move={this.handleMove}
            stop={this.handleStop}
          ></Joystick>
      </div>
    );
  }
}

export default Home;