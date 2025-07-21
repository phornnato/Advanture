import React from 'react';
import Banner from '../layout/Banner';
import Welcometext from '../layout/Welcometext';
import Card from '../layout/Card';
import ImageTextCol from '../layout/ImageTextCol';

function Tours(props) {
     const slides = [
        {
            img:'img/tour/tour1.png',
            text:'Angkor Wat Sunrise Tour'
        },
        {
            img:'img/tour/tour2.png',
            text:'Koh Rong Island Tour'
        }
        ,
        {
            img:'img/tour/tour3.png',
            text:'Bokor Mountain Tour'
        }
    ];

    const welcomeData = [
        {
            title :'Discover Cambodia, One Tour at a Time',
            desc : ' From ancient temples to tropical beaches, misty mountains to vibrant villages — your next unforgettable adventure begins her Choose a journey that speaks to your soul and let us guide the way',
            explore:"Explore Tour",
            link: "/tour_img" 
        }
    ];

const data = [
  {
    img: 'img/tour/t1.png',
    title: 'Horm Sophorn',
    description: 'A friendly local expert in Bokor, ready to show you hidden colonial gems and misty mountain secrets.',
    buttonText: 'Meet Guide',
    tour_detail:'/phorn_detail'
  },
  {
    img: 'img/tour/t2.png',
    title: 'Eng Meysing',
    description: 'Passionate about Khmer history, she brings Angkor Wat to life with rich stories and legends.',
    buttonText: 'Meet Guide',
      tour_detail:'/sing_detail'
  },
  {
    img: 'img/tour/t3.png',
    title: 'Jack Ahpoji',
    description: 'Adventure-loving island guide who knows the best snorkeling spots and hidden beaches in Koh Rong.',
    buttonText: 'Meet Guide',
      tour_detail:'/jack_detail'
  }
];


const tours = [
  {
    img: 'img/tour/ankorwat.png',
    title: 'Angkor Wat Temple',
    location: 'Siem Reap, Cambodia',
    desc: 'Discover the ancient Khmer empire’s most iconic temple with stunning architecture and rich history.',
    footerText: 'Duration: Full day tour',
    buy:'Book Now'
  },
  {
    img: 'img/tour/kohrong.png',
    title: 'Koh Rong Island',
    location: 'Sihanoukville, Cambodia',
    desc: 'Relax on pristine white sandy beaches and swim in turquoise waters on this beautiful island getaway.',
    footerText: 'Duration: 2 days',
     buy:'Book Now'
  },
  {
    img: 'img/tour/bokor.png',
    title: 'Bokor Mountain',
    location: 'Kampot Province, Cambodia',
    desc: 'Experience cool mountain air and visit French colonial ruins atop Bokor Hill with breathtaking views.',
    footerText: 'Duration: Half day tour',
     buy:'Book Now'
  },
  {
    img: 'img/tour/keplocal.png',
    title: 'Kep Crab Market',
    location: 'Kep, Cambodia',
    desc: 'Enjoy fresh seafood at the famous Crab Market while taking in coastal views and a relaxing vibe.',
    footerText: 'Duration: Half day tour',
    buy:'Book Now'
  },
  {
    img: 'img/tour/banlung.png',
    title: 'Yeak Laom Lake',
    location: 'Banlung, Ratanakiri',
    desc: 'Swim in a volcanic lake surrounded by lush jungle and learn about local ethnic minority culture.',
    footerText: 'Duration: Full day tour',
     buy:'Book Now'
  },
  {
    img: 'img/tour/udong.png',
    title: 'Oudong Mountain',
    location: 'Kandal Province, Cambodia',
    desc: 'Climb up to ancient stupas of former royal capital Oudong and enjoy panoramic views of the countryside.',
    footerText: 'Duration: Half day tour',
     buy:'Book Now'
  }
];

    return (
        <div>
            <Banner slides={slides}/>
            <br/>
            <div className='mt-5'>
                {welcomeData.map((item,index) => (
                    <Welcometext
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        explore={item.explore}
                        link={item.link}

                    />
                ))}
                <br />

            </div>

            <h1 className='mt-4'>Tour Guide</h1>
            <hr />
             <div className="mt-5">
            <div className="row">
                {data.map((item, index) => (
                <Card
                    key={index}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    tour_detail={item.tour_detail}
                    columnClass="col-lg-4 col-md-6 col-sm-12"
                />
                ))}
            </div>
            </div>
            <br />
            <h1 className='mt-4'>Our Featured Tours</h1>
            <hr />
           <div className="d-flex flex-column ">
          {tours.map((tour, index) => (
            <ImageTextCol
              key={index}
              img={tour.img}
              title={tour.title}
              location={tour.location}
              desc={tour.desc}
              footerText={tour.footerText}
              buy={tour.buy}
              onBook={() => alert(`Booking ${tour.title}!`)}
            />
          ))}
        </div>
            
        </div>
    );
}

export default Tours;