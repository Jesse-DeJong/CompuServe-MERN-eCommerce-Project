import React, { useState } from 'react';
import ResCard from './ResCard';

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
                <label htmlFor="budget">$</label>
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
            const radioOptions = {
                a: {
                    name: 'Standard',
                    img: '/images/1920-1080.png'
                },
                b: {
                    name: 'Ultrawide',
                    img: '/images/3440-1440.png'
                },
                c: {
                    name: '4K',
                    img: '/images/3840-2160.png'
                },
                active: {
                    name: 'Standard',
                    img: '/images/1920-1080.png'
                }
            };

            return (
                <>
                <h2>At what resolution will you be gaming?</h2>
                <div className="container-fluid d-flex">
                    <ResCard props={radioOptions} />
                </div>
                </>
            );
    }

}

export default QuizItem;