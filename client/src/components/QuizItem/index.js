import React, { useState } from 'react';
import ComparisonSlider from './ComparisonSlider';
import ResCard from './ResCard';
import FpsCard from './FpsCard';
import { Link } from "react-router-dom";

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
                    <h2>Foreword</h2>
                    <p>This short quiz is designed to help us identify your intended use case and desired features for your new computer. Giving us this insight allows us to help you allocate your budget to the right components so that you walk away with a computer fully capable of performing any tasks you plan to throw at it without spending money on features you'll never notice or use.</p>
                    <p>If you have a computer hardware background and don't need assistance with component choice or would rather just look at our template'd builds check out the <Link to="/products">products</Link> page instead.</p>
                </>
            )
        case 1:
            return (
                <>
                    <h1>Budget:</h1>
                    <h3>How much are you looking to spend?</h3>

                    <div class="form-floating mb-3">
                        <input 
                            type="number"
                            placeholder="$$$"
                            value={response}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                        ></input>
                        <label for="floatingInput">$</label>
                    </div>
                </>
            );
        case 2:
            const resOptions = {
                a: {
                    name: 'Standard',
                    img: '/images/1920-1080.png',
                    body: `While current marketing makes it seem like the world has moved on to bigger and bigger resolutions, this is still the current industry standard for 'high definition'. A vast majority of people (67.53%) still work and game at this standard resolution. So unless you have a particular interest (and matching budget) for a greater resolution this should be your target.`
                },
                b: {
                    name: 'Ultrawide',
                    img: '/images/3440-1440.png',
                    body: 'An interesting resolution gaining in popularity which offers a sweet-spot between the standard 1080p and 4k. Uniquely breaking away from the traditional 16/9 ratio for a 21/9 ratio that provides additional horizontal realestate at much less of the performance toll on your GPU at only 60% the pixels of 4k. If you are considering a multimonitor setup or want a higher resolution with less of a budget increase, this is a fantastic option for both productivity tasks and immersive increased FoV in games.'
                },
                c: {
                    name: '4K',
                    img: '/images/3840-2160.png',
                    body: 'Whether its for higher pixel density crystal clear text or milking your games for all the detail they can provide 4K is the modern day pinacle for all but the heaviest of wallets. Note that there is a significant performance cost as your GPU will effectivey need to produce 4x the pixels for each frame compared to the standard 1080p.'
                },
                active: {
                    name: 'Resolution',
                    img: '/images/res-comparison.png',
                    body: `Deciding your target resolution is a major consideration and naturally it can have a large impact on the budget you'll need to build a computer capable of fully utilsing your desired hardware. 
                    \nAs you can see in the above chart there is a significant increase in pixels as you scale up in size (note this is independent of physical screen size). Ultimately more pixels (4x as many as 1080p for 4k) take a lot more processing power to produce each frame so if you want to play modern AAA titles at a higher resolution factor in additional budget headroom for a more powerful GPU.
                    Check the buttons below to explore the most common resolutions`
                }
            };
            return (
                <>
                <div className="container-fluid d-flex">
                    <h2>At what resolution will you be gaming?</h2>
                </div>
                <div className="container-fluid d-flex m-2">
                    <ResCard props={resOptions} />
                </div>
                </>
            );
        case 3:
            const fpsOptions = {
                a: {
                    name: '60Hz',
                    img: './images/refreshrate.gif',
                    body: `Standard industry wide, if you've never given refresh rate any thought the panel you're reading this on is likely to be 60Hz. If that's never bothered you its really not worthwhile investing more of your budget into it.`
                },
                b: {
                    name: '144Hz',
                    img: './images/refreshrate.gif',
                    body: 'Generally the floating range of Hz between the standard 60 and the expensive performance monitors offers a slightly noticable....'
                },
                c: {
                    name: '200Hz+',
                    img: './images/refreshrate.gif',
                    body: 'Almost all panels this quick start making very perceptible tradeoffs likely to be felt in the quality of the image and/or your wallet.'
                },
                active: {
                    name: 'FPS / Refresh Rate',
                    img: './images/refreshrate.gif',
                    body: `Deciding on a refresh rate and associated target FPS is a comparitively much simpler choice.
                    In a real world situation the average person will generally be able to discern between a 60Hz or greater (eg 144Hz) panel with some accuracy, that said unless your primary purpose for this machine is twitch-shooters such as Counterstrike or Call of Duty a higher refreshrate isn't as important as 1000fps footage would have you believe and your budget is better utilised first in other areas.`
                }
            }
            return (
                <>
                <h2>At what framerate will you be gaming?</h2>
                <div className="container-fluid d-flex">
                    <FpsCard props={fpsOptions} />
                </div>
                </>
            );
        case 4:
            const rtx = {
                off: './images/control-rtx-off.jpg',
                on: './images/control-rtx-on.jpg'
            }
            return (
                <>
                <h2>Are you interested in Ray Tracing?</h2>
                <div className="container-fluid d-flex">
                    <p>Ray-tracing is a relatively recent development offering a new approach to calculating lighting and shadows, leveraging specalised hardware to calculate realistic light paths in the same way light bounces in real life. Value here is subjective and does not come cheap. It should also be noted that as only a handful of games support even a limited implementation of what this technology is capable of at this time, however given its inclusion in the recent generation of consoles on both PS5 and XBOX as well as a strong community reception it is highly likely that compatibility will expand significantly in the coming years as capable hardware becomes increasingly available and developers have time to work with the software implementation.</p>
                    
                </div>
                <div className="container-fluid d-flex">
                <ComparisonSlider props={rtx} />
                </div>
                </>
            );
    }
}

export default QuizItem;