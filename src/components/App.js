import { Routes, Route } from 'react-router';
import Search from './Search'
import Nearby from './Nearby'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/search' element={<Search />} />

          <Route path='/Nearby' element={<Nearby />} />
        </Routes>
    </div>
  );
}

export default App;
