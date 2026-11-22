import React from "react"

import './PopularDeals.css'

import jaguarImg from '../../assets/images/cars/jaguar.svg';
import audiImg from '../../assets/images/cars/audi.svg';
import bmwImg from '../../assets/images/cars/bmw.svg';
import lamborghiniImg from '../../assets/images/cars/lamborghini.svg';

import starImg from '../../assets/images/cars/star.svg';
import passengersImg from '../../assets/images/cars/passagers.svg'
import gearboxImg from  '../../assets/images/cars/gearbox.svg';
import airConditioningImg from  '../../assets/images/cars/airConditioning.svg';
import doorsImg from  '../../assets/images/cars/doors.svg';
import arrowImg from  '../../assets/images/cars/arrow.svg';
import arrow2Img from  '../../assets/images/cars/arrow2.svg';


const carsData = [
  {
    id: 1,
    name: 'Jaguar XE L P250',
    image: jaguarImg,
    rating: 4.8,
    reviews: '2.436',
    passengers: '4 Passagers',
    gearbox: 'Auto',
    airConditioning: 'Air Conditioning',
    doors: '4 Doors',
    price: '$1,800',
  },
  {
    id: 2,
    name: 'Audi R8',
    image: audiImg,
    rating: 4.6,
    reviews: '1.936',
    passengers: '2 Passagers',
    gearbox: 'Auto',
    airConditioning: 'Air Conditioning',
    doors: '2 Doors',
    price: '$2,100',
  },
  {
    id: 3,
    name: 'BMW M3',
    image: bmwImg,
    rating: 4.5,
    reviews: '2.036',
    passengers: '4 Passagers',
    gearbox: 'Auto',
    airConditioning: 'Air Conditioning',
    doors: '4 Doors',
    price: '$1,600',
  },
  {
    id: 4,
    name: 'Lamborghini Huracan',
    image: lamborghiniImg,
    rating: 4.3,
    reviews: '2.236',
    passengers: '2 Passagers',
    gearbox: 'Auto',
    airConditioning: 'Air Conditioning',
    doors: '2 Doors',
    price: '$2,300',
  },
]

export const PopularDeals = () => {
  return (
    <section className="popular-deals">

        <div className="popular-deals__container">
            
            <div className="popular-deals__header">
              <a href="#" className="popular-badge">POPULAR RENTAL DEALS</a>
              <h2 className="popular-title">Most popular cars rental deals</h2>
            </div>

            <div className="popular-deals__grid">
              {carsData.map((car) => (
                <div className="car-card" key={car.id}>

                  <div className="car-card__image">
                    <img src={car.image} alt={car.name} />
                  </div>

                  <div className="car-card__content">
                    <h3 className="car-card__title">{car.name}</h3>

                    <div className="car-card__rating">
                      <span className="star">
                        <img src={starImg} alt="star" />
                      </span>
                      <span>{car.rating}</span>
                      <span className="reviews">({car.reviews} reviews)</span>
                    </div>

                    <div className="car-card__features">
                      <div><span><img src={passengersImg} alt="pessengers" /></span> {car.passengers}</div>
                      <div><span><img src={gearboxImg} alt="gearbox" /></span>{car.gearbox}</div>
                      <div><span><img src={airConditioningImg} alt="airConditioning" /></span>{car.airConditioning}</div>
                      <div><span><img src={doorsImg} alt="doors" /></span>{car.doors}</div>
                    </div>

                    <div className="car-card__footer">
                      <div className="car-card__price">
                        <span className="price-lable">Price</span>
                        <div>
                          <span className="car-price">{car.price}</span> <span className="car-day">/day</span>
                        </div>
                      </div>

                      <button className="rent-btn">
                        Rent Now <span><img src={arrowImg} alt="arrow" /></span>

                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>    

            <div className="popular-deals__more">
              <button className="show-all__btn">
                Show all vehicles <span><img src={arrow2Img} alt="arrow" /></span>
              </button>
            </div>        

        </div>
    </section>
  )
}
