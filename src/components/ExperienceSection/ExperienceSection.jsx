
import React from 'react';
import './ExperienceSection.css';

import walletIcon from '../../assets/images/icons/wallet.svg'
import userIcon from '../../assets/images/icons/user.svg'
import supportIcon from '../../assets/images/icons/support.svg'
import messagesIcon from '../../assets/images/icons/messages.svg'

const features = [
  {
    id: 1,
    title: 'Best price guaranteed',
    description: "Find a lower price? We'll refund you 100% of the difference.",
    icon: walletIcon,
  },
  {
    id: 2,
    title: 'Experience driver',
    description: "Don't have driver? Don't worry, we have many experienced driver for you.",
    icon: userIcon,
  },
  {
    id: 3,
    title: '24 hour car delivery',
    description: "Book your car anytime and we will deliver it directly to you.",
    icon: supportIcon,
  },
  {
    id: 4,
    title: '24/7 technical support',
    description: "Have a question? Contact Rentcars support any time when you have problem.",
    icon: messagesIcon,
  },
]

export const ExperienceSection = () => {
  return (
    <section className='experience-section'>

      <div className="experience-section__container">

        <div className="experience-section__image-side"></div>

        <div className="experience-section__content">
          <a href="#" className='experience-btn'>Why Choose Us</a>
          <h3 className='experience-title'>We offer the best experience with our rental deals</h3>

          <div className="experience-list">
            {features.map((item) => (
              <div className="experience-item" key={item.id}>
                <div className="experience-item__icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="experience-item__info">
                  <h4 className='experience-item__title'>{item.title}</h4>
                  <p className='experience-item__text'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}
