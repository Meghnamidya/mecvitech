import React from 'react';
import useAOS from '../hooks/useAOS';

function Staff() {
  useAOS();
  const staffMembers = [
    {
      id: 1,
      name: 'Prabir Kumar Saha',
      position: 'Executive Director',
      image: 'images/staff/pks.png',
      expertise: 'Storage Tanks & EPC',
      experience: '54+ Years',
      specialization: 'Storage Tank Design, Construction, Repair & Maintenance, EPC & Turnkey Projects, Tank Terminals Solutions'
    },
    {
      id: 3,
      name: 'Amit Bandyopadhyay',
      position: 'Executive Director',
      image: 'images/staff/ab.png',
      expertise: 'EPC - Engineering & Construction',
      experience: '42+ Years',
      specialization: 'Design & Engineering, EPC & Conventional Project Execution, Project Management, Quality Management'
    },
    {
      id: 2,
      name: 'Goutam Mondal',
      position: 'Executive Director',
      image: 'images/staff/gm.png',
      expertise: 'Design - Equipments',
      experience: '25+ Years',
      specialization: 'Designing of Tanks, Process Equipments, EPC Projects, Repair & Maintenance, Project Management Solutions'
    }
  ];

  return (
    <section className="ftco-section pb-lg-3" data-aos="fade-up" data-aos-duration="900">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            className="col-md-6 pt-5 heading-section text-center ftco-animate"
            data-aos="slide-up"
            data-aos-delay="50"
            data-aos-duration="900"
          >
            <span className="subheading" data-aos="slide-up" data-aos-delay="40" data-aos-duration="700">About Us</span>
            <h2 className="mb-4" data-aos="slide-up" data-aos-delay="100" data-aos-duration="800">Key Personnels</h2>
            <p data-aos="slide-up" data-aos-delay="160" data-aos-duration="800">Behind every design and every restored structure, our staff bring the expertise, patience, and passion that define us.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {staffMembers.map((staff, index) => (
            <div
              key={staff.id}
              className="col-md-6 col-lg-3 ftco-animate mb-5 mb-lg-0"
              style={{marginLeft: '40px', marginRight: '40px'}}
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className="img align-self-stretch" style={{backgroundImage: `url(${staff.image})`, border: '3px solid #000000ff'}}></div>
                </div>
                <div className="text d-flex align-items-center pt-3 text-center">
                  <div style={{ whiteSpace: 'nowrap' }}>
                    <h3 className="mb-2">{staff.name}</h3>
                    <span className="position mb-4" style={{fontWeight: '600', color: '#007bff' }}>{staff.position}</span>
                    <div style={{ marginTop: '12px', fontSize: '15px', lineHeight: '1.2', color: '#666' }}>
                      <div style={{ marginBottom: '6px', fontWeight: '600', color: '#000000' }}>
                        {staff.expertise}
                      </div>
                      <div style={{ marginBottom: '6px', fontWeight: '500' }}>
                        <strong>Experience:</strong> {staff.experience}
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        color: '#555', 
                        textAlign: 'center'
                      }}>
                        <div style={{ fontWeight: '500', marginBottom: '4px' }}><strong>Expertise:</strong></div>
                        <div style={{ 
                          whiteSpace: 'normal',
                          wordWrap: 'break-word'
                        }}>
                          {staff.specialization}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
