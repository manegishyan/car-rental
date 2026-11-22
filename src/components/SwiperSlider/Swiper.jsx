import React from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import './Swiper.css';

import locationIcon from '../../assets/images/icons/gps.svg'
import calendarIcon from '../../assets/images/icons/calendar.svg'
import carIcon from '../../assets/images/icons/car.svg'

import hondaLogo from '../../assets/images/brands/honda.svg';
import jaguarLogo from '../../assets/images/brands/jaguar.svg';
import nissanLogo from '../../assets/images/brands/nissan.svg';
import volvoLogo from '../../assets/images/brands/volvo.svg';
import audiLogo from '../../assets/images/brands/audi.svg';
import acuraLogo from '../../assets/images/brands/acura.svg';

const logos = [
  { src: hondaLogo, alt: 'Honda' },
  { src: jaguarLogo, alt: 'Jaguar' },
  { src: nissanLogo, alt: 'Nissan' },
  { src: volvoLogo, alt: 'Volvo' },
  { src: audiLogo, alt: 'Audi' },
  { src: acuraLogo, alt: 'Acura' },
];

export const Swiper =() => {
  return (
  
  <section className="brands-section">

    <div className="brands-section__container">

      <div className="brands-content">
        <a href="#" className='brands-btn'>How it work</a>
        <h1 className='brands-title'>Rent with following 3 working steps</h1>
      </div>
      
      <div className="steps">
        
        <div className="steps-content">
        <button className='steps-btn'>
          <img src={locationIcon} alt="" />
        </button>
          <h6 className='steps-title'>Choose location</h6>
          <p className='steps-subtitle'>Choose your and find your best car</p>
        </div>

        <div className="steps-content">
        <button className='steps-btn'>
          <img src={calendarIcon} alt="" />
        </button>
          <h6 className='steps-title'>Pick-up date</h6>
          <p className='steps-subtitle'>Select your pick up date and time to book your car</p>
        </div>

        <div className="steps-content">
        <button className='steps-btn'>
          <img src={carIcon} alt="" />
        </button>
          <h6 className='steps-title'>Book your car</h6>
          <p className='steps-subtitle'>Book your car and we will deliver it directly to you</p>
        </div>

      </div>


    </div>

    
    <SwiperReact
      slidesPerView={4}
      spaceBetween={40}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="brands-swiper"
      >
      {logos.map((logo) => (
        <SwiperSlide key={logo.alt} className='brands-swiper__slide'>
          <img src={logo.src} alt={logo.alt} className="brand-logo" />
        </SwiperSlide>
      ))}
    </SwiperReact>
    </section>
  );
}