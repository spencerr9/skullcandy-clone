import React from 'react';
import skullWht from '../images/skullLogowht.png';
import shoppingBag from '../images/outline-shop-24px.svg';
import search from '../images/outline-search-24px.svg';
import user from '../images/outline-user-24px.svg';

export default function Header(){
    return (
        <div className='headerContainer'>
            <header>
                <div className='leftSide displayFlex' >
                    <img className='skullWht' src={skullWht} alt=""></img>
                    <div className='skullcandyText'>Skullcandy</div>
                    <div className='leftTextContainer displayFlex'>
                        <a href="www.google.com">SHOP</a>
                        <a className='discover' href="www.google.com">DISCOVER</a>
                    </div>
                </div>
                <div className='rightSide displayFlex'>
                    <div className='rightTextContainer displayFlex'>
                        <a href="www.google.com">Location</a>
                        <a href="www.google.com">Support</a>
                    </div>
                    <img className='userImg' src={user} alt=""></img>
                    <img className='searchImg' src={search} alt=""></img>
                    <img src={shoppingBag} alt=""></img>
                </div>
            </header>
        </div>
    )
}