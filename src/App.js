
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/LoginPage/Login';
import Home from './Home';
import ArtistDetailsHome from './Pages/ArtistDetails/ArtistDetailsHome';
import PageHome from './Pages/PageHome';


function App() {

  return (
    <>
    
       <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/mehendiArtist" element={<PageHome />}/>
          <Route path="/details" element={<ArtistDetailsHome />}/>
      </Routes> 
   
    </>
  );
}

export default App;
