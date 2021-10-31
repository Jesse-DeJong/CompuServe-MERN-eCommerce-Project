import React from "react";
import { Link } from "react-router-dom";
import Articles from '../components/Articles/index';

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
        <Articles />
    </div>
  );
};

export default Home;