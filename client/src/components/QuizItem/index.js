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
                    <h2>Foreword</h2>
                    <p>This short quiz is designed to help us identify your intended use case and desired features for your new computer. Giving us this insight allows us to help you allocate your budget to the right components so that you walk away with a computer fully capable of performing any tasks you plan to throw at it without spending money on features you'll never notice or use.</p>
                    <p>If you have a computer hardware background and don't need assistance with component choice or would rather just look at our template'd builds check out the products page</p>
                </>
            )
        case 1:
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
                    body: 'An interesting resolution gaining in popularity which offers a sweet-spot between the standard 1080p and 4k. Uniquely breaking away from the traditional 16/9 ratio for a 21/9 ratio that provides additional screen realestate and much less of a performance toll on your GPU at only 60% the pixels of 4k. If you are considering a multimonitor setup or want a higher resolution without the associated price tag, this is a fantastic option for both productivity tasks and immersive increased FoV in games.'
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
                    As you can see in the above chart there is a significant increase in pixels as you scale up in size (note this is independent of physical screen size). Ultimately more pixels (4x as many as 1080p for 4k) take a lot more processing power to produce each frame so if you want to play modern AAA titles at a higher resolution factor in additional budget headroom for a more powerful GPU.
                    Check the buttons below to explore the most common resolutions`
                }
            };
            return (
                <>
                <h2>At what resolution will you be gaming?</h2>
                <div className="container-fluid d-flex">
                    <ResCard props={resOptions} />
                </div>
                </>
            );
        case 3:
            const fpsOptions = {
                a: {
                    name: '60Hz',
                    img: 'https://picsum.photos/500',
                    body: `Standard industry wide, if you've never given refresh rate any thought the panel you're reading this on is likely to be 60Hz. If that's never bothered you its really not worthwhile investing more of your budget into it.`
                },
                b: {
                    name: '144Hz',
                    img: 'https://picsum.photos/500',
                    body: 'Generally the floating range of Hz between the standard 60 and the expensive performance monitors offers a slightly noticable....'
                },
                c: {
                    name: '200Hz+',
                    img: 'https://picsum.photos/500',
                    body: 'Almost all panels this quick start making very perceptible tradeoffs likely to be felt in the quality of the image and/or your wallet.'
                },
                active: {
                    name: 'FPS / Refresh Rate',
                    img: 'https://picsum.photos/500',
                    body: `Deciding on a refresh rate and associated target FPS is a comparitively much simpler choice.
                    In a real world situation the average person will generally be able to discern between a 60Hz or greater (eg 144Hz) panel, that said unless your primary purpose for this machine is twitch-shooters such as Counterstrike or Call of Duty a higher refreshrate isn't that important and your budget is better utilised first in other areas.`
                }
            }
            return (
                <>
                <h2>At what framerate will you be gaming?</h2>
                <div className="container-fluid d-flex">
                    <ResCard props={fpsOptions} />
                </div>
                </>
            );
    }

}

export default QuizItem;