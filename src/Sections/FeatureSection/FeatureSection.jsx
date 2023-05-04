import React from "react";
import { Card } from "react-bootstrap";
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import chef3 from '../../assets/chef3.jpg';
import chef4 from '../../assets/chef4.jpg';
import './FeatureSection.css'

const FeatureSection = () => {
  return (
    <div className="mb-5">
      <h2 className="text-center categori-title mb-5">Our <span className="categori">Chefs</span> </h2>
      <div className="d-flex flex-sm-column flex-md-row justify-content-center gap-4">
      <div className="card p-3">
        <img src={chef1} alt="" />
        <h3 className="text-center mt-5">Arthur Goon</h3>
        <p className="text-center">EXECUTIVE CHEF</p>
      </div>
      <div className="card p-3">
        <img src={chef2} alt="" />
        <h3 className="text-center mt-5">Giorgina Anderson</h3>
        <p className="text-center">EXECUTIVE CHEF</p>
      </div>
      <div className="card p-3">
        <img src={chef3} alt="" />
        <h3 className="text-center mt-5">Christopher Broad</h3>
        <p className="text-center">EXECUTIVE CHEF</p>
      </div>
      <div className="card p-3">
        <img src={chef4} alt="" />
        <h3 className="text-center mt-5">Gordon Ramsay</h3>
        <p className="text-center">EXECUTIVE CHEF</p>
      </div>
      </div>
    </div>
  );
};

export default FeatureSection;
