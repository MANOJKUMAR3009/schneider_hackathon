import React from 'react';
import Sidebar from './Sidebar';
import { Thermometer, Cloud, Map } from 'lucide-react';
import './Dashboard.css';

const ClimateZone = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Climate-Zone Logic</h1>
            <p className="page-subtitle">ASHRAE Guideline Integration & Seasonal Adjustments</p>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="metrics-row animate-fade-in">
            <div className="metric-box">
              <div className="metric-icon"><Map size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Current Zone</span>
                <span className="metric-value">ASHRAE 1A <span className="unit">Very Hot/Humid</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Cloud size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Operating Mode</span>
                <span className="metric-value">Summer <span className="unit">Cooling</span></span>
              </div>
            </div>
          </div>

          <div className="middle-section mt-6">
            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Setpoints & Logic Overrides</h3>
                <button className="execute-btn" style={{ padding: '8px 16px', fontSize: '12px' }}>Apply Configuration</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Base Cooling Setpoint (°C)</label>
                  <input type="number" defaultValue="24" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Base Heating Setpoint (°C)</label>
                  <input type="number" defaultValue="21" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Free Cooling (Economizer) Enable &lt; 18°C</label>
                  <select className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }}>
                    <option>Enabled (Enthalpy Based)</option>
                    <option>Enabled (Dry Bulb Based)</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Dehumidification Override</label>
                  <select className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }}>
                    <option>Active (&gt;60% RH)</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Seasonal Transition Curve</h3>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginTop: '16px', color: '#aaa', fontSize: '13px', lineHeight: '1.6' }}>
                <p>The system is currently utilizing the <strong>Summer Adaptive Comfort Model</strong>.</p>
                <p>Setpoints are being dynamically relaxed by up to +1.5°C when outdoor temperatures exceed 35°C to reduce chiller load while maintaining occupant comfort within ASHRAE Standard 55 limits.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Enable Auto-Transition to Fall Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClimateZone;
