import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './01-components/01-Navbar';
import Home from './02-pages/01-Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;