import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OccupancyML from './components/OccupancyML';
import EnergyPrediction from './components/EnergyPrediction';
import FDD from './components/FDD';
import Optimization from './components/Optimization';
import DigitalTwin from './components/DigitalTwin';
import ClimateZone from './components/ClimateZone';
import Savings from './components/Savings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/occupancy-ml" element={<OccupancyML />} />
        <Route path="/energy-prediction" element={<EnergyPrediction />} />
        <Route path="/fdd" element={<FDD />} />
        <Route path="/optimization" element={<Optimization />} />
        <Route path="/digital-twin" element={<DigitalTwin />} />
        <Route path="/climate-zone" element={<ClimateZone />} />
        <Route path="/savings" element={<Savings />} />
      </Routes>
    </Router>
  );
}

export default App;
