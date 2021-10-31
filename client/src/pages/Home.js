import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
        <h1>What should I buy?</h1>
    <div>
        <p>Buying or building a new computer can be a daunting process for a newcomer and with so many fresh features being pushed on the consumerspace knowing which matter to you can be a huge pain for both head and wallet.</p>
        <p>To make navigating this landscape easier complete this short quiz so we know what your intended use case is and how we can best recommend a system or components to compliment it.</p>
        <Link to='/quiz'><button>Begin</button></Link>
    </div>

    <div>
        <h2>Dive Deeper...</h2>
        <p>We'd recommend reading some of these articles if you'd like a better understanding of some of the features and technologies available today to help decide which are worth the investment cost for you.</p>
    </div>
        <ul>
            <li>Ray Tracing / AMD thing</li>
            <li>HDR - High Dynamic Range</li>
            <li>Variable Refresh Rate (Freesync/G-Sync)</li>
            <li>Resolution</li>
            <li>FPS / Framerate</li>
            <li>Monitor Panel Type</li>
            <li>Form Factor</li>
            <li>Liquid vs Air Cooling</li>
        </ul>
    </div>
  );
};

export default Home;