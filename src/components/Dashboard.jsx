import React from 'react';
import Sidebar from './Sidebar';
import EnergyChart from './EnergyChart';
import { Zap, Users, Thermometer, TrendingDown, Bell, Search, User, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import './Dashboard.css';

const energyData = [
  { time: '00:00', baseline: 120, actual: 110 },
  { time: '04:00', baseline: 100, actual: 95 },
  { time: '08:00', baseline: 250, actual: 210 },
  { time: '12:00', baseline: 380, actual: 290 },
  { time: '16:00', baseline: 360, actual: 280 },
  { time: '20:00', baseline: 180, actual: 160 },
  { time: '23:59', baseline: 130, actual: 115 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">BUILDSENSE AI OVERLAY</h1>
            <p className="page-subtitle">Powered by ThingsBoard IoT</p>
          </div>
          
          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search devices..." className="search-input" />
            </div>
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge">1</span>
            </button>
            <div className="user-profile">
              <div className="avatar">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>
        
        <div className="dashboard-content">
          {/* Top Metrics Row */}
          <div className="metrics-row animate-fade-in animate-delay-1">
            <div className="metric-box">
              <div className="metric-icon"><Zap size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">ENERGY</span>
                <span className="metric-value">1,620 <span className="unit">kWh</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Users size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">OCCUPANCY</span>
                <span className="metric-value">67<span className="unit">%</span></span>
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-icon"><Thermometer size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">COMFORT</span>
                <span className="metric-value">91<span className="unit">%</span></span>
              </div>
            </div>
            <div className="metric-box critical">
              <div className="metric-icon"><AlertTriangle size={20} /></div>
              <div className="metric-info">
                <span className="metric-label">PEAK LOAD</span>
                <span className="metric-value">69<span className="unit">kW</span></span>
              </div>
            </div>
          </div>

          <div className="middle-section animate-fade-in animate-delay-2 mt-6">
            {/* Zones Panel */}
            <div className="zones-panel glass-panel">
              <div className="panel-header">
                <h3>BUILDING / ZONES</h3>
                <span className="live-badge">LIVE TELEMETRY</span>
              </div>
              <div className="zones-list">
                <div className="zone-item">
                  <span className="zone-name">Zone A</span>
                  <div className="zone-stats">
                    <div className="progress-bar-bg"><div className="progress-bar-fill high" style={{width: '92%'}}></div></div>
                    <span className="zone-val">92%</span>
                  </div>
                </div>
                <div className="zone-item">
                  <span className="zone-name">Zone B</span>
                  <div className="zone-stats">
                    <div className="progress-bar-bg"><div className="progress-bar-fill medium" style={{width: '48%'}}></div></div>
                    <span className="zone-val">48%</span>
                  </div>
                </div>
                <div className="zone-item">
                  <span className="zone-name">Zone C</span>
                  <div className="zone-stats">
                    <div className="progress-bar-bg"><div className="progress-bar-fill low" style={{width: '12%'}}></div></div>
                    <span className="zone-val">12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendation Panel */}
            <div className="ai-panel glass-panel highlight-border">
              <div className="panel-header">
                <h3>AI RECOMMENDATION <span className="rpc-badge">RPC READY</span></h3>
              </div>
              <div className="ai-content">
                <div className="ai-event">
                  <AlertTriangle className="text-warning" size={24} />
                  <div>
                    <h4>Peak Event</h4>
                    <p>High demand charge risk</p>
                  </div>
                </div>
                <ul className="ai-actions">
                  <li><Thermometer size={16} /> Pre-cool Zone B</li>
                  <li><Clock size={16} /> Delay EV 30 min</li>
                </ul>
                <div className="ai-summary">
                  <div className="savings-est">
                    <span>Save </span>
                    <strong>9.6 kW peak</strong>
                  </div>
                  <button className="execute-btn">
                    Execute RPC Command
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="chart-section mt-6 animate-fade-in animate-delay-3 glass-panel">
            <EnergyChart data={energyData} title="Energy history / baseline vs optimized" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
