import React from 'react';
import logo from '../assets/images/logo.svg';

// Components
import { Img } from '../containers';
import Loading from './Loading';
import { Header, Footer } from '../components';

// Assets
import personNavegating from '../assets/images/person-navegating.png'

export default function Home() {
  return (
    <>
      <Loading />
      <Header />
      <main className="home">
        <div className="background">
          <Img imgAlt="Guy Navegating on the World" imgClass="first-img" imgUrl={personNavegating}></Img>
        </div>
        <div className="content">
          <p className="quote">We know how to do it!</p>
          <h1>Developing Websites</h1>
          <p className="text">we design and develop websites with the heights  professional quality, customizing each website to our client's needs</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
