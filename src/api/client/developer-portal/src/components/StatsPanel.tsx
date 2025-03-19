import React from 'react';

interface Parameter {
  category?: string;
  type?: string;
}

interface Props {
  parameters: Parameter[];
}

export const StatsPanel: React.FC<Props> = ({ parameters }) => {
  // Simple stats calculation
  const stats = {
    total: parameters.length,
    byCategory: parameters.reduce((acc: Record<string, number>, param) => {
      const category = param.category || 'uncategorized';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {}),
    byType: parameters.reduce((acc: Record<string, number>, param) => {
      const type = param.type || 'unknown';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {})
  };

  return (
    <div className="stats-panel">
      <h2>Parameter Statistics</h2>
      
      <div className="stat-box">
        <h3>Total Parameters</h3>
        <div className="stat-number">{stats.total}</div>
      </div>

      <div className="stat-section">
        <h3>By Category</h3>
        {Object.entries(stats.byCategory).map(([category, count]) => (
          <div key={category} className="stat-row">
            <span className="stat-label">{category}</span>
            <span className="stat-value">{count.toString()}</span>
          </div>
        ))}
      </div>

      <div className="stat-section">
        <h3>By Type</h3>
        {Object.entries(stats.byType).map(([type, count]) => (
          <div key={type} className="stat-row">
            <span className="stat-label">{type}</span>
            <span className="stat-value">{count.toString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 