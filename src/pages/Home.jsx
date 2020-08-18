import React from 'react';

// Components
import { Img } from '../containers';
import Loading from './Loading';
import { Footer, Header } from '../components';

// Assets
import personNavegating from '../assets/images/programming.png'
import personNavegating1 from '../assets/images/3d-globe.jpg'

export default function Home() {
  return (
    <>
      <Loading />
      <Header />
      <main className="home">
        <div className="first-content">
        <div className="background">
          <Img imgAlt="Guy Navegating on the World" imgClass="first-img" imgUrl={personNavegating} />
        <div className="globe-3d">
        <Img imgAlt="Guy Navegating on the World" imgClass="" imgUrl={personNavegating1} />
        </div>
        </div>
        <div className="content">
          <p className="quote">We know how to do it!</p>
          <h1>Developing Websites</h1>
          <p className="text">we design and develop websites with the heights  professional quality, customizing each website to our client's needs</p>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
