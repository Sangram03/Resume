import React from 'react';
import './ActivityFeed.css';
import { ActivityData } from '../../types';

interface ActivityFeedProps {
  activityData: ActivityData[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activityData }) => {
  const maxCount = Math.max(...activityData.map(data => data.count));

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <div className="activity-summary">
          {activityData.reduce((sum, item) => sum + item.count, 0)} appointments this week
        </div>
      </div>

      <div className="activity-bars">
        {activityData.map((data, index) => {
          const heightPercentage = maxCount > 0 ? (data.count / maxCount) * 100 : 0;

          return (
            <div key={index} className="bar-container">
              <div
                className={`bar ${data.count > 0 ? 'bar-active' : 'bar-inactive'}`}
                style={{ height: `${heightPercentage}%` }}
              ></div>
              <div className="bar-label">{data.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
