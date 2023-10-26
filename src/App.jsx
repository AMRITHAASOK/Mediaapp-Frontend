
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import WatchHistory from './Pages/WatchHistory'
function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
            {/* localhost:3000 -LandingPage */}
              <Route path='/' element={<LandingPage/>}/>
               {/* localhost:3000/home -Home */}
               <Route path='/home' element={<Home/>}/>
               <Route path='/watch-history' element={<WatchHistory/>}/>
                {/* localhost:3000hgieue9089 */}
                <Route path='*' element={<PageNotFound/>}/>
         </Routes>
      <Footer/>
    </div>
  );
}

export default App;
