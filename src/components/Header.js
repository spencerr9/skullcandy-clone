import React from 'react';
import skullWht from '../images/skullLogowht.png';

export default function Header(){
    return (
        <div>
            <header>
                <div className='displayFlex' style={{padding: '0 4vw'}}>
                    <img src={skullWht} alt="" style={{height: '32px'}} ></img>
                    <div style={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '-1px'}}>Skullcandy</div>
                    <div className='displayFlex' style={{padding: '0 0 0 2vw', fontSize: '12px'}}>
                        <div>SHOP</div>
                        <div style={{padding: '0 0 0 2vw'}} >DISCOVER</div>
                    </div>
                </div>
                
            </header>
        </div>
    )
}