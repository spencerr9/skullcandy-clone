import React from 'react';
import skullWht from '../images/skullLogowht.png';
import shoppingBag from '../images/outline-shop-24px.svg';
import search from '../images/outline-search-24px.svg';
import user from '../images/outline-user-24px.svg';

export default function Header(){
    return (
        <div>
            <header style={{padding: '0 4vw 0 4vw', justifyContent: 'space-between'}} >
                <div className='displayFlex' >
                    <img src={skullWht} alt="" style={{height: '32px'}} ></img>
                    <div style={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '-1px'}}>Skullcandy</div>
                    <div className='displayFlex' style={{padding: '0 0 0 2vw', fontSize: '12px'}}>
                        <div>SHOP</div>
                        <div style={{padding: '0 0 0 2vw'}} >DISCOVER</div>
                    </div>
                </div>
                <div className='displayFlex' >
                    <div className='displayFlex' style={{padding: '0 0 0 2vw', fontSize: '11px', color: '#999'}}>
                        <div>Location</div>
                        <div>Support</div>
                    </div>
                    <img src={user} alt=""  ></img>
                    <img src={search} alt=""  ></img>
                    <img src={shoppingBag} alt=""  ></img>
                </div>
                
            </header>
        </div>
    )
}