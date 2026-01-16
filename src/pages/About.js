import React from 'react';
import useAOS from '../hooks/useAOS';

function About() {
  useAOS();

  return (
    <section
      className="ftco-counter img ftco-section ftco-no-pt ftco-no-pb"
      id="about-section"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex" data-aos="slide-left" data-aos-delay="100" data-aos-duration="1000">
            <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url(images/about.png)'}}></div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 py-5" data-aos="slide-right" data-aos-delay="150" data-aos-duration="1000">
            <div className="py-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">Welcome to Mecvitech</span>
                  <h2 className="mb-4" style={{fontSize: '34px', textTransform: 'capitalize'}}>Engineering & Technology Solutions</h2>
                  <p>Mecvitech delivers practical and reliable engineering solutions for new and aging industrial infrastructure across the oil & gas and ferrous/non-ferrous sectors. As hundreds of depots, thousands of storage tanks, and vast piping networks in India face corrosion, settlement, and structural fatigue, we provide the expertise needed to evaluate damages and restore facilities to safe, efficient operation.</p>
                  <p>We offer comprehensive design consultancy for EPC projects, including tank farms, power plants, steel plants, coke ovens, conveyor systems, and more. Our services also include detailed adequacy checks of old tank's structures and provide remediation solutions to ensure long-term performance and compliance.</p>
                  <p>Our mission is to provide engineering solutions to tankage, pressure vessels - including low pressure storage systems - along with piping, civil and structural works, and E&I systems with precision and purpose. Mecvitech blends practical engineering with advanced analysis to deliver solutions that strengthen assets, enhance safety and support industrial progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
