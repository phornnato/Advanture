import React from 'react';
import Banner from '../layout/Banner';
import Welcometext from '../layout/Welcometext';
import ImageTextCol from '../layout/ImageTextCol';
import Logo from '../layout/Logo';
import CardTColmun from '../layout/CardTColmun';

function About(props) {
     const slides = [
        {
            img:'img/about/about1.png',
            text:'Welcome to Phorn Advanture'
        },
        {
            img:'img/about/about2.png',
            text:'Explore Your Journey'
        }
        ,
        {
            img:'img/about/about3.png',
            text:'Your Journey Start Here'
        }
     ];


            const welcomeData = [
        {
            title: 'About Phorn | Your Local Travel Companion',
            desc: 'Meet Phorn, a passionate explorer of Cambodia’s hidden treasures. With years of experience guiding travelers across sacred temples, lush jungles, and coastal escapes, Phorn brings authentic stories, safe journeys, and unforgettable memories to every tour. Travel with trust — travel with Phorn.',
            explore: "Learn More",
            link: "https://phornnato.github.io/resume-/index.html"
        }
    ];

    const mission = [
  {
    img: 'img/about/mission.png',
    title: 'My Mission',
    location: 'Empowering Responsible Travel',
    desc: 'Our mission is to inspire and empower travelers to experience Cambodia through authentic, ethical, and immersive journeys. We believe travel is more than sightseeing — it’s about meaningful connections, cultural respect, and giving back to the communities we explore. By working closely with local guides, families, and artisans, we aim to create positive impact while preserving the heritage and natural beauty of our country.',
    footerText: 'Travel with purpose, guided by heart and heritage',
    buy: 'Join the Journey'
  }
];

 const Data = {
  left: {
    image: 'img/feature/nature1.png',
    category: 'Nature Journal',
    title: 'Living Between Mountains and Rivers: A Journey Into Untouched Nature',
    author: 'HORM SOPHORN',
  },
  right: [
    {
      image: 'img/feature/nature2.png',
      category: 'Eco Travel',
      title: 'The Last Green Valley in Southeast Asia: Why You Must Visit Before It Changes',
      author: 'HORM SOPHORN',
    },
    {
      image: 'img/feature/nature3.png',
      category: 'Sustainable Living',
      title: 'Tiny Homes in the Wild: How People Are Choosing Simplicity Over Luxury',
      author: 'HORM SOPHORN',
    }
  ]
};


    return (
        <div>  
            <Banner slides={slides} />
            <br />
            <Logo/>
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
                <h1 className='mt-5'>My Mission</h1>
                <hr />
                <div className="d-flex flex-column">
            {mission.map((item, index) => (
              <ImageTextCol
                key={index}
                img={item.img}
                title={item.title}
                location={item.location}
                desc={item.desc}
                footerText={item.footerText}
                buy={item.buy}
                onBook={() => alert(`Joined ${item.title}!`)}
              />
            ))}
          </div>

        </div>
        {/* feature card  */}
            <br /><br />
            <h1>Features</h1>
            <CardTColmun data={Data} />
        {/* end feature card  */}

        
        </div>
    );
}

export default About;