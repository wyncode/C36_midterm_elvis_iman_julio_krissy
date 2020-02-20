import React from 'react';
import AcceusJulio from './AboutImages/AcceusJulio.jpg';
import BashirIman from './AboutImages/BashirIman.jpg';
import HernandezElvis from './AboutImages/HernandezElvis.jpg';
import KeranoraKrisi from './AboutImages/KeranoraKrisi.jpg';

const About = () => {
  return (
    <>
        <div className="top-banner-inner-pages">
        <div id="title-inner-pages">Our Mission is to Provide Awareness on Air Solutions</div>
        </div>
      <div className="about-body">
        <p>
          AirAware is a consulting company that provides businesses and
          individuals with everyday air pollution information in the United
          States and strategies about air pollution.
        </p>
      </div>
      <div id="about-images">
        <a href="https://www.linkedin.com/in/julio-acceus-68901b98/">
          <img id="about-person" src={AcceusJulio}  alt="image of Juluio" />
        </a>
        <a href="https://www.linkedin.com/in/imanbashir/">
          <img id="about-person" src={BashirIman} alt="image of Iman" />
        </a>
        <a href="https://www.linkedin.com/in/elvis-hernandez-9669a618a">
          <img id="about-person" src={HernandezElvis} alt="image of Elvis" />
        </a>
        <a href="https://www.linkedin.com/in/krisi-keranova-9bbba819/">
          <img id="about-person" src={KeranoraKrisi} alt="image of Krisi" />
        </a>
      </div>
    </>
  );
};

export default About;
