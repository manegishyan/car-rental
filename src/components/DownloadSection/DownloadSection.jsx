import React from 'react';
import './DownloadSection.css';

import google from '../../assets/images/stores/google.svg';
import apple from '../../assets/images/stores/apple.svg';


export const DownloadSection = () => {
  return (
    <section className='download-section'>

        <div className="download-section__container">
            <div className="download-section__content">
                <button className='download-btn'>download</button>
                <h2 className='download-title'>Download Rentcars App for <span className='free'>FREE</span></h2>
                <p className='download-subtitle'>For faster, easier booking and exclusive deals.</p>
            </div>
            <div className="download-app">
                <a href="#" className='download-app-bage'>
                    <img src={google} alt="Get it on Googl Play" />
                </a>
                <a href="#" className='download-app-bage'>
                    <img src={apple} alt="Get it on Googl Play" />
                </a>
            </div>
        </div>

    </section>
  )
}
