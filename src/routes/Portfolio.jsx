import React from 'react';
import '../components/portfolio/portfolio.css';
import IMG1 from '../assets/Moses.png';
import IMG2 from '../assets/Snöa.png';
import IMG3 from '../assets/Valpen.png';
import IMG4 from '../assets/Mackenzie.png';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Moses',
    description: 'Titlar: SE UHC, HD/BB, ED/00, Öga/ua (2019), Genomfört BPH',
    stamtavla: 'https://hundar.skk.se/hunddata/Hund_Stamtavla.aspx?hundid=3152891&fbclid=IwAR3_P_rMe3ijPd18YIu0WkxSHt83ib1YUr_hRWVhLgNho0kA-yTRYPH9Jtw',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Snöa',
    description: 'Testar lite text till Snöa',
    stamtavla: 'https://hundar.skk.se/hunddata/Hund_Stamtavla.aspx?hundid=3532761&fbclid=IwAR362mjci1xd0qLqJDSO1rtobM5zZMZ5bDbIvuzdulYJaSYvyJV_RLANkZQ',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Valpen',
    description: 'Titlar: NORD-JV 19, SE UCH, HeW-21, FI UHC, HD/AA, ED/00, Ögon/ua, Genomfört BPH',
    stamtavla: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Mackenzie',
    description: 'Här kommer lite text om Mackenzie',
    stamtavla: 'https://hundar.skk.se/hunddata/Hund_Stamtavla.aspx?hundid=3235041&fbclid=IwAR1RHD3lBydNhAjE0__sNGgYf1bWm-0iXBtrNXQvSyX4eMysASn_YyhBzr8',
    demo: 'https://dribbble.com/alien_pixels'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
       <Nav />
      <h2>Hundar</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, stamtavla, description}) => {
           return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} className='dog__picture'/>
            </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portfolio__item-cta">
              <a href={stamtavla} className='btn btn-primary' target='_blank'>Stamtavla</a>
              </div>
          </article>
           )
         })
       }
      </div>
      <Footer />
    </section>
  )
}

export default Portfolio