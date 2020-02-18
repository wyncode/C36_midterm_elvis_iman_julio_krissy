import React from 'react';
import AcceusJulio from './AboutImages/AcceusJulio.jpg';
import BashirIman from './AboutImages/BashirIman.jpg';
import HernandezElvis from './AboutImages/HernandezElvis.jpg';
import KeranoraKrisi from './AboutImages/KeranoraKrisi.jpg';

const About = () => {
  return (
    <>
      <div className="about-body">
        <p>
          AirAware is a consulting company that provides businesses and
          individuals with everyday air pollution information in the United
          States and strategies about air pollution.
        </p>
      </div>
      <div id="about-images">
        <img id="about-person" src={AcceusJulio} alt="image of Juluio" />
        <img id="about-person" src={BashirIman} alt="image of Iman" />
        <img id="about-person" src={HernandezElvis} alt="image of Elvis" />
        <img id="about-person" src={KeranoraKrisi} alt="image of Krisi" />
      </div>
      <div className="about-footer">
        <p>© 2020 AirAware</p>
      </div>
    </>
  );
};

export default About;
