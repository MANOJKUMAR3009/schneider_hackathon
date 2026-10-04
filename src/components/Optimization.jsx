import React from 'react';
import Sidebar from './Sidebar';
import { Settings, Play, Sliders } from 'lucide-react';
import './Dashboard.css';

const Optimization = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Dynamic Optimization</h1>
            <p className="page-subtitle">AI-Driven Closed-Loop Control via ThingsBoard RPC</p>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="middle-section mt-6">
            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Optimization Strategies</h3>
                <span className="live-badge" style={{ background: 'var(--brand-green-light)', color: 'var(--brand-green)' }}>ACTIVE</span>
              </div>
              
              <div className="zones-list mt-6">
                {[
                  { name: 'Pre-cooling (Thermal Mass)', status: true, desc: 'Cools building during off-peak hours.' },
                  { name: 'Demand Response (Peak Shaving)', status: true, desc: 'Sheds non-critical loads during peak tariff.' },
                  { name: 'Deadband Widening', status: false, desc: 'Expands acceptable temperature range when occupancy is low.' },
                  { name: 'EV Charging Shift', status: true, desc: 'Delays fleet EV charging to solar-peak hours.' }
                ].map((strategy, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>{strategy.name}</h4>
                      <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{strategy.desc}</p>
                    </div>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input type="checkbox" defaultChecked={strategy.status} style={{ width: '18px', height: '18px', accentColor: 'var(--brand-green)' }} />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel highlight-border" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Constraints & Bounds</h3>
                <Sliders size={20} className="text-secondary" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#ddd' }}>Max Comfort Deviation</label>
                    <span style={{ fontSize: '13px', color: 'var(--brand-green)' }}>±1.5 °C</span>
                  </div>
                  <input type="range" min="0.5" max="3.0" step="0.5" defaultValue="1.5" style={{ width: '100%', accentColor: 'var(--brand-green)' }} />
                  <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>How far AI can drift from user setpoints during DR events.</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '13px', color: '#ddd' }}>Minimum IAQ (CO2 limit)</label>
                    <span style={{ fontSize: '13px', color: 'var(--brand-green)' }}>800 ppm</span>
                  </div>
                  <input type="range" min="600" max="1200" step="50" defaultValue="800" style={{ width: '100%', accentColor: 'var(--brand-green)' }} />
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', marginTop: '12px' }}>
                  <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Execute Test RPC Override</h4>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <select className="search-input" style={{ flex: 1, background: '#222' }}>
                      <option>AHU-01 Chilled Water Valve</option>
                      <option>Zone B Lighting</option>
                    </select>
                    <input type="number" defaultValue="50" className="search-input" style={{ width: '80px', background: '#222' }} />
                    <button className="execute-btn" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Play size={16} /> Send
                    </button>
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

export default Optimization;
