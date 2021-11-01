import React, { useState, useEffect } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

function ComparisonSlider({
    props,
    response,
    setResponse
}) {

    const handleInputChange = (e) => {
        setResponse(e.target.value)
    };

    return (
    <div>
        <ImgComparisonSlider>
          <img slot="first" src={props.off} />
          <img slot="second" src={props.on} />
        </ImgComparisonSlider>
        <div className="d-flex justify-content-center">
            <label 
                htmlFor="customRange1" 
                className="form-label"
                >Importance
            </label>
        </div>
            <input 
                type="range" 
                className="form-range"  
                id="customRange1"
                onChange={handleInputChange}
                min="0"
                max="100"               
            ></input>
        <div className="d-flex justify-content-center">
            <span>{response}%</span>
        </div>
    </div>
    )
}

export default ComparisonSlider;