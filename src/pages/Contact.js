import React from 'react';
import useAOS from '../hooks/useAOS';
function Contact() {
  useAOS();
  const companyAddress = 'Astra Tower, New Town';
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(companyAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="container" style={{ paddingBottom: '80px' }}>
        <div className="row justify-content-center mb-5 pb-3">
          <div
            className="col-md-7 mt-5 heading-section text-center ftco-animate"
            data-aos="slide-up"
            data-aos-delay="50"
            data-aos-duration="900"
          >
            <span className="subheading" data-aos="slide-up" data-aos-delay="40" data-aos-duration="700">Contact MecVitech</span>
            <h2 className="mb-4" data-aos="slide-up" data-aos-delay="100" data-aos-duration="800">Get in touch</h2>
            <p data-aos="slide-up" data-aos-delay="160" data-aos-duration="800">For project enquiries, partnerships or support, reach out and we'll respond promptly.</p>
          </div>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 mb-5 d-flex" data-aos="slide-right" data-aos-delay="150" data-aos-duration="1000">
            <div id="map" className="bg-bl" style={{width: '100%', position: 'relative'}}>
              <iframe
                title="company-location"
                src={mapSrc}
                style={{border:0, width: '100%', height: '100%', minHeight: 400}}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex" data-aos="slide-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="w-100 p-4 contact-info-right">
              <div className="row">
                <div className="col-12 mb-3" data-aos="fade-up" data-aos-delay="200">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-phone2"></span>
                    </div>
                    <h3 className="mb-4">Contact Number</h3>
                    <p><a href="tel:+919836955022">+91 98369 55022</a></p>
                  </div>
                </div>
                <div className="col-12 mb-3" data-aos="fade-up" data-aos-delay="240">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-paper-plane"></span>
                    </div>
                    <h3 className="mb-4">Email Address</h3>
                    <p><a href="mailto:mecvitech@gmail.com">mecvitech@gmail.com</a></p>
                  </div>
                </div>
                <div className="col-12 mb-3" data-aos="fade-up" data-aos-delay="280">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-map-signs"></span>
                    </div>
                    <h3 className="mb-4">Address</h3>
                    <p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`} target="_blank" rel="noopener noreferrer">{companyAddress}</a></p>
                  </div>
                </div>
                <div className="col-12 mb-3" data-aos="fade-up" data-aos-delay="320">
                  <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="icon-globe"></span>
                    </div>
                    <h3 className="mb-4">Website</h3>
                    <p><a href="https://mecvitech.com">www.mecvitech.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
