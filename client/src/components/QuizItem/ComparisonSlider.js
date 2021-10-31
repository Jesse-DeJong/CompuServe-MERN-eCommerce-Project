import React, { useState, useEffect } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

function ComparisonSlider({
    props
}) {
    return (
    <div>
        <ImgComparisonSlider>
          <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
          <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
        </ImgComparisonSlider>
        <label htmlFor="customRange1" className="form-label">Importance</label>
        <input type="range" className="form-range" id="customRange1"></input>
    </div>
    )
}

export default ComparisonSlider;