import React from 'react';
import AcceusJulio from './AboutImages/AcceusJulio.jpg';
import BashirIman from './AboutImages/BashirIman.jpg';
import HernandezElvis from './AboutImages/HernandezElvis.jpg';
import { KeranovaKrisi } from './AboutImages/KeranoraKrisi.jpg';
import { logo } from './logo.png';

const About = () => {
  return (
    <>
      <div className="about-body">
        <p>
          AirAware is a consulting company that provides business and
          individuals with everyday solutions and strategies about air
          pollution.
        </p>
      </div>
      <img src={logo} alt="logo" />
      <div className="about-images">
        <img src={AcceusJulio} />
        <img src={BashirIman} />
        <img src={HernandezElvis} />
        <img src={KeranovaKrisi} />
      </div>
      <div className="about-footer">Contact us at breate@airaware.com</div>
    </>
  );
};

export default About;
