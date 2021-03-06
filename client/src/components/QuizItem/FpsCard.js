import React, { useState, useEffect } from 'react';

function FpsCard({
    props,
    response,
    setResponse
}) {

    const styles = {
        card: {
            width: "500px"
        },
    };

    const handleInputChange = (e) => {
        setResponse(e.target.value);
    };

    return (
    <div className="card mb-2" style={styles.card}>
        <img src={props.active.img} className="card-img-top" alt={props.active.name}></img>
        <div className="card-body">
            <h5 className="card-title">{props.active.name}</h5>
            <p className="card-text">{props.active.body}</p>
            
            <label 
                htmlFor="customRange1" 
                className="form-label"
                >Importance</label>
            <input 
                type="range" 
                className="form-range"  
                id="customRange1"
                onChange={handleInputChange}
                min="60"
                max="240"               
            ></input>
            <span>Desired FPS: {response}</span>
            
        </div>
    </div>
    )
}

export default FpsCard;