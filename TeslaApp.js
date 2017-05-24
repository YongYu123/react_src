import React, { Component } from 'react';
import './TeslaApp.css';
import TeslaHeader from './components/TeslaHeader/TeslaHeader';
import TeslaBattery from './containers/TeslaBattery';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

class TeslaApp extends Component {
  render() {
    return (
      <div className="TeslaApp">
        <TeslaHeader />
        <TeslaBattery counterDefaultVal={counterDefaultVal}/>
      </div>
    );
  }
}
export default TeslaApp;