import React from 'react';

import './LandingScreen.css';

export default function LandingScreen(){
    let shopButton = <a href="./#" className="shopButton" style={{color: 'black'}}>SHOP NOW</a>
    return (
        <div style={{display: 'flex', height: '94vh', width: '100vw'}}>
            <div className='landing' style={{height: '100%', width: '72%'}}>
                <h1>WE'RE CRUSHING<br></br>
                    ON YOU.
                </h1>
                <br></br>
                <p>Spend $50+ and get a gift with purchase.</p>
                <br></br>
                {shopButton}
            </div>
            <div style={{height: '100%', width: '36vw', backgroundColor: 'green'}}>
                <div className='topLanding' style={{backgroundColor: 'red', height: '50%', width: '100%'}}>
                    <h1 style={{padding: '25px 25px'}}>STACK YOUR CART TO<br></br>
                        SEE WHAT YOU <br></br>
                        QUALIFY FOR.
                    </h1>
                </div>
                <div className='bottomLanding' style={{backgroundColor: 'blue', height: '50%', width: '100%'}}></div>
            </div>
        </div>
    )
}