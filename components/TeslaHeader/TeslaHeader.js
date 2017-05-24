import React from 'react';
import './TeslaHeader.css';
import logoUrl from '../../assets/logo.svg';
const TeslaHeader = () => (
  <div className="teslaHeader">
    <img src={logoUrl} alt="Tesla" />
  </div>
)
export default TeslaHeader;