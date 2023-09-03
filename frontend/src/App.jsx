import './styles/App.css'
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Explore from './components/Explore/Explore'
import {Route,Routes} from 'react-router-dom'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App
