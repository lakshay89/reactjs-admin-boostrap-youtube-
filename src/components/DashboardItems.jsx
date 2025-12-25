import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function DashboardItems(props) {
  return (
    <div
      className="p-3 py-4 d-flex flex-column justify-content-between rounded-3 text-white"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
        position: 'relative',
        height: '100%',
      }}
    >
      {/* BACKGROUND ICON */}
      <span className="chart">
        {props.grow ? <TrendingUpIcon /> : <TrendingDownIcon />}
      </span>

      {/* TOP */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="mb-1">{props.name}</h4>
          <h1 className="fw-bold">{props.count}</h1>
        </div>

        <div style={{ width: '70px' }}>
          <img src={props.icon} className="img-fluid" alt={props.name} />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-light btn-sm">view all</button>
        <small>+5% since last month</small>
      </div>
    </div>
  );
}
