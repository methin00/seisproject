import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MissionVision from './pages/MissionVision';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="misyon-vizyon" element={<MissionVision />} />
          <Route path="etkinlikler" element={<Events />} />
          <Route path="ekibimiz" element={<Team />} />
          <Route path="sponsorlarimiz" element={<Sponsors />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="basvuru" element={<Apply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
