import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Zap, Thermometer, Settings, LogOut, Leaf, Users, AlertTriangle, TrendingDown } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon-container small">
          <Leaf className="logo-icon" size={24} />
        </div>
        <h2>EcoStruxure</h2>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-group">
          <p className="nav-group-title">Main</p>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/occupancy-ml" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <Users size={20} />
            <span>Occupancy ML</span>
          </NavLink>
          <NavLink to="/energy-prediction" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <Zap size={20} />
            <span>Energy Prediction</span>
          </NavLink>
          <NavLink to="/fdd" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <AlertTriangle size={20} />
            <span>FDD</span>
          </NavLink>
          <NavLink to="/optimization" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <Settings size={20} />
            <span>Optimization</span>
          </NavLink>
          <NavLink to="/digital-twin" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <LayoutDashboard size={20} />
            <span>Digital Twin</span>
          </NavLink>
          <NavLink to="/climate-zone" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <Thermometer size={20} />
            <span>Climate-Zone Logic</span>
          </NavLink>
          <NavLink to="/savings" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <TrendingDown size={20} />
            <span>Savings Calc</span>
          </NavLink>
        </div>
        
        <div className="nav-group mt-auto">
          <NavLink to="/login" className="nav-item logout">
            <LogOut size={20} />
            <span>Sign Out</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
