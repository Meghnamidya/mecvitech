import React, { useEffect } from 'react';
import useAOS from '../hooks/useAOS';

function Testimonials() {
  useAOS();
  
  const partners = [
    { id: 1, name: 'Indian Oil', logo: '/images/partner/iocl.png' },
    { id: 2, name: 'Bharat Petroleum', logo: '/images/partner/bpcl.png' },
    { id: 3, name: 'Hindustan Petroleum', logo: '/images/partner/hpcl.png' },
    { id: 4, name: 'Reliance', logo: '/images/partner/reliance.png' },
    { id: 5, name: 'Adani', logo: '/images/partner/adani.png' },
    { id: 6, name: 'KEC', logo: '/images/partner/kec.png' },
    { id: 7, name: 'Himadri', logo: '/images/partner/himadri.png' },
    { id: 8, name: 'Epsilon', logo: '/images/partner/epsilon.png' },
    { id: 9, name: 'Akrivis', logo: '/images/partner/akrivis.png' },
    { id: 10, name: 'Star', logo: '/images/partner/star.png' }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: 'Asit Paul',
      position: 'A3 Engineering',
      image: 'images/p.jpg',
      quote: 'Mecvitech delivered exceptional engineering solutions for our industrial facility. Their attention to detail and technical expertise exceeded our expectations in every way.'
    },
    {
      id: 2,
      name: 'A. Sengupta',
      position: 'Akrivis',
      image: 'images/p.jpg',
      quote: 'The team at Mecvitech demonstrated outstanding professionalism throughout our project. Their innovative approach to complex engineering challenges is truly impressive.'
    },
    {
      id: 3,
      name: 'R. Sukla',
      position: 'Times Project',
      image: 'images/p.jpg',
      quote: 'Working with Mecvitech was a game-changer for our operations. Their comprehensive engineering consultancy helped us optimize our processes and improve efficiency.'
    },
    {
      id: 4,
      name: 'Pritam Kumar',
      position: 'BPCL',
      image: 'images/p.jpg',
      quote: 'Mecvitech provided us with world-class engineering solutions. Their commitment to quality and timely delivery made them an invaluable partner for our infrastructure development.'
    },
    {
      id: 5,
      name: 'Dinesh Kumar',
      position: 'IOCL',
      image: 'images/p.jpg',
      quote: 'The expertise and dedication of Mecvitech team are unmatched. They transformed our vision into reality with their advanced engineering capabilities and strategic planning.'
    }
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.carousel-testimony').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
      
      window.$('.carousel-partners').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 6,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 2 },
          600: { items: 4 },
          1000: { items: 6 }
        }
      });
    }
  }, []);

  return (
    <section
      className="ftco-section testimony-section"
      id="testimony-section"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="container">
        <div className="row justify-content-center pb-3">
          <div
            className="col-md-7 mt-5 text-center heading-section heading-section-white ftco-animate"
            data-aos="slide-up"
            data-aos-delay="50"
            data-aos-duration="900"
          >
            <span className="subheading" data-aos="slide-up" data-aos-delay="40" data-aos-duration="700">Partner Stories</span>
            <h2 className="mb-4" data-aos="slide-up" data-aos-delay="100" data-aos-duration="800">Client Success</h2>
          </div>
        </div>
        <div className="row ftco-animate justify-content-center" data-aos="slide-up" data-aos-delay="220" data-aos-duration="1000">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="item" data-aos="fade-up" data-aos-delay={160 + index * 60}>
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img" style={{backgroundImage: `url(${testimonial.image})`}}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text px-4 pb-5">
                      <p className="mb-4">{testimonial.quote}</p>
                      <p className="name">{testimonial.name}</p>
                      <span className="position">{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="ftco-section partners-section" style={{ backgroundColor: '#ffffffff', paddingTop: '120px', paddingBottom: '15px', marginTop: '80px' }}>
        <style>{`
          .carousel-partners .owl-dots {
            margin-top: 58px;
            display: flex;
            justify-content: center;
            gap: 10px;
          }
          .carousel-partners .owl-dot span {
            background: rgba(0, 0, 0, 0.15) !important;
            width: 10px;
            height: 10px;
            margin: 0;
          }
          .carousel-partners .owl-dot.active span {
            background: #007bff !important;
          }
        `}</style>
        <div className="container">
          <div className="row justify-content-center pb-5" style={{ marginTop: '60px' }}>
            <div
              className="col-md-7 text-center heading-section ftco-animate"
              data-aos="slide-up"
              data-aos-delay="50"
              data-aos-duration="900"
            >
              <span className="subheading" data-aos="slide-up" data-aos-delay="40" data-aos-duration="700" style={{ color: '#007bff' }}>Trusted Partners</span>
              <h2 className="mb-4" data-aos="slide-up" data-aos-delay="100" data-aos-duration="800">Our Industry Partners</h2>
            </div>
          </div>

          <div className="row ftco-animate justify-content-center" data-aos="fade-up" data-aos-delay="220" data-aos-duration="1000">
            <div className="col-md-12">
              <div className="carousel-partners owl-carousel ftco-owl">
                {partners.map((partner) => (
                  <div 
                    key={partner.id}
                    className="item"
                  >
                    <div
                      className="partner-logo"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '140px',
                        height: '140px',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        border: '2px solid #d0d0d0',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        margin: '0 auto'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px) scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        title={partner.name}
                        style={{
                          maxWidth: '85%',
                          maxHeight: '85%',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%23e8f0ff'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23007bff' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Testimonials;
