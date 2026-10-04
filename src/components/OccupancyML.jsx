import React from 'react';
import Sidebar from './Sidebar';
import { Users, TrendingUp, Clock, MapPin } from 'lucide-react';
import './Dashboard.css';

const OccupancyML = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Occupancy ML</h1>
            <p className="page-subtitle">Machine Learning based Occupancy Prediction</p>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="metrics-row animate-fade-in">
            <div className="metric-box">
              <div className="metric-icon"><Users size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Current Occupancy</span>
                <span className="metric-value">452 <span className="unit">people</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><TrendingUp size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Predicted Peak (Today)</span>
                <span className="metric-value">680 <span className="unit">at 14:00</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Clock size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Accuracy (Last 7 Days)</span>
                <span className="metric-value">94.2<span className="unit">%</span></span>
              </div>
            </div>
          </div>

          <div className="middle-section mt-6">
            <div className="glass-panel" style={{ flex: 2, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Live Camera & WiFi Sensor Feed Summary</h3>
                <button className="execute-btn" style={{ padding: '8px 16px', fontSize: '12px' }}>Refresh Model</button>
              </div>
              <div className="zones-list mt-6">
                {[
                  { zone: 'Lobby (Zone A)', count: 120, trend: '+15%', status: 'High Traffic' },
                  { zone: 'Cafeteria (Zone C)', count: 45, trend: '-5%', status: 'Normal' },
                  { zone: 'Open Office (Zone B)', count: 287, trend: 'Stable', status: 'Near Capacity' }
                ].map((item, i) => (
                  <div key={i} className="zone-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <MapPin size={18} className="text-secondary" />
                      <span className="zone-name" style={{ width: '150px' }}>{item.zone}</span>
                    </div>
                    <div className="zone-stats" style={{ justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.count} <span style={{fontSize: '12px', color: '#888'}}>pax</span></span>
                      <span style={{ color: item.trend.includes('+') ? 'var(--brand-red)' : 'var(--brand-green)' }}>{item.trend}</span>
                      <span className="live-badge">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>ML Parameters</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Prediction Horizon</label>
                  <select className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }}>
                    <option>Next 1 Hour</option>
                    <option>Next 4 Hours</option>
                    <option selected>Next 24 Hours</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Confidence Threshold</label>
                  <input type="range" min="50" max="99" defaultValue="85" style={{ width: '100%' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    <span>50%</span>
                    <span>85% (Current)</span>
                    <span>99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OccupancyML;
