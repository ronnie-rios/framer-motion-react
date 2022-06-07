import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex'>
      <Router>
      <Navbar />
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
