import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

function Services() {
  useAOS();
  const location = useLocation();
  const initialTab = location.state?.activeService || 'v-pills-1';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const services = [
    {
      id: 'v-pills-1',
      icon: 'flaticon-web-design',
      title: 'Providing Solutions of Distressed Tanks',
      content: 'Distress & damage analysis, targeted repair strategies and restoration. Detailed analysis identifies root causes and weaknesses. Expert repair methodologies stabilize structures. Comprehensive restoration plans ensure safe, compliant operation with extended service life.'
    },
    {
      id: 'v-pills-2',
      icon: 'flaticon-ideas',
      title: 'Design Engineering',
      content: 'Tank foundation and ancillary engineering deliver complete design solutions for storage tanks, piping systems, and terminal infrastructure. The scope includes tank structures, foam systems, structural works, and civil engineering, ensuring safe operations and regulatory compliance.'
    },
    {
      id: 'v-pills-3',
      icon: 'flaticon-analysis',
      title: 'Inspection Services',
      content: 'Technical inspection and data evaluation for completeness of installed facility. Assessments across structural, civil, electrical, and piping systems. Includes QA-QC and inspection test plans. Ensures safety, serviceability, compliance, and actionable recommendations.'
    },
    {
      id: 'v-pills-4',
      icon: 'flaticon-innovation',
      title: 'Technical Training',
      content: 'Technical consulting, system audits, and training programs. Online and offline training on design, construction, maintenance, and troubleshooting of tanks and pressure vessels. Covers QA/QC, repair methods, and safety protocols. Builds capability to manage complex tank facilities.'
    },
    {
      id: 'v-pills-5',
      icon: 'flaticon-flasks',
      title: 'Storage Tank & Terminal Design',
      content: 'End-to-end design solutions for storage tanks and terminal facilities. Comprehensive design for acid, ammonia and petroleum systems. Prioritizes durability, regulatory compliance, safety and long-term maintenance and cost-effectiveness.'
    },
    {
      id: 'v-pills-6',
      icon: 'flaticon-ux-design',
      title: 'Fire Protection Services',
      content: 'Design, project management, construction, and supervision of fire protection systems for storage tanks, pressure vessels, and gantries. Ensures compliance with safety standards and operational requirements for reliable fire risk mitigation.'
    }
  ];

  useEffect(() => {
    const activeService = services.find(s => s.id === activeTab);
    const fullText = activeService.content;

    setDisplayedText('');
    setShowButton(false);
    setIsTyping(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => setShowButton(true), 200);
      }
    }, 10);

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  return (
    <>
      <section
        className="ftco-section ftco-no-pb ftco-no-pt ftco-services bg-light"
        id="services-section"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-4 ftco-animate py-5 nav-link-wrap"
              data-aos="slide-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {services.map((service, index) => (
                  <a
                    key={service.id}
                    className={`nav-link px-4 ${activeTab === service.id ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); setActiveTab(service.id);}}
                    href="javascript:void(0);"
                    data-aos="fade-right"
                    data-aos-delay={index * 80}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}
                  >
                    <span className={`mr-3 ${service.icon}`} style={{ flexShrink: 0, marginTop: '0', fontSize: '20px' }}></span>
                    <span style={{ flex: 1, fontSize: '20px', fontWeight: activeTab === service.id ? '700' : '400', lineHeight: '1.3' }}>
                      {service.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div
              className="col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center"
              data-aos="fade-up-left"
              data-aos-delay="120"
            >
              <div className="tab-content pl-md-5" id="v-pills-tabContent" style={{ minHeight: '400px' }}>
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`tab-pane fade ${activeTab === service.id ? 'show active' : ''} py-5`}
                    id={service.id}
                    role="tabpanel"
                    style={{ minHeight: '350px' }}
                  >
                    <span className={`icon mb-3 d-block ${service.icon}`}></span>
                    <h2 className="mb-4">{service.title}</h2>
                    <p style={{ minHeight: '150px', marginBottom: '0', marginTop: '0', fontSize: '18px', lineHeight: '1.8' }}>{activeTab === service.id ? displayedText : ''}</p>
                    {activeTab === service.id && showButton && (
                      <p style={{ opacity: showButton ? 1 : 0, transition: 'opacity 0.5s ease-in', marginTop: '5px', marginBottom: '0', minHeight: '100px', display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '0', paddingBottom: '0' }}>
                        <a href={`/service/${service.id}`} className="btn btn-outline-primary px-4 py-3" style={{ borderColor: '#007bff', borderWidth: '1.6px', color: '#007bff' }}>Read More</a>
                        <a href="/contact" className="btn btn-primary px-4 py-3">Book Now</a>
                      </p>
                    )}
                    {activeTab === service.id && !showButton && (
                      <p style={{ minHeight: '100px', marginBottom: '0', marginTop: '14px', paddingTop: '0', paddingBottom: '0' }}></p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section-2 img"
        style={{backgroundImage: 'url(images/service.png)'}}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="container">
          <div className="row d-md-flex justify-content-end">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <a className="services-wrap ftco-animate" data-aos="fade-right" data-aos-delay="60">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="ion-ios-arrow-back"></span>
                      <span className="ion-ios-arrow-forward"></span>
                    </div>
                    <h2>Quality Assurance</h2>
                    <p>Rigorous quality control and standards compliance.</p>
                  </a>

                  <a className="services-wrap ftco-animate" data-aos="fade-right" data-aos-delay="140">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="ion-ios-arrow-back"></span>
                      <span className="ion-ios-arrow-forward"></span>
                    </div>
                    <h2>On Time Delivery</h2>
                    <p>Commitment to punctual project completion.</p>
                  </a>

                  <a className="services-wrap ftco-animate" data-aos="fade-right" data-aos-delay="220">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="ion-ios-arrow-back"></span>
                      <span className="ion-ios-arrow-forward"></span>
                    </div>
                    <h2>Track Records</h2>
                    <p>Proven history of successful project execution.</p>
                  </a>

                  <a className="services-wrap ftco-animate" data-aos="fade-right" data-aos-delay="300">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="ion-ios-arrow-back"></span>
                      <span className="ion-ios-arrow-forward"></span>
                    </div>
                    <h2>Help & Support</h2>
                    <p>Reliable assistance and support for operations.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
