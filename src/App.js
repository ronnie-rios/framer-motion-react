import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Components from './components/Components';
import Hooks from './components/Hooks';
import Props from './components/Props';
import State from './components/State';

function App() {
  return (
    <div classname='bg-black m-h-screen'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/components' element={<Components />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/state' element={<State />} />
          <Route path='/props' element={<Props />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
