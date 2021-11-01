import React from "react";
import { Link } from "react-router-dom";
import RecCard from "../components/Recommended/RecCard";
import '../styles/style.css';

const Recommended = ({
    userData
}) => {

    const { budget, resolution, fps, features } = userData

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
    
    // switch(userData) { 
    //     case budget < 1599:
    //         return "console" 
    //         break;
    //     case budget > 1599 && budget < 2299:
    //         return "/products/617f57b6b74fe67bf452e45e"
    //         break;
    //     case budget > 2299 && budget < 2899:
    //         return "/products/617f57b6b74fe67bf452e461"
    //         break;
    //     case budget > 2899:
    //         return "/products/617f57b6b74fe67bf452e464"
    //         break;
    // }


  return (
  <div className="container d-flex justify-content-center align-items-center" style={styles.div}>
    <div className="container">
          <h1 className="container d-flex justify-content-center">Results</h1>
      <div>

      <div className="container">
          <RecCard userData={userData} />
      </div>
      
          
        <div className="container d-flex justify-content-center">
            {budget <= 2299 ? (
                  <Link to=""><button 
                  className="btn btn-outline-warning"
                  type="button" 
                  style={styles.button}
                  >Recommendation</button></Link>
          ) : (
            <Link to="/products/617f57b6b74fe67bf452e461"><button 
            className="btn btn-outline-warning"
            type="button" 
            style={styles.button}
            >Recommendation</button></Link>
          )}
        </div>

      </div>
      </div>
    </div>
  );
};

export default Recommended;