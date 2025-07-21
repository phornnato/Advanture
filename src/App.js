import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import PathRouter from './layout/PathRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <br/>
      <BrowserRouter>
        <Header/>
        <PathRouter/>
      </BrowserRouter>
      
      {/* footer */}
      <br/><br/>
      <div className='mt-5'>
        <Footer/>
      </div>
      {/* end footer */}
    </div>
  );
}

export default App;
