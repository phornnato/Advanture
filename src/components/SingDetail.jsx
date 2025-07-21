import React from 'react';
import Detailinfo from '../layout/Detailinfo';

function SingDetail(props) {
     const guides = [
    {
      img: 'img/tour/t2.png',
      name: 'Eng Meysing',
      role: 'Adventure Guide',
      description: 'Loves jungle trekking and sharing Cambodian culture.',
      phone: '010352855',
      email: 'meysing@gmail.com',
      telegram: '010352855'
    }
  ];
    return (
       <section className=" bg-light mt-4">
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Tour Guides</h2>
          <p className="text-muted">Friendly, local experts ready to make your trip unforgettable.</p>
        </div>

        <div className="">
          {guides.map((guide, index) => (
            <div  key={index}>
              <Detailinfo
                img={guide.img}
                name={guide.name}
                role={guide.role}
                description={guide.description}
                phone={guide.phone}
                email={guide.email}
                telegram={guide.telegram}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default SingDetail;