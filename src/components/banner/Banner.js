import React from 'react';
import './banner.css';
import Img from '../../assets/IMG.png';
const Banner = () => {
    return (
        <div className='HomeBanner'>
            <img src={Img} alt="côte, falaise" className='KasaBanner'></img>
            <div className='BannerText'>
            <h1>
                Chez vous, partout et ailleurs
            </h1>
        </div>
        </div>
    );
};

export default Banner;