import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Movie from './pages/movies/movie';
import People from './pages/people/people';
import Planets from './pages/planets/planets';
import Species from './pages/species/species';
import Starships from './pages/starships/starships';
import Vehicles from './pages/vehicles/vehicles';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='people' element={<People />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/species' element={<Species />} />
        <Route path='starships' element={<Starships />} />
        <Route path='vehicles' element={<Vehicles />} />
      </Routes>
    </div>
  );
}

export default App;
