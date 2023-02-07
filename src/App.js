import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import BioPage from './Pages/BioPage/BioPage';
import CommissionsPage from './Pages/CommissionsPage/CommissionsPage';
import OriginalsPage from './Pages/OriginalsPage/OriginalsPage';
import PortraitsPage from './Pages/PortraitsPage/PortraitsPage';
import PrintsPage from './Pages/PrintsPage/PrintsPage';

function App() {
  return (
    <div>
      <h1>Brian Kuether Art Studio</h1>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bio" element={<BioPage />} />
      <Route path="/commissions" element={<CommissionsPage />} />
      <Route path="/originals" element={<OriginalsPage />} />
      <Route path="/portraits" element={<PortraitsPage />} />
      <Route path="/prints" element={<PrintsPage />} />
    </Routes>
    </div>
  );
}

export default App;
