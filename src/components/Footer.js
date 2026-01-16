import React from 'react';

function Footer() {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-0">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Mecvitech</h2>
              <p>Across the long-forgotten tank farms and pipelines, where age leaves its quiet marks, expertise rises to restore their strength.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="https://x.com/mecvitech2024/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fa-brands fa-x-twitter" style={{color: '#c9c9c9', fontSize: '20px'}}></i></a></li>
                <li className="ftco-animate"><a href="https://www.facebook.com/share/1BL66mbZga/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fa-brands fa-facebook-f" style={{color: '#c9c9c9', fontSize: '20px'}}></i></a></li>
                <li className="ftco-animate"><a href="https://www.linkedin.com/company/mecvitech-engineering-consultants-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><i className="fa-brands fa-linkedin-in" style={{color: '#c9c9c9', fontSize: '20px'}}></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="/about"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="/services"><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="/projects"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="/contact"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="/service/v-pills-1"><span className="icon-long-arrow-right mr-2"></span>Distressed Tank Solutions</a></li>
                <li><a href="/service/v-pills-2"><span className="icon-long-arrow-right mr-2"></span>Design Engineering</a></li>
                <li><a href="/service/v-pills-3"><span className="icon-long-arrow-right mr-2"></span>Inspection Services</a></li>
                <li><a href="/service/v-pills-4"><span className="icon-long-arrow-right mr-2"></span>Technical Training</a></li>
                <li><a href="/service/v-pills-6"><span className="icon-long-arrow-right mr-2"></span>Fire Protection</a></li>
              </ul>

            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">Astra Tower, ASO-715, Action Area IIC, Newtown, Kolkata - 700161, India. </span></li>
                  <li><a href="tel:+919836955022"><span className="icon icon-phone"></span><span className="text">+91 98369 55022</span></a></li>
                  <li><a href="mailto:mecvitech@gmail.com"><span className="icon icon-envelope"></span><span className="text">mecvitech@gmail.com</span></a></li>
                  <li><a href="https://mecvitech.com" target="_blank" rel="noopener noreferrer"><span className="icon icon-globe"></span><span className="text">www.mecvitech.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
