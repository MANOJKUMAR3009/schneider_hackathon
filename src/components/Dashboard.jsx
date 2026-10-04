import React from 'react';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import EnergyChart from './EnergyChart';
import { Zap, Wind, TrendingDown, Bell, Search, User } from 'lucide-react';
import './Dashboard.css';

// Mock data for the chart
const energyData = [
  { time: '00:00', baseline: 120, actual: 110 },
  { time: '04:00', baseline: 100, actual: 95 },
  { time: '08:00', baseline: 250, actual: 210 },
  { time: '12:00', baseline: 380, actual: 290 }, // Peak shaving
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
            <h1 className="page-title">Building Overview</h1>
            <p className="page-subtitle">Mumbai Tech Park - Tower A</p>
          </div>
          
          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </button>
            <div className="user-profile">
              <div className="avatar">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>
        
        <div className="dashboard-content">
          <div className="metrics-grid">
            <MetricCard 
              title="Energy Saved Today" 
              value="245" 
              unit="kWh"
              icon={TrendingDown} 
              trend="up" 
              trendValue="12%" 
              delay={1}
            />
            <MetricCard 
              title="Current Load" 
              value="1.2" 
              unit="MW"
              icon={Zap} 
              trend="down" 
              trendValue="5%" 
              delay={2}
            />
            <MetricCard 
              title="Indoor Air Quality" 
              value="98" 
              unit="AQI"
              icon={Wind} 
              trend="up" 
              trendValue="2%" 
              delay={3}
            />
          </div>
          
          <div className="charts-grid mt-6">
            <EnergyChart data={energyData} title="Energy Consumption vs Baseline" />
          </div>
          
          <div className="actionable-insights mt-6 glass-panel animate-fade-in animate-delay-3">
            <div className="insights-header">
              <h3>Active Grid Optimization</h3>
              <span className="status-badge active">Demand Response Active</span>
            </div>
            <p className="insights-desc">
              Flexible loads (HVAC Zone 3 & 4) have been shifted off-peak automatically due to DISCOM signal. 
              Estimated savings for current event: <strong>$145.00</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
