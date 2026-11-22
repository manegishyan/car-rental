import React from 'react';
import './AboutUs.css';

import user1Img from '../../assets/images/users/user1.svg';
import user2Img from '../../assets/images/users/user2.svg';
import user3Img from '../../assets/images/users/user3.svg';

import starsImg from '../../assets/images/users/stars.svg'



const testimonialsData = [
  {
    id: 1,
    rating: '5.0',
    reviewText: '"I have been using your services for 3 years. Your service is great, I will continue to use your service."',
    name: 'Jenny Wilson',
    location: 'From New York, US',
    image: user1Img,
  },
  {
    id: 2,
    rating: '5.0',
    reviewText: "'I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.'",
    name: 'Charlie Johnson',
    location: 'From New York, US',
    image: user2Img,
  },
  {
    id: 3,
    rating: '5.0',
    reviewText: "'I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.'",
    name: 'Charlie Johnson',
    location: 'From New York, US',
    image: user3Img,
  },
]

export const AboutUs = () => {
  return (
    <section className='about-section'>

        <div className="about-section__container">

            <div className="about-header">
                <button className='testimonials-btn'>TESTIMONIALS</button>
                <h2 className='testimonials-title'>What peole say about us?</h2>
            </div>

          </div>
          

          <div className="testimonials-cards">
            {testimonialsData.map((item) => (
              <div className="testimonial-card" key={item.id}>
                <div className="testimonial-card__image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="testimonial-card__content">
                  <div className="testimonial-card__rating">
                    <span className="rating-score">{item.rating}</span>
                    <span className="rating-label">stars</span>
                  </div>
                  
                  <div className="testimonial-card__stars">
                    <img src={starsImg} alt="star" />
                  </div>
                  
                  <p className="testimonial-card__text">{item.reviewText}</p>
                  
                  <div className="testimonial-card__author">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-location">{item.location}</span>
                 </div>
                </div>
                </div>  
            ))}
          </div>
          
    </section>
  )
}
