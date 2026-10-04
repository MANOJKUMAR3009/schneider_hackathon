import React from 'react';
import Sidebar from './Sidebar';
import { TrendingDown, DollarSign, Calendar, Download } from 'lucide-react';
import './Dashboard.css';

const Savings = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Savings Calculation & M&V</h1>
            <p className="page-subtitle">Measurement & Verification (IPMVP standard)</p>
          </div>
          <div className="header-actions">
            <button className="execute-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Download size={16} /> Export PDF Report
            </button>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="metrics-row animate-fade-in">
            <div className="metric-box" style={{ background: 'var(--brand-green-light)', borderColor: 'var(--brand-green)' }}>
              <div className="metric-icon" style={{ background: 'var(--brand-green)', color: '#000' }}><DollarSign size={20} /></div>
              <div className="metric-info">
                <span className="metric-label" style={{ color: 'rgba(0,0,0,0.6)' }}>MTD Savings</span>
                <span className="metric-value" style={{ color: '#000' }}>$4,250 <span className="unit" style={{ color: 'rgba(0,0,0,0.6)' }}>USD</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><TrendingDown size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Energy Avoided</span>
                <span className="metric-value">12.4 <span className="unit">MWh</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Calendar size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">Projected Annual ROI</span>
                <span className="metric-value">18.5<span className="unit">%</span></span>
              </div>
            </div>
          </div>

          <div className="middle-section mt-6">
            <div className="glass-panel" style={{ flex: 2, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Savings by Category (Current Month)</h3>
              </div>
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>HVAC Optimization</span>
                    <strong>$2,800 (65%)</strong>
                  </div>
                  <div className="progress-bar-bg" style={{ height: '12px' }}>
                    <div className="progress-bar-fill" style={{ width: '65%', background: 'var(--brand-green)' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>Lighting Controls</span>
                    <strong>$850 (20%)</strong>
                  </div>
                  <div className="progress-bar-bg" style={{ height: '12px' }}>
                    <div className="progress-bar-fill" style={{ width: '20%', background: '#f5a623' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>Demand Response Events</span>
                    <strong>$600 (15%)</strong>
                  </div>
                  <div className="progress-bar-bg" style={{ height: '12px' }}>
                    <div className="progress-bar-fill" style={{ width: '15%', background: 'cyan' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '24px', borderRadius: '16px' }}>
              <div className="panel-header">
                <h3>Baseline Configuration</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Utility Rate ($/kWh)</label>
                  <input type="number" defaultValue="0.12" step="0.01" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Peak Demand Charge ($/kW)</label>
                  <input type="number" defaultValue="15.00" step="0.5" className="search-input" style={{ width: '100%', background: 'rgba(0,0,0,0.2)' }} />
                </div>
                <button className="execute-btn" style={{ width: '100%', marginTop: '12px' }}>Update Baseline Data</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Savings;
