import React from 'react';

import './LandingScreen.css';

export default function LandingScreen(){
    return (
        <div style={{display: 'flex', height: '94vh', width: '100vw'}}>
            <div className='landing' style={{height: '100%', width: '72%'}}></div>
            <div style={{height: '100%', width: '36vw', backgroundColor: 'green'}}>
                <div className='topLanding' style={{backgroundColor: 'red', height: '50%', width: '100%'}}>
                    <div style={{padding: '25px 25px'}}>STACK YOUR CART TO <br></br>
                        SEE WHAT YOU <br></br>
                        QUALIFY FOR
                    </div>
                </div>
                <div className='bottomLanding' style={{backgroundColor: 'blue', height: '50%', width: '100%'}}></div>
            </div>
        </div>
    )
}