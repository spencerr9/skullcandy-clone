import React from 'react';
import skullWht from '../images/skullLogowht.png';
import shoppingBag from '../images/outline-shop-24px.svg';
import search from '../images/outline-search-24px.svg';
import user from '../images/outline-user-24px.svg';

export default function Header(){
    return (
        <div>
            <header style={{padding: '0 5vw 0 4vw', justifyContent: 'space-between'}} >
                <div className='displayFlex' >
                    <img src={skullWht} alt="" style={{height: '32px'}} ></img>
                    <div style={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '-1px'}}>Skullcandy</div>
                    <div className='displayFlex' style={{padding: '0 0 0 2vw', fontSize: '12px'}}>
                        <a href="www.google.com" style={{padding: '10px 0'}}>SHOP</a>
                        <a href="www.google.com" style={{margin: '0 0 0 2vw', padding: '10px 0'}} >DISCOVER</a>
                    </div>
                </div>
                <div className='displayFlex'  >
                    <div className='displayFlex' style={{padding: '0 0 0 2vw', fontSize: '11px'}}>
                        <a href="www.google.com" style={{margin: '0 1.5vw 0 0', padding: '10px 0', color: '#999'}} >Location</a>
                        <a href="www.google.com" style={{margin: '0 1.5vw 0 0', padding: '10px 0', color: '#999'}} >Support</a>
                    </div>
                    <img src={user} alt="" style={{padding: '0 1.5vw 0 0', height: '33px'}} ></img>
                    <img src={search} alt="" style={{padding: '0 2vw 0 0', height: '29px'}} ></img>
                    <img src={shoppingBag} alt="" style={{}} ></img>
                </div>
                
            </header>
        </div>
    )
}