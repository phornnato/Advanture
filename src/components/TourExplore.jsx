import React from 'react';
import Card from '../layout/Card';

function TourExplore(props) {
   const data = [
  {
    img: 'img/destination/detail/des1.png',
    title: 'Bokor Mountain',
    description: 'Cool climate and old French colonial ruins atop Bokor Hill.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des2.png',
    title: 'Angkor Wat',
    description: 'The heart of Khmer heritage and world’s largest temple.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des3.png',
    title: 'Koh Rong Island',
    description: 'Turquoise waters and powdery white sands await you.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des4.png',
    title: 'Cardamom Mountains',
    description: 'Cambodia’s hidden rainforest full of wildlife and rivers.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des5.png',
    title: 'Tonle Sap Lake',
    description: 'Asia’s largest freshwater lake with floating villages.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des6.png',
    title: 'Kampot River',
    description: 'Kayak or chill along this peaceful river town in the south.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des7.png',
    title: 'Phnom Kulen',
    description: 'Sacred waterfalls and carvings in the mountain of legends.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des8.png',
    title: 'Sambor Prei Kuk',
    description: 'Pre-Angkorian ruins in peaceful Kampong Thom jungle.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des9.png',
    title: 'Rabbit Island',
    description: 'A quiet island off Kep, perfect for hammock naps and seafood.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des10.png',
    title: 'Preah Vihear Temple',
    description: 'A dramatic hilltop temple with sweeping views on the border.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des11.png',
    title: 'Koh Ta Kiev',
    description: 'An untouched island paradise perfect for disconnecting.',
    buttonText: 'Explore'
  },
  {
    img: 'img/destination/detail/des12.png',
    title: 'Battambang Countryside',
    description: 'Bamboo trains, rice fields and ancient caves.',
    buttonText: 'Explore'
  }
];


    return (
        <div>
            <br />
           <h1 className='text-center mt-3'><u>Welcome to Tours Explore</u></h1>
          <div className="mt-5">
            <div className="row">
                {data.map((item, index) => (
                <Card
                    key={index}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    columnClass="col-lg-4 col-md-6 col-sm-12"
                />
                ))}
            </div>
            </div>
        </div>
    );
}

export default TourExplore;