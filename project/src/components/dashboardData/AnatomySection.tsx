import React from 'react';
import './AnatomySection.css';
import { HealthStatus } from '../../types';

interface AnatomySectionProps {
  healthData: HealthStatus[];
}

const AnatomySection: React.FC<AnatomySectionProps> = ({ healthData }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'status-healthy';
      case 'warning':
        return 'status-warning';
      case 'critical':
        return 'status-critical';
      default:
        return 'status-unknown';
    }
  };

  return (
    <div className="anatomy-container">
      <h2 className="anatomy-title">Body Status</h2>

      <div className="anatomy-body-wrapper">
        <div className="anatomy-body">
          <div className="body-head"></div>
          <div className="body-torso"></div>
          <div className="body-leg left"></div>
          <div className="body-leg right"></div>

          {healthData.map((item) => (
            <div
              key={item.id}
              className="indicator-wrapper"
              style={{
                top: item.position.top,
                left: item.position.left,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="indicator group">
                <div className={`indicator-dot ${getStatusClass(item.status)}`}></div>
                <div className="tooltip">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
