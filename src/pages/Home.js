import React, { useEffect, useRef } from 'react';
import useAOS from '../hooks/useAOS';

function Home() {
  useAOS();
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;

    const timer = setTimeout(() => {
      animatedRef.current = true;
      if (window.$) {
        window.$('.stat-number-10').each(function() {
          const $this = window.$(this);
          if (!$this.data('animated')) {
            $this.data('animated', true);
            $this.animateNumber(
              { number: 10 },
              { duration: 2000 }
            );
          }
        });
        window.$('.stat-number-8').each(function() {
          const $this = window.$(this);
          if (!$this.data('animated')) {
            $this.data('animated', true);
            $this.animateNumber(
              { number: 8 },
              { duration: 2000 }
            );
          }
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .hero-vert-label {
          display: block;
        }
        @media (max-width: 768px) {
          .hero-vert-label {
            display: none !important;
          }
        }
        .typing-animation {
          animation: slideDown 1.5s ease-out;
        }
        .hero-title {
          font-size: 2.7rem;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.5rem !important;
          }
        }
        .hero-main-title {
          position: relative;
          display: inline-block;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow:
            0px 10px 28px rgba(0, 0, 0, 0.65),
            6px 6px 0px rgba(0, 0, 0, 0.22),
            -4px 4px 18px rgba(0, 0, 0, 0.35);
        }
        @media (max-width: 576px) {
          .hero-main-title {
            letter-spacing: 1px;
            text-shadow:
              0px 6px 16px rgba(0, 0, 0, 0.6),
              4px 4px 0px rgba(0, 0, 0, 0.2);
          }
        }
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-100px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative', marginBottom: 0, paddingBottom: 0 }}>
        <img 
          src="/images/home2.png" 
          alt="Banner" 
          style={{ 
            width: '100%', 
            height: 'auto',
            maxHeight: '630px',
            objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.6)'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
          width: '90%'
        }}>
          <h1 className="typing-animation hero-main-title" style={{
            fontSize: 'clamp(24px, 5vw, 52px)',
            fontWeight: '700',
            margin: '0',
            color: '#ffffffff',
            letterSpacing: '2px'
          }}>
            MECVITECH ENGINEERING & CONSULTANTS PVT. LTD.
          </h1>
        </div>
      </div>
      
      <section
        id="home-section"
        className="hero hero-static"
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        <div className="container-fluid px-0">
        <div className="row align-items-center flex-column-reverse flex-md-row no-gutters" style={{ margin: 0, padding: 0 }}>
          <div className="col-md-6 col-lg-6 d-flex" data-aos="slide-left" data-aos-duration="1000">
            <div
              className="hero-copy ftco-animate"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <span className="subheading ab" data-aos="slide-left" data-aos-duration="1000">ENGINEERING EXCELLENCE • TAILORED SOLUTIONS</span>
              <h1 className="mb-4 mt-3 hero-title" data-aos="slide-left" data-aos-duration="1000" style={{ fontSize: '2.7rem' }}>
                <span>Advanced</span> Engineering & <span>Industrial</span> Solutions
              </h1>
              <p className="hero-lead" data-aos="slide-left" data-aos-duration="1000">A steady flow of engineering excellence deliverables to industries with the reliability they depend on. It is a space shaped by precision, purpose, and progress.</p>
              
              <div className="hero-stats mb-4" data-aos="slide-left" data-aos-duration="1000">
                <div
                  className="d-flex text-center flex-nowrap w-100"
                  style={{ gap: '16px', padding: '0 16px', justifyContent: 'space-between', minWidth: 0 }}
                >
                  <div className="flex-fill" style={{ minWidth: 0 }} data-aos="slide-left" data-aos-duration="1000">
                    <div className="stat-item h-100">
                      <h4 className="stat-number"><span className="stat-number-10">10</span><span>+</span></h4>
                      <p className="stat-text mb-0">Projects Ongoing</p>
                    </div>
                  </div>
                  <div className="flex-fill" style={{ minWidth: 0 }} data-aos="slide-left" data-aos-duration="1000">
                    <div className="stat-item h-100">
                      <h4 className="stat-number"><span className="stat-number-8">8</span></h4>
                      <p className="stat-text mb-0">Projects Executed</p>
                    </div>
                  </div>
                  <div className="flex-fill" style={{ minWidth: 0 }} data-aos="slide-left" data-aos-duration="1000">
                    <div className="stat-item h-100">
                      <h4 className="stat-number"><span className="stat-number-10">10</span><span>+</span></h4>
                      <p className="stat-text mb-0">Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p><a href="/contact" className="btn btn-primary px-5 py-3 mt-3">Get In Touch</a></p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 pr-0 pb-0 d-flex" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="300">
            <div
              className="hero-image js-fullheight"
              style={{backgroundImage: 'url(/images/home.png)'}}
            >
              <div className="overlay"></div>
            </div>
          </div>
          <style>{`
            @media (min-width: 992px) {
              .hero-image.js-fullheight {
                margin-bottom: 0 !important;
                padding-bottom: 0 !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
