import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
import IMG5 from '../../assets/port5.png'
import IMG6 from '../../assets/port6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto',
    github: 'https://github.com',
    demo: 'https://dribbble.com/alien_pixels'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio