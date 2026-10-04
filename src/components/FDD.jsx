import React from 'react';
import Sidebar from './Sidebar';
import { AlertTriangle, CheckCircle, PenTool, AlertCircle } from 'lucide-react';
import './Dashboard.css';

const FDD = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header animate-fade-in">
          <div>
            <h1 className="page-title">Fault Detection & Diagnostics (FDD)</h1>
            <p className="page-subtitle">Automated Anomaly Detection for HVAC & Equipment</p>
          </div>
        </header>
        <div className="dashboard-content">
          
          <div className="glass-panel mt-6" style={{ padding: '24px', borderRadius: '16px' }}>
            <div className="panel-header">
              <h3>Active Faults</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span className="rpc-badge" style={{ background: 'rgba(255,60,60,0.1)', color: '#ff4444', borderColor: '#ff4444' }}>2 CRITICAL</span>
                <span className="rpc-badge" style={{ background: 'rgba(245,166,35,0.1)', color: '#f5a623', borderColor: '#f5a623' }}>4 WARNINGS</span>
              </div>
            </div>
            
            <div className="zones-list mt-6">
              {/* Fault Item 1 */}
              <div className="zone-item" style={{ background: 'rgba(255,60,60,0.05)', borderLeft: '4px solid #ff4444', padding: '16px', borderRadius: '0 8px 8px 0', alignItems: 'flex-start', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <AlertCircle size={20} color="#ff4444" />
                    <strong style={{ fontSize: '16px' }}>AHU-02: Simultaneous Heating and Cooling</strong>
                  </div>
                  <span style={{ fontSize: '12px', color: '#888' }}>Detected: 2 hours ago</span>
                </div>
                <p style={{ fontSize: '14px', color: '#aaa', marginLeft: '32px' }}>
                  Diagnostics: Chilled water valve is 100% open while heating coil is active. Estimated energy waste: 15 kW/h.
                </p>
                <div style={{ marginLeft: '32px', display: 'flex', gap: '12px' }}>
                  <button className="execute-btn" style={{ padding: '6px 12px', fontSize: '12px', background: 'transparent', border: '1px solid #ff4444', color: '#ff4444' }}>Generate Work Order</button>
                  <button className="execute-btn" style={{ padding: '6px 12px', fontSize: '12px', background: '#333', color: '#fff' }}>Acknowledge</button>
                </div>
              </div>

              {/* Fault Item 2 */}
              <div className="zone-item" style={{ background: 'rgba(245,166,35,0.05)', borderLeft: '4px solid #f5a623', padding: '16px', borderRadius: '0 8px 8px 0', alignItems: 'flex-start', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <AlertTriangle size={20} color="#f5a623" />
                    <strong style={{ fontSize: '16px' }}>VAV-1.4: Stuck Damper Suspected</strong>
                  </div>
                  <span style={{ fontSize: '12px', color: '#888' }}>Detected: 5 hours ago</span>
                </div>
                <p style={{ fontSize: '14px', color: '#aaa', marginLeft: '32px' }}>
                  Diagnostics: Zone temperature is 3°C above setpoint, but airflow is minimum. Damper actuator may have failed.
                </p>
                <div style={{ marginLeft: '32px', display: 'flex', gap: '12px' }}>
                  <button className="execute-btn" style={{ padding: '6px 12px', fontSize: '12px' }}>Force Damper Test (RPC)</button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel mt-6" style={{ padding: '24px', borderRadius: '16px' }}>
            <div className="panel-header">
              <h3>FDD Rules Engine (ThingsBoard Integration)</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span>Short Cycling Detection</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <p style={{ fontSize: '12px', color: '#888' }}>Triggers if compressor starts &gt; 6 times per hour.</p>
              </div>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span>Sensor Drift Analysis</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <p style={{ fontSize: '12px', color: '#888' }}>Compares redundant sensors for deviations &gt; 5%.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FDD;
