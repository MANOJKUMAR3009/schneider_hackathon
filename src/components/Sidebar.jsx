import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Zap, Thermometer, Settings, LogOut, Leaf } from 'lucide-react';
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
          <NavLink to="/energy" className="nav-item">
            <Zap size={20} />
            <span>Energy Analytics</span>
          </NavLink>
          <NavLink to="/hvac" className="nav-item">
            <Thermometer size={20} />
            <span>HVAC Control</span>
          </NavLink>
        </div>
        
        <div className="nav-group mt-auto">
          <NavLink to="/settings" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
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
