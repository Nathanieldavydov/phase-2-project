import { Routes, Route } from 'react-router';
import './App.css';
import Home from './Home'
import About from './About'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/About' element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
