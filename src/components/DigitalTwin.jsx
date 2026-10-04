import React from 'react';
import Sidebar from './Sidebar';
import { LayoutDashboard, Layers, Box } from 'lucide-react';
import './Dashboard.css';

const DigitalTwin = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Digital Twin View</h1>
            <p className="page-subtitle">Interactive 3D representation and real-time state</p>
          </div>
          <div className="header-actions">
            <select className="search-input" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <option>Building A</option>
              <option>Building B</option>
            </select>
            <select className="search-input" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <option>Floor 1</option>
              <option>Floor 2</option>
              <option>Roof (Solar)</option>
            </select>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="middle-section mt-6" style={{ height: '500px' }}>
            <div className="glass-panel" style={{ flex: 2, padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
              <div className="panel-header">
                <h3>Floor Plan Visualization (Mock)</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="execute-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 12px', fontSize: '12px' }}>Thermal</button>
                  <button className="execute-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 12px', fontSize: '12px' }}>Occupancy</button>
                  <button className="execute-btn" style={{ padding: '6px 12px', fontSize: '12px' }}>Airflow</button>
                </div>
              </div>
              <div style={{ flex: 1, background: '#111', borderRadius: '8px', border: '1px dashed #444', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Box size={48} color="#444" />
                <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,255,100,0.2)', color: 'var(--brand-green)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Zone A: 22°C</span>
                <span style={{ position: 'absolute', bottom: '40px', right: '40px', background: 'rgba(255,100,100,0.2)', color: 'var(--brand-red)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Zone B: 26°C (Hotspot)</span>
              </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px', overflowY: 'auto' }}>
              <div className="panel-header">
                <h3>Asset Hierarchy</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', lineHeight: '2' }}>
                <li><Layers size={14} style={{ display: 'inline', marginRight: '8px' }} /> <strong>Floor 1</strong></li>
                <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
                  <li>↳ AHU-01 <span style={{ color: 'var(--brand-green)', fontSize: '11px', marginLeft: '8px' }}>● Running</span></li>
                  <li>↳ VAV-1.1 <span style={{ color: 'var(--brand-green)', fontSize: '11px', marginLeft: '8px' }}>● 45% Open</span></li>
                  <li>↳ VAV-1.2 <span style={{ color: 'var(--brand-red)', fontSize: '11px', marginLeft: '8px' }}>● Offline</span></li>
                </ul>
                <li style={{ marginTop: '12px' }}><Layers size={14} style={{ display: 'inline', marginRight: '8px' }} /> <strong>Floor 2</strong></li>
                <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
                  <li>↳ AHU-02 <span style={{ color: 'var(--brand-green)', fontSize: '11px', marginLeft: '8px' }}>● Running</span></li>
                  <li>↳ Lighting Zone A <span style={{ color: '#888', fontSize: '11px', marginLeft: '8px' }}>○ Off</span></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalTwin;
