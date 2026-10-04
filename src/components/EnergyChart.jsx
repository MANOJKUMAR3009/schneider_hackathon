import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './EnergyChart.css';

const EnergyChart = ({ data, title }) => {
  const [timeRange, setTimeRange] = useState('Today');

  return (
    <div className="energy-chart-container glass-panel animate-fade-in animate-delay-2">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">{title}</h3>
          <p className="chart-subtitle">Real-time building load vs baseline</p>
        </div>
        <div className="chart-controls">
          {['Today', 'Week', 'Month'].map(range => (
            <button 
              key={range}
              className={`range-btn ${timeRange === range ? 'active' : ''}`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--brand-green)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--brand-green)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--text-muted)" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="var(--text-muted)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
            <YAxis stroke="var(--text-muted)" tick={{fill: 'var(--text-muted)'}} axisLine={false} tickLine={false} />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
              itemStyle={{ color: 'var(--text-primary)' }}
            />
            <Area type="monotone" dataKey="baseline" stroke="var(--text-muted)" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorBaseline)" name="Baseline (kWh)" />
            <Area type="monotone" dataKey="actual" stroke="var(--brand-green)" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" name="Actual (kWh)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyChart;
