import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/giraffe.png'
import AVTR2 from '../../assets/leopard.png'
import AVTR3 from '../../assets/bumblebee.png'
import AVTR4 from '../../assets/Koala.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Christofer Wallenius',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minus ad tempora possimus deleniti veniam explicabo quia repudiandae. Ad quod culpa quia modi. Sed, quia.'

  },
  {
    avatar: AVTR2,
    name: 'Lars Persson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minus ad tempora possimus deleniti veniam explicabo quia repudiandae. Ad quod culpa quia modi. Sed, quia.'

  },
  {
    avatar: AVTR3,
    name: 'Gordon Persson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minus ad tempora possimus deleniti veniam explicabo quia repudiandae. Ad quod culpa quia modi. Sed, quia.'

  },
  {
    avatar: AVTR4,
    name: 'Kristian Persson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minus ad tempora possimus deleniti veniam explicabo quia repudiandae. Ad quod culpa quia modi. Sed, quia.'

  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials