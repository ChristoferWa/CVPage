import React from 'react'
import './about.css'
import ME from '../../assets/Gina.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaDog} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h2>Om mig</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Erfarenhet</h5>
            <small>30 år av uppfödning</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Kunder</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about__card'>
            <FaDog className='about__icon'/>
            <h5>Kullar</h5>
            <small>80+ kullar </small>
          </article>
        </div>
        <p>
        Vår första kull föddes 1992, 2 hanar och 3 tikar och jag var överväldigad😊
        Att föda upp hundar innebär mycket oro, glädje, trötthet mm men ett fantastiskt liv med många nya bekantskaper som ibland blir nära vänner. Vi tycker om att följa våra valpars utveckling i den mån som ägaren vill förstås, därför anordnar vi både valpkurser, träningar, träffar och gemensamma veterinärbesök vid röntgen och ögonlysning tex. För mig som uppfödare är det av största vikt att hund och ägare mår bra med varandra, ibland inträffar saker i livet som gör att man får svårt att ha kvar sin hund, skilsmässa, allergi eller vad som helst, då köper jag gärna tillbaka hunden. Under alla år som uppfödare så har det varit ganska få hundar som kommit tillbaka, men det har varit en bra lösning för både mig och ägaren att jag tar billbaka den, ofta har man en lista på gamla valpköpare som vill ha en omplacering och då vet vi att det kommer bli bra. Om du är intresserad av att veta mer om oss eller våra hundar, välkommen att höra av dig. 
        </p>
        <a href="#contact" className='btn btn-primary'>Kontakta mig</a>
      </div>
      </div>
    </section>
  )
}

export default About