import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Alumnos from './Alumnos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<Alumnos />} />
      </Routes>
    </Router>
  );
}

export default App;
