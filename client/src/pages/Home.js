import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';

const Home = () => {

  // less 75 pixels to compensate for the navbar
  const windowHeight = document.documentElement.clientHeight - 75;
  
  const styles = {
    button: {
      fontSize: '20px'
    },
    div: {
      height: windowHeight
    },
    p: {
      textAlign: 'center'
    }
  }
  
  return (
  <div className="container d-flex justify-content-center align-items-center" style={styles.div}>
    <div className="container">
          <h1 className="container d-flex justify-content-center">Getting Started</h1>
      <div>
          <p style={styles.p}>Buying or building a new computer can be a daunting process even for veterans of the hobby. With so many fresh features emerging in recent years knowing which matter to you can be tough.</p>
          <p style={styles.p}>To make navigating this landscape easier we've created this short quiz so we can get to know what your intended use case is and how we can best recommend a system or components to compliment it.</p>
          
        <div className="container d-flex justify-content-center">
          <Link to='/quiz'><button 
            className="btn btn-outline-warning"
            style={styles.button}
            >Begin</button>
          </Link>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Home;