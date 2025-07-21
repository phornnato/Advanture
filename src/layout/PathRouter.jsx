import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../components/Index';
import Destination from '../components/Destination';
import Tours from '../components/Tours';
import About from '../components/About';
import Contact from '../components/Contact';
import DestinationExplore from '../components/DestinationExplore';
import PhornDetail from '../components/PhornDetail';
import SingDetail from '../components/SingDetail';
import JackDetail from '../components/JackDetail';
import TourExplore from '../components/TourExplore';
import Meterial from '../components/Meterial';

function PathRouter() {
  return (
      <div className="main-content container mt-5">
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/meterial' element={<Meterial/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />


            {/* explore detail  */}
            <Route path='/dest_img' element={<DestinationExplore/>} />
            <Route path='/phorn_detail' element={<PhornDetail/>} />
            <Route path='/sing_detail' element={<SingDetail/>} />
            <Route path='/jack_detail' element={<JackDetail/>} />
            <Route path='/tour_img' element={<TourExplore/>} />
            {/* end explore detail  */}
    
        </Routes>
      </div>
   
  );
}

export default PathRouter;
