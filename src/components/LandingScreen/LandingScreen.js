import React from 'react';

import './LandingScreen.css';

export default function LandingScreen(){
    return (
        <div style={{display: 'flex'}}>
            <div style={{backgroundColor: 'pink', height: '94vh', width: '64vw'}}>
                <div></div>
            </div>
            <div>
                <div style={{backgroundColor: 'red', height: '47vh', width: '33vw'}}></div>
                <div style={{backgroundColor: 'blue', height: '47vh', width: '33vw'}}></div>
            </div>
        </div>
    )
}