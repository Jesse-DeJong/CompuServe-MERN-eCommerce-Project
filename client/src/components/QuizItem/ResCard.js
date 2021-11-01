import React, { useState, useEffect } from 'react';

function ResCard({
    props,
    setResponse
}) {

    const [toggle, setToggle] = useState(props.active);

    const styles = {
        card: {
            width: "500px"
        },
    };
    
    const handleRadioToggle = (e) => {

        const activeButton = e.target.id;
        
        const activeProps = props.active;
        
        if(activeButton === "btnradio1") {
            activeProps.name = props.a.name;
            activeProps.img = props.a.img;
            activeProps.body = props.a.body;
            } else if (activeButton === "btnradio2") {
                activeProps.name = props.b.name;
                activeProps.img = props.b.img;
                activeProps.body = props.b.body;
            } else if (activeButton === "btnradio3") {
                activeProps.name = props.c.name;
                activeProps.img = props.c.img;
                activeProps.body = props.c.body;
            };

        setToggle({...props, activeProps});
        setResponse(activeProps.name);

    };

    return (
    <div className="card" style={styles.card}>
        <img src={props.active.img} className="card-img-top" alt={props.active.name}></img>
        <div className="card-body">
            <h5 className="card-title">{props.active.name}</h5>
            <p className="card-text">{props.active.body}</p>
            
<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleRadioToggle}></input>
  <label className="btn btn-outline-primary" htmlFor="btnradio1">{props.a.name}</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={handleRadioToggle}></input>
  <label className="btn btn-outline-primary" htmlFor="btnradio2">{props.b.name}</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={handleRadioToggle}></input>
  <label className="btn btn-outline-primary" htmlFor="btnradio3">{props.c.name}</label>
</div>
            
        </div>
    </div>
    )
}

export default ResCard;