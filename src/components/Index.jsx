import React from 'react';
import Card from '../layout/Card';
import CardTColmun from '../layout/CardTColmun';
import Banner from '../layout/Banner';
import AticleCard from '../layout/AticleCard';
import Logo from '../layout/Logo';


function Index(props) {

  const slides = [
  {
    img: "https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-HD-Free-download.jpg",
    text: "Welcome to Cambodia",
  },
  {
    img: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg",
    text: "Explore Your Journey",
  },
  {
    img: "https://wallpapercat.com/w/full/b/6/b/1794964-3840x2160-desktop-4k-ktm-250-adventure-background-image.jpg",
    text: "Your Adventure Starts Here",
  },
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

const dataArticle = [
  {
    img: 'img/article/art1.png',
    title: "Jungle Trek in Mondulkiri",
    desc: "Explore the dense jungles of Mondulkiri, where elephants roam free and hidden waterfalls await. Trek through misty trails, visit indigenous Bunong communities, and reconnect with the untouched side of Cambodia.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/article/art2.png',
    title: "Waterfall Escape in Koh Kong",
    desc: "Discover the breathtaking beauty of Koh Kong’s jungle waterfalls. Swim in crystal-clear waters, hike through green trails, and let the sound of cascading falls refresh your soul.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/article/art3.png',
    title: "Kayak Through the Cardamom Mountains",
    desc: "Paddle your way through mangrove rivers and remote jungle streams in the Cardamom Mountains. Witness rare wildlife, floating villages, and surreal sunsets in one of Southeast Asia’s last wild frontiers.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/article/art4.png',
    title: "Starry Nights, Mountain Lights",
    desc: "Pitch your tent beneath a galaxy of stars in the highlands. Share stories by the campfire, fall asleep to the sounds of nature, and wake up to the cool mist of the mountains.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/article/art5.png',
    title: "Lost Temples & Ancient Trails",
    desc: "Go off the beaten path and discover Cambodia’s hidden temples deep in the forest. Walk ancient trails used by monks and kings, and feel the spiritual heartbeat of the land.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  },
  {
    img: 'img/article/art6.png',
    title: "Life with the Locals",
    desc: "Stay with local villagers, learn traditional farming, cook with native herbs, and experience life the way it’s been lived for generations. An adventure that feeds the soul — and the heart.",
    logoAticle: 'img/admin/phorn.png',
    nameAritcle: 'Horm Sophorn',
  }
];



  const data = [
  {
    img: 'img/nature1.png',
    title: 'Moutain',
    description: 'The greatest place for healing the pain',
    buttonText: 'explore'
  },

  {
    img: 'img/nature2.png',
    title: 'Forest',
    description: 'The greatest place for healing the pain',
    buttonText: 'explore'
  },
  {
    img: 'img/nature3.png',
    title: 'Ocean',
    description: 'The greatest place for healing the pain',
    buttonText: 'explore'
  },
  
];


    return (
        <div>

 {/* banner  */}
   <Banner slides={slides} />
 {/* end banner  */}

<br /><br />
{/* Logo Section */}
<Logo/>
{/* End Logo Section */}

<br /><br />
{/* News Section */}
<h1 className="text-left ">New</h1>
<div className=" new_contain">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    {[
      {
        title: "Latest Adventure & Tourism News in Cambodia",
        text: "Cambodia’s ambitious new Techo International Airport, set to open on July 9, 2025, will drastically improve access to Phnom Penh and nearby adventure destinations. It aims for 13 million passengers annually, with future expansion possible up to 50 million.",
        link: "https://apnews.com/article/cambodia-new-airport-travel-tourism-phnom-penh-285a9466a1a1712731f64707b5f6b1b2"
      },
      {
        title: "Mekong Cruises Offer Adventure & Cultural Journeys",
        text: "Adventure-focused Mekong and Tonle River cruises now combine kayaking, biking, and cultural visits. Itineraries pass riverside villages, floating markets, and Angkor Wat.",
        link: "https://www.thetimes.com/travel/inspiration/cruises/best-mekong-cruises-dz6g8jr69?utm_source=chatgpt.com&region=global"
      },
      {
        title: "“Green Season” Tourism Around Tonle Sap",
        text: "The Annual Environmental Tourism Event (June 2025) in Siem Reap featured cycling, camping, and ecolanterns at Tonle Sap Lake, attracting over 20,000 people.",
        link: "https://cyprusconsulatecambodia.com/annual-environmental-tourism-event-2025-attracts-20000-visitors-under-the-visit-cambodia-in-the-green-season-theme/?utm_source=chatgpt.com"
      },
      {
        title: "TUI BLUE Opens Adventure-Ready Resort in Sihanoukville",
        text: "TUI’s beachfront hotel offers yoga, live music, cycling, and tours—perfect for adventure travelers visiting Cambodia’s coastal areas.",
        link: "https://www.thesun.co.uk/travel/34869647/new-hotel-asia-tui/?utm_source=chatgpt.com"
      }
    ].map((news, idx) => (
      <div className="col" key={idx}>
        <div className="card h-100 shadow-sm border-0 news-card">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h6 className="text-danger fw-bold">News</h6>
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text text-secondary small">{news.text}</p>
            </div>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm mt-3 align-self-start"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<br /><br />
<div className="card text-bg-dark mt-5">
  <img src="img/camping.png" className="card-img" alt="..." />
  <div className="card-img-overlay  p-4">
    <h5 className="card-title text-white mb-1 fs-1 text-center" >
      Stay up to date with the latest from Phorn.com
    </h5>
    <div className="mb-3">
      <label htmlFor="emailInput" className="form-label text-white">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="emailInput"
        placeholder="name@example.com"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="messageTextarea" className="form-label text-white">
        Your message
      </label>
      <textarea
        className="form-control"
        id="messageTextarea"
        rows="3"
        placeholder="Enter your message here..."
      ></textarea>
    </div>
    <button className="btn btn-warning mt-3" type="submit">
      Subscribe
    </button>
  </div>
</div>

<br /><br /><br />
{/* card recent */}
<h1>Popular this Month</h1>
<div className="">
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
{/* end card recent */}


{/* feature card  */}
<br /><br />
<h1>Features</h1>
<CardTColmun data={Data} />
{/* end feature card  */}

{/* article  */}
<br /><br />
<h1>All Articles</h1>
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

{/*  end article  */}




</div>
    );
}

export default Index;