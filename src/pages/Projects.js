import React, { useEffect } from 'react';
import useAOS from '../hooks/useAOS';

function Projects() {
  useAOS();
  const projects = [
    { id: 1, image: 'images/proj/p1.jpeg', title: 'Cone Roof Tank', category: 'Support' },
    { id: 2, image: 'images/proj/p2.jpg', title: 'Dome Roof Tank', category: 'Support' },
    { id: 3, image: 'images/proj/p3.png', title: 'Floating Roof Tank', category: 'Support' },
    { id: 4, image: 'images/proj/p4.png', title: 'Spherical Tank', category: 'Support' },
    { id: 5, image: 'images/proj/p5.png', title: 'Cryogenic Tank', category: 'Support' },
    { id: 6, image: 'images/proj/p6.jpg', title: 'Tank Roof Structure', category: 'Support' },
    { id: 7, image: 'images/proj/p7.png', title: 'Double Wall Storage Tank', category: 'Design' },
    { id: 8, image: 'images/proj/p8.png', title: 'Sprinkler & Foam System', category: 'Design' },
    { id: 9, image: 'images/proj/p9.jpeg', title: 'Fire Pump House', category: 'Design' },
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      const $carousel = window.$('.carousel-project');
      if ($carousel.length) {
        if ($carousel.hasClass('owl-loaded')) {
          try {
            $carousel.trigger('refresh.owl.carousel');
          } catch (e) {
            try { $carousel.trigger('destroy.owl.carousel'); } catch (e2) {}
            $carousel.owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              items: 3,
              autoplay: true,
              autoplayTimeout: 5000,
              responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
            });
          }
        } else {
          $carousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 3,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
          });
        }
      }
    }
  }, []);

  return (
    <section
      className="ftco-section ftco-project bg-light"
      id="projects-section"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="container px-md-5">
        <div className="row justify-content-center pb-5">
            <div
              className="col-md-12 pt-5 heading-section text-center ftco-animate"
              data-aos="slide-up"
              data-aos-delay="50"
              data-aos-duration="900"
            >
            <span className="subheading" data-aos="slide-up" data-aos-delay="40" data-aos-duration="700">Accomplishments</span>
            <h2 className="mb-4" data-aos="slide-up" data-aos-delay="100" data-aos-duration="800">Selected Projects</h2>
            <p data-aos="slide-up" data-aos-delay="160" data-aos-duration="800">
              A showcase of Mecvitech’s specialized engineering solutions across storage tank services, industrial inspections, maintenance, and process optimization - highlighting our commitment to reliability, safety, and long-term asset performance.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 testimonial" data-aos="slide-up" data-aos-delay="220" data-aos-duration="1000">
            <div className="carousel-project owl-carousel owl-theme">
              {projects.map((project, index) => (
                <div key={project.id} className="item" data-aos="fade-up" data-aos-delay={80 + index * 40}>
                  <div className="project">
                    <div className="img">
                      <img src={project.image} className="img-fluid" alt={project.title} />
                    </div>
                    <div className="text px-4">
                      <h3>{project.title}</h3>
                      <span>{project.category}</span>
                      <div style={{ marginTop: '10px' }}>
                        <a
                          href={project.image}
                          download={`${project.title}.png`}
                          className="btn btn-sm btn-primary"
                          style={{ padding: '6px 12px' }}
                        >
                          Download Image
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
