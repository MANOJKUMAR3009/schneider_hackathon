import React from 'react';
import Sidebar from './Sidebar';
import { Zap, CloudRain, Sun, Activity } from 'lucide-react';
import './Dashboard.css';

const EnergyPrediction = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Energy Prediction</h1>
            <p className="page-subtitle">Forecasting Load via Weather & Historical Data</p>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="metrics-row animate-fade-in">
            <div className="metric-box">
              <div className="metric-icon"><Zap size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Predicted Day Total</span>
                <span className="metric-value">4.2 <span className="unit">MWh</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Sun size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Weather Impact</span>
                <span className="metric-value">+12<span className="unit">% load</span></span>
              </div>
            </div>
          </div>

          <div className="middle-section mt-6">
            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Load Forecast (Next 24h)</h3>
              </div>
              <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '8px', marginTop: '24px', paddingBottom: '24px', borderBottom: '1px solid #333' }}>
                {/* Mock Bar Chart */}
                {[40, 35, 30, 45, 60, 85, 100, 95, 80, 60, 50, 45].map((val, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '100%', 
                      height: `${val * 2}px`, 
                      background: val > 80 ? 'var(--brand-red)' : 'var(--brand-green)',
                      borderRadius: '4px 4px 0 0',
                      opacity: 0.8
                    }}></div>
                    <span style={{ fontSize: '10px', color: '#666' }}>{i*2}h</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Prediction Inputs</h3>
                <button className="execute-btn" style={{ padding: '8px 16px', fontSize: '12px' }}>Recalculate</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Weather Data Source</label>
                  <select className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }}>
                    <option>OpenWeather API (Live)</option>
                    <option>Historical Average (Same Day)</option>
                    <option>Manual Override</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Forecast High (°C)</label>
                    <input type="number" defaultValue="34" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Humidity (%)</label>
                    <input type="number" defaultValue="65" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                  </div>
                </div>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={16} className="text-warning" /> Peak Alert
                  </h4>
                  <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.5' }}>
                    Model predicts a peak load of <strong>1.2 MW</strong> between 13:00 and 15:00 due to high cooling degree days and returning cafeteria occupancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnergyPrediction;
