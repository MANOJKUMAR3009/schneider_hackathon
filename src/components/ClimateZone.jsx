import React from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

const ClimateZone = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">ClimateZone</h1>
            <p className="page-subtitle">BuildSense AI Module</p>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="glass-panel" style={{padding: '40px', textAlign: 'center'}}>
            <h2>ClimateZone Dashboard</h2>
            <p className="mt-6 text-secondary">This module handles the ClimateZone capabilities of the BuildSense AI service via ThingsBoard integration.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClimateZone;
