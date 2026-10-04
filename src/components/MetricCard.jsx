import React from 'react';
import './MetricCard.css';

const MetricCard = ({ title, value, unit, icon: Icon, trend, trendValue, delay = 0 }) => {
  const isPositive = trend === 'up';
  
  return (
    <div className={`metric-card glass-panel animate-fade-in animate-delay-${delay}`}>
      <div className="metric-header">
        <h3 className="metric-title">{title}</h3>
        <div className="metric-icon-container">
          <Icon size={20} className="metric-icon" />
        </div>
      </div>
      
      <div className="metric-content">
        <div className="metric-value-container">
          <span className="metric-value">{value}</span>
          {unit && <span className="metric-unit">{unit}</span>}
        </div>
        
        {trendValue && (
          <div className={`metric-trend ${isPositive ? 'trend-good' : 'trend-bad'}`}>
            {isPositive ? '↑' : '↓'} {trendValue}
            <span className="trend-label"> vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
