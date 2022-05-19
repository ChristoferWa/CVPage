import React from 'react';
import '../components/experience/experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const Experience = () => {
  return (
    <section id='experience'>
       <Nav />
      <h2>Domare</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Dömer följande raser</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>BORDER TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>CAIRN TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>FOX TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>GERMAN HUNTING TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>JACK RUSSELL TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>NORFOLK TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>NORWICH TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>PARSON RUSSELL TERRIER</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>WELSH TERRIER</h4><small className='text-light'></small></div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Har dömt i följande länder</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>Sverige</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>Norge</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>Finland</h4><small className='text-light'></small></div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>Danmark</h4><small className='text-light'></small></div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Experience