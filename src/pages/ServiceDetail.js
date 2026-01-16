import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAOS from '../hooks/useAOS';

function ServiceDetail() {
  useAOS();
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const carouselRefs = useRef([]);

  const services = [
    {
      id: 'v-pills-1',
      icon: 'flaticon-web-design',
      title: 'Providing Solutions of Distressed Tanks',
      description: 'Distress damage analysis, targeted repair strategies and restoration.',
      details: 'Detailed analysis identifies root causes and weaknesses. Expert repair methodologies stabilize structures. Comprehensive restoration plans ensure safe, compliant operation with extended service life.',
      projects: [
        {
          title: 'Outside Jacking of Tank and Construction of new Foundation and New Bottom Plate',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Sewree, Mumbai',
          images: ['/images/s1/p1.jpeg', '/images/s1/p2.jpeg']
        },
        {
          title: 'Replacement of Shell Plate',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Vasco, Goa',
          images: ['/images/s1/p3.jpg', '/images/s1/p4.jpg']
        },
        {
          title: 'Raising of Foundation Level by Outside Jacking and Reconstruction of Foundation, Replacement of Bottom Plate',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Wadala, Mumbai',
          images: ['/images/s1/p5.jpg', '/images/s1/p6.jpg']
        },
        {
          title: 'Design, Stress Analysis, Erection of Pipe Bridge',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Visakha Terminal',
          images: ['/images/s1/p7.jpeg', '/images/s1/p8.jpeg']
        },
        {
          title: 'Conversion of EFRVT to CRVT (36m *15m). Dismantling of Shell Plates, Construction of Truss Supported Roof Structure',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Kakinara',
          images: ['/images/s1/p9.jpeg', '/images/s1/p10.jpeg', '/images/s1/p11.jpeg']
        },
        {
          title: 'Jacking of Column Supported Tank and Construction of RCC RAFT/MAT Foundation',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Sewree-Fo-Tank',
          images: ['/images/s1/p12.png', '/images/s1/p13.png']
        }
      ]
    },
    {
      id: 'v-pills-2',
      icon: 'flaticon-ideas',
      title: 'Design Engineering',
      description: 'Complete engineering design for storage tanks, piping systems and terminal infrastructure.',
      details: 'System planning covers tank structures, foam systems, structural works and civil engineering. Designs ensure safe, efficient, reliable operations with full regulatory compliance.',
      projects: [
        {
          title: 'Design, Engineering, Construction & Project Management of Petroleum Storage Facility',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Sewree',
          images: ['/images/s2/p1.jpg', '/images/s2/p2.jpg']
        },
        {
          title: 'Design, Engineering, Construction & Project Management of Double Wall Storage Tank',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Visakha',
          images: ['/images/s2/p3.png']
        }
      ]
    },
    {
      id: 'v-pills-3',
      icon: 'flaticon-analysis',
      title: 'Inspection Services',
      description: 'Technical inspection and data evaluation for completeness of installed facility.',
      details: 'Detailed condition assessments across structural, civil, electrical and piping systems. Ensures safety, serviceability and regulatory compliance with actionable recommendations.',
      projects: [
        {
          title: 'Rectification of Tilted Column (35m Dia x 15m Height) of Cone Roof Tank',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Mourigram Depot',
          images: ['/images/s3/p1.jpg']
        },
        {
          title: 'Conversion of External Floating Roof Tank to Truss Support Cone Roof Tank (36m Dia)',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Kakinara Terminal',
          images: ['/images/s3/p2.jpg']
        },
        {
          title: 'Conversion of EFRVT Tank to IFRVT with Aluminium Dome Roof',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Bhubaneswar & Balasore Terminal',
          images: ['/images/s3/p3.png']
        },
        {
          title: 'Providing RCC Ring Beam under CRVT Tanks includes Complete Jacking of Entire Tank',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Wadala & Sewree Depots',
          images: ['/images/s3/p4.jpg']
        }
      ]
    },
    {
      id: 'v-pills-4',
      icon: 'flaticon-innovation',
      title: 'Technical Training',
      description: 'Technical consulting, system audits and professional training programs.',
      details: 'Training covers construction methods, QA/QC practices, repair techniques and safety protocols. Develops skills for managing complex tank facilities effectively.',
      projects: [
        {
          title: 'Mechanical Construction Classes and Seminars Delivers to Final Year Students for a Year',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'BITM College, Bolpur',
          images: ['/images/s4/np.png']
        },
        {
          title: 'Online Training Delivers to Indian Oil (Marketing Division) Engineers on Tank Design, Construction and Maintenance',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'Online Platform',
          images: ['/images/s4/np.png']
        }
      ]
    },
    {
      id: 'v-pills-5',
      icon: 'flaticon-flasks',
      title: 'Storage Tank & Terminal Design',
      description: 'End-to-end design solutions for storage tanks and terminal facilities.',
      details: 'Comprehensive design for acid, ammonia and petroleum systems. Prioritizes durability, regulatory compliance, safety and long-term cost-effectiveness.',
      projects: [
        {
          title: 'Complete Design, Engineering & Piping System of Ethanol Tanks For IOCL-WBSO Terminals',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Mourigram Terminal',
          images: ['/images/s5/p1.png']
        },
        {
          title: 'Preparation, Complete Documentation & Recommendation for Tank Hydrotesting Exemption',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-JNPT & Vasco Terminals',
          images: ['/images/s5/np.png']
        },
        {
          title: 'Checking Certification of Contractor Engineer drawings for Ethanol Tank Services',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Haldia & Rajbandh Depots',
          images: ['/images/s5/p2.jpg']
        },
        {
          title: 'Complete Documents for Jacking of Entire Tank, Construction of RCC Ring Valve & Replacement of Bottom Plate',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL-Wadala & Sewree Depots',
          images: ['/images/s5/p3.jpeg', '/images/s5/p4.jpeg']
        }
      ]
    },
    {
      id: 'v-pills-6',
      icon: 'flaticon-ux-design',
      title: 'Fire Protection Services',
      description: 'Fixed foam and fire protection systems engineering for terminals.',
      details: 'Complete fire protection solutions including foam and cooling systems. Rapid response capability with compliance to safety standards and hazmat protection.',
      projects: [
        {
          title: 'Design, Engineering & Drawing of Sprinkler & Foam System for Storage Tanks',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'IOCL- Bhubaneswar, Balasore & Paradip',
          images: ['/images/s6/p1.png']
        },
        {
          title: 'Design, Engineering & Drawing of Sprinkler & Foam System for Gantry & Pump House',
          description: 'Design, Methodology, QA-QC Project Monitoring.',
          location: 'BPCL-Karur Terminal',
          images: ['/images/s6/p2.jpeg']
        }
      ]
    }
  ];

  const service = services.find(s => s.id === serviceId) || services[0];

  // Build overview bullet points from description + details
  const overviewText = `${service.description} ${service.details}`.trim();
  const overviewPoints = overviewText
    .split(/\.(?:\s+|$)/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => (/[.?!]$/.test(s) ? s : s + '.'));
  useEffect(() => {
    // Initialize Owl Carousel for each project
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      carouselRefs.current.forEach((ref, index) => {
        if (ref && window.jQuery(ref).data('owl.carousel') === undefined) {
          window.jQuery(ref).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
            dots: true
          });
        }
      });
    }

    // Cleanup
    return () => {
      carouselRefs.current.forEach(ref => {
        if (ref && window.jQuery && window.jQuery(ref).data('owl.carousel')) {
          window.jQuery(ref).trigger('destroy.owl.carousel');
        }
      });
    };
  }, [service.id]);

  return (
    <section className="ftco-section pt-5 pb-5" data-aos="fade-up" data-aos-duration="900">
      <style>{`
        .owl-carousel .owl-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .owl-carousel .owl-dot {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          margin: 0 5px;
        }
        .owl-carousel .owl-dot.active {
          background: #007bff;
        }
      `}</style>
      <div className="container">
        {/* Title Section with Back Button */}
        <div className="row mb-5">
          <div className="col-12 d-flex align-items-start" style={{ gap: '12px', flexWrap: 'nowrap', width: '100%' }}>
            <h1 
              className="mb-0 d-flex align-items-center" 
              data-aos="zoom-in" 
              data-aos-duration="1000" 
              style={{ color: '#007bff', gap: '22px', flex: 1, minWidth: 0, paddingLeft: '16px', fontSize: 'clamp(22px, 5vw, 32px)', lineHeight: '1.2' }}
            >
              <span className={`${service.icon}`} style={{ fontSize: 'clamp(26px, 6vw, 36px)' }}></span>
              <span>{service.title}</span>
            </h1>
            <button 
              onClick={() => navigate('/services', { state: { activeService: service.id } })}
              className="btn btn-outline-primary ml-auto"
              style={{ marginLeft: 'auto', marginRight: '13px', borderColor: '#007bff', color: '#007bff', borderWidth: '1.6px', fontSize: 'clamp(14px, 3.2vw, 16px)', padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 18px)' }}
            >
              ← Back to Services
            </button>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="row mb-5" >
          <div className="col-12" data-aos="flip-up" data-aos-duration="1000">
            <div 
              style={{ 
                backgroundColor: '#e7f0ff', 
                padding: '40px', 
                borderRadius: '8px',
                borderLeft: '5px solid #007bff'
              }}
            >
              <h3 className="mb-3" style={{ color: '#007bff', fontSize: 'clamp(22px, 5vw, 28px)' }}>Service Overview</h3>
              {overviewPoints.length > 0 && (
                <ul style={{ paddingLeft: '18px', marginTop: '6px', marginBottom: 0, fontSize: 'clamp(14px, 3.9vw, 17px)', lineHeight: '1.7', color: '#444' }}>
                  {overviewPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              )}
              {service.id === 'v-pills-1' && (
              <div style={{ marginTop: '18px' }}>
                <h5 style={{ color: '#0056b3', fontSize: 'clamp(17px, 4.4vw, 19px)', marginBottom: '12px' }}>
                  Tank Distresses Faced by Owners Regularly
                </h5>
                <ul style={{ paddingLeft: '18px', marginBottom: 0, fontSize: 'clamp(14px, 3.9vw, 17px)', lineHeight: '1.7', color: '#444' }}>
                  <li>Poor roof drainage in floating and resting condition of roof</li>
                  <li>Uncontrolled roof landing with accumulated water causing damage to roof membrane</li>
                  <li>Roof rotation and tilting causing binding gauge well out of plumb</li>
                  <li>Leaky pontoons and double deck compartments; cracks at roof-pontoon joints</li>
                  <li>Corroded annular and bottom plates; need for total replacement or double bottom</li>
                  <li>Abnormal total and differential settlement; need for jacking and re-levelling</li>
                  <li>Excessive bottom and edge settlements; settlement analysis and rectifications</li>
                  <li>Oil blow-out from vents; foam seal blow-out; oil accumulation on roof</li>
                  <li>Corroded curb angle; replacement of lap jointed CA with butt-welded CA; partial shell replacement</li>
                  <li>Corroded and damaged floating roof; total replacement and supporting technique</li>
                  <li>Jacking up of columns and providing bearing plates under columns; methodology</li>
                  <li>Hundreds of other operational and maintenance problems; total health checking needs</li>
                </ul>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="mb-4 featured-projects-title" style={{ color: '#007bff', borderBottom: '3px solid #007bff', paddingBottom: '5px' }} data-aos="slide-right">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* Individual Projects with Carousels */}
        {service.projects && service.projects.map((project, index) => (
          <div key={index} className="row align-items-stretch mb-5" style={{ marginBottom: '50px', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'} project-info`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '12px', rowGap: '10px', alignItems: 'start' }}>
                  <span style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 16px', borderRadius: '5px', fontSize: '18px',fontWeight: '600', lineHeight: '1.05', flexShrink: 0 }}>0{index + 1}</span>
                  <div>
                    <h3 
                      style={{ 
                        color: '#000000ff', 
                        fontSize: 'clamp(20px, 4.5vw, 26px)', 
                        fontWeight: '600', 
                        marginBottom: '0',
                        lineHeight: '1.3'
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: '20px', color: '#000000ff', fontWeight: '800', alignSelf: 'start' }}>→</span>
                  <p style={{ fontSize: '20px', lineHeight: '1.9', color: '#555', textAlign: 'left', marginBottom: '8px' }}>
                    {project.description}
                  </p>
                  <div style={{ gridColumn: '1 / span 2', textAlign: 'center', marginTop: '4px' }}>
                    <span style={{ fontSize: '16px', color: '#6c757d', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}>
                      {project.location || 'Add project location here'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} data-aos-duration="1000" data-aos-delay="200">
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '0',
                  overflow: 'visible',
                  backgroundColor: '#f5f5f5',
                  borderLeft: '1px solid #ddd',
                  borderRight: '1px solid #ddd'
                }}
              >
                <div 
                  ref={el => carouselRefs.current[index] = el}
                  className="owl-carousel owl-theme"
                  style={{ 
                    borderRadius: '12px'
                  }}
                >
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
                      <img 
                        src={img}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        style={{ 
                          width: '100%',
                          height: 'clamp(300px, 55vw, 500px)',
                          objectFit: 'fill',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.src = '/images/service.png';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}

        {/* Benefits & CTA Section */}
        <div className="row align-items-stretch mt-5">
          <div className="col-md-6 mt-4" style={{ display: 'flex', flexDirection: 'column' }} data-aos="zoom-in-right" data-aos-duration="1000">
            <div className="row" style={{ height: '100%', display: 'flex' }}>
              <div className="col-md-6 mb-4">
                <h3 className="mb-3" style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Key Benefits</h3>
                <ul style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.9', color: '#333', listStyleType: '"\u2713 "', paddingLeft: '20px' }}>
                  <li>Expert analysis and solutions</li>
                  <li>Compliance assured</li>
                  <li>Proven track record</li>
                  <li>Timely delivery</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="mb-3" style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>Our Commitment</h3>
                <ul style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.9', color: '#333', listStyleType: '"\u2713 "', paddingLeft: '20px' }}>
                  <li>Quality assurance</li>
                  <li>Professional team</li>
                  <li>Full support</li>
                  <li>Cost-effective solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200">
            <div style={{ backgroundColor: '#e7f0ff', padding: '28px', borderRadius: '12px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="mb-4" style={{ color: '#007bff' }}>Ready to Get Started?</h3>
              <p style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.75', color: '#333', marginBottom: '30px' }}>
                Get in touch with our team to discuss your project requirements and find the perfect solution for your needs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="/contact" 
                  className="btn btn-outline-primary px-5 py-3"
                  style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', borderColor: '#007bff', borderWidth: '1.6px', color: '#007bff', textAlign: 'center', padding: 'clamp(10px, 3vw, 14px) clamp(18px, 4vw, 24px)' }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
