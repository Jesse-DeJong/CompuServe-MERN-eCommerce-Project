import React, { useState, useEffect } from 'react';

function RecCard({
    userData
}) {

    return (
        <ul className="list-group mb-2">
            <li className="list-group-item">Budget: ${userData.budget}</li>
            <li className="list-group-item">Resolution: {userData.resolution}</li>
            <li className="list-group-item">Refresh Rate: {userData.fps}</li>
            <li className="list-group-item">Ray Tracing: {userData.features}%</li>
        </ul>
    )
}

export default RecCard;