import React from 'react';
import Banner from '../layout/Banner';
import CardTColmun from '../layout/CardTColmun';
import AticleCard from '../layout/AticleCard';
import Welcometext from '../layout/Welcometext';

function Destination(props) {
    const slides = [
        {
            img:'img/destination/des1.png',
            text:'Angkor Wat Temple'
        },
        {
            img:'img/destination/des2.png',
            text:'Koh Rong Beach'
        }
        ,
        {
            img:'img/destination/des3.png',
            text:'Bokor Mountain'
        }
    ];

    const welcomeData = [
        {
            title :'Discover Cambodia, One Tour at a Time',
            desc : ' Welcome to Cambodia – a land rich in culture, history, and natural beauty. Discover our top destinations that offer unforgettable experiences for every traveler.',
            link: "/dest_img",
            explore:"Explore Destination" 
        }
    ];

    const Data = {
  left: {
    image: 'img/destination/re1.png',
    category: 'Angkor Wat Temple',
    title: 'Restoration underway at Bakan Tower; 1,000‑year‑old temple restored; community displacement issues under UNESCO scrutiny.',
    author: 'HORM SOPHORN',
  },
  right: [
    {
      image: 'img/destination/re2.png',
      category: 'Koh Rong',
      title: 'Tourism booming (~300k visitors in 2024); major development by conglomerates; local fishers facing displacement and resource loss; mixed visitor reports on safety and ambiance.',
      author: 'HORM SOPHORN',
    },
    {
      image: 'img/destination/re3.png',
      category: 'Bokor Mountain',
      title: 'Large-scale tourism development planned through 2035 with environmental and conservation implications.',
      author: 'HORM SOPHORN',
    }
  ]
};

const dataArticle = [
  {
    img: 'img/destination/angkor1.png',
    title: "Sunrise at Angkor Wat",
    desc: "Witness the magical sunrise over the iconic Angkor Wat temple. Feel the ancient energy as the golden light reveals centuries of Khmer heritage carved in stone.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/destination/angkor2.png',
    title: "Temple Hopping in Siem Reap",
    desc: "Explore the sacred corridors of Bayon, Ta Prohm, and Angkor Thom. Discover hidden carvings, jungle-covered ruins, and timeless stories of ancient kings.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/destination/koh1.png',
    title: "Snorkeling in Koh Rong",
    desc: "Dive into the turquoise waters of Koh Rong to explore colorful coral reefs and vibrant marine life. A must-do adventure for sea lovers and beach dreamers.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/destination/koh2.png',
    title: "Island Life & White Sands",
    desc: "Relax on the white sandy beaches of Koh Rong. Enjoy fresh seafood, calm waves, and unforgettable sunsets by the sea.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/destination/bokor1.png',
    title: "Foggy Roads of Bokor Mountain",
    desc: "Drive through the misty roads of Bokor National Park. Discover the old French hill station, abandoned church, and cool mountain breeze.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/destination/bokor2.png',
    title: "Ghost Town & Wat Sampov Pram",
    desc: "Visit the mystical Wat Sampov Pram temple and the haunting ruins of Bokor Palace Hotel. A blend of history, mystery, and mountain views.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  }
];
    return (
        <div>
           <Banner slides={slides}/>
           
          <div className='mt-5'>
                {welcomeData.map((item,index) => (
                    <Welcometext
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        link={item.link}
                        explore={item.explore}
                    />
                ))}
            </div>
               <br />
           <hr />
           <h1>Recent</h1>
           <CardTColmun data={Data}/>
           <br />
           <h1 className='mt-3'>All Articles</h1>
           <div className='row'>
            {dataArticle.map((item,index)=>(
            <AticleCard
                Key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                logoAticle={item.logoAticle}
                nameAritcle={item.nameAritcle}
            />
         ))}
            </div>
            
            <section
                className="cta-section text-white text-center py-5 mt-4"
                style={{ background: 'url("img/destination/monk1.png") center/cover no-repeat' }}
                >
                <div className="container">
                    <h2 className="fw-bold">Ready to Explore Cambodia?</h2>
                    <p className="lead">
                    Choose your destination and let us plan the rest. Adventure, culture, or
                    beach — we’ve got you covered.
                    </p>
                    <a href="/tours" className="btn btn-warning px-4 py-2 mt-2">
                    View Tours
                    </a>
                </div>
                </section>

              


        </div>
    );
}

export default Destination;