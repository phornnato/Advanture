import React from 'react';
import Banner from '../layout/Banner';
import Welcometext from '../layout/Welcometext';
import ImageTextCol from '../layout/ImageTextCol';

function Meterial(props) {
   const slides = [
  {
    img: 'img/meterial/ban1.png',
    text: 'Durable Camping Tents for All Weather'
  },
  {
    img: 'img/meterial/ban2.png',
    text: 'Essential Camping Materials & Tools'
  },
  {
    img: 'img/meterial/ban3.png',
    text: 'Fully Set Up Campsite in Forest'
  }
];

 const welcomeData = [
  {
    title: 'Experience the Wild Side of Cambodia',
    desc: 'From jungle treks to starry night camps, explore nature up close. Pitch your tent in remote forests, cook under the stars, and connect with Cambodia’s untouched wilderness like never before.',
    explore: 'Explore Camping',
    link: '/meterial'
  }
];

const materials = [
  {
    img: 'img/meterial/t1.png',
    title: 'Camping Tent',
    location: 'Price : 89$',
    desc: 'Stay dry and safe with our durable waterproof tents, perfect for forest or beach camping.',
    footerText: 'Includes: Pegs, ropes, and rainfly',
    buy: 'Buy Now'
  },
  {
    img: 'img/meterial/t2.png',
    title: 'Sleeping Bag',
    location: 'Price : 89$',
    desc: 'Keep warm during cold nights with a soft, insulated sleeping bag suitable for all weather.',
    footerText: 'Type: 3-Season Sleeping Bag',
    buy: 'Buy Now'
  },
  {
    img: 'img/meterial/t3.png',
    title: 'Hiking Backpack',
    location: 'Price: 100$',
    desc: 'Carry your essentials with comfort — multiple compartments and padded support included.',
    footerText: 'Capacity: 50L to 70L',
    buy: 'Buy Now'
  },
  {
    img: 'img/meterial/t4.png',
    title: 'Portable Stove',
    location: 'Price : 78$',
    desc: 'Cook meals anywhere using this lightweight, easy-to-carry gas stove. Great for quick setups.',
    footerText: 'Fuel: Butane/Propane Compatible',
    buy: 'Buy Now'
  },
  {
    img: 'img/meterial/t5.png',
    title: 'First Aid Kit',
    location: 'Price : 80$',
    desc: 'Be prepared with bandages, antiseptic, and other first aid items for any adventure.',
    footerText: 'Kit: 50+ Items Inside',
    buy: 'Buy Now'
  },
  {
    img: 'img/meterial/t6.png',
    title: 'Camping Lantern',
    location: 'Price : 100$',
    desc: 'Light up your campsite with this rechargeable LED lantern, bright and long-lasting.',
    footerText: 'Battery: USB Rechargeable',
    buy: 'Buy Now'
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

            <br />
            <h1>Our Products</h1>
            <hr />
            <div className="d-flex flex-column">
            {materials.map((item, index) => (
              <ImageTextCol
                key={index}
                img={item.img}
                title={item.title}
                location={item.location}
                desc={item.desc}
                footerText={item.footerText}
                buy={item.buy}
                onBook={() => alert(`Buying ${item.title}!`)}
              />
            ))}
          </div>



        </div>
    );
}

export default Meterial;