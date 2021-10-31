import React, { useState } from 'react';

function QuizItem({
    setResponse,
    response,
    count
}) {
    



    const handleInputChange = (e) => {
        setResponse(e.target.value)
    };
    


    switch(count) {
        case 0:
            return (
                <>
                <h2>Budget: How much are you looking to spend?</h2>
                <label for="budget">$</label>
                <input
                value={response}
                name="budget"
                onChange={handleInputChange}
                type="number"
                placeholder="$$$"
                ></input>
                </>
            );
        case 1:
            return (
                <>
                <h2>At what resolution will you be gaming?</h2>
                <div>
                <input
                value="Ultrawide"
                name="resolution"
                onChange={handleInputChange}
                type="radio"
                placeholder="3440x1440"
                /> Ultrawide
                                <input
                value="Standard"
                name="resolution"
                onChange={handleInputChange}
                type="radio"
                placeholder="1920x1080"
                /> Standard
                                <input
                value="4K"
                name="resolution"
                onChange={handleInputChange}
                type="radio"
                placeholder="3840x2160"
                /> 4K
                </div>
                </>
            );
    }

}

export default QuizItem;