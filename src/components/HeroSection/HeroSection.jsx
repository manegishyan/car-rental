import { useState } from 'react'
import { Header } from '../Header';
import './HeroSection.css'

import LocationIcon from '../../assets/images/icons/location.svg?react'
import DateIcon from '../../assets/images/icons/date.svg?react'


import google from '../../assets/images/stores/google.svg';
import apple from '../../assets/images/stores/apple.svg';


export const HeroSection = () => {
    const d = new Date()
    const date_str = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
    const [date, setDate] = useState(date_str)
  
    const [location, setLocation] = useState('')
    const [pickupDate, setPickupDate] = useState(date_str)
    const [returnDate, setReturnDate] = useState(date_str)
  
  return (
    <section className="section hero-section">
        <div className="hero-section__container">
            <div className="hero-section__content">
              <h1 className='hero-title'>Find, book and <br /> rent a car 
              <span className='hero-title-accent'> Easily 
                <svg width="134" height="19" viewBox="0 0 134 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M133.47 1.55529C56.1979 -3.4811 22.9228 5.02254 0.58496 8.54261C0.237805 11.48 0.36965 13.8959 -7.34608e-05 18.5626C59.8952 -0.893031 99.8252 2.30424 133.425 3.54363C133.439 3.17416 133.429 2.6637 133.47 1.55529Z" fill="#1572D3"/>
                </svg>
              </span>
              </h1>
              <p className='text'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
              
              <div className="hero-stores">
                <a href="#" className='hero-store_bage' >
                  <img src={google} alt="Get it on Googl Play" />
                </a>
                <a href="#" className='hero-store_bage' >
                  <img src={apple} alt="Download on the App Store" />
                </a>
              </div>

            </div>
            
            <div className='booking-block'>
              <form action="#" className='booking-form' onSubmit={(e) => e.preventDefault()}>
                
                {/* Location */}
                <div className="input-block">
                  <span className='input-icon'><LocationIcon /></span>
                  <div className="input">
                    <label>Location</label>
                    <input 
                      type="text" 
                      placeholder="Search your location" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <span className='input-line'></span>

                {/* Pickup Date */}
                <div className="input-block">
                  <span className='input-icon'><DateIcon /></span>
                  <div className="input">
                    <label>Pickup date</label>
                    <input 
                      type="date" 
                      value={pickupDate} 
                      onChange={(e) => setPickupDate(e.target.value)}
                    />
                  </div>
                </div>

                <span className='input-line'></span>

                {/* Return Date */}
                <div className="input-block">
                  <span className='input-icon'><DateIcon /></span>
                  <div className="input">
                    <label>Return date</label>
                    <input 
                      type="date" 
                      value={returnDate} 
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button type="submit" className="search-btn">
                  Search
                </button>

              </form>
            </div>

        </div>
        
    </section>
  )
}
