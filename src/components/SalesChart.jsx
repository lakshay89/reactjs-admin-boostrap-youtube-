import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 500 },
  { month: 'Apr', sales: 450 },
  { month: 'May', sales: 600 },
  { month: 'Jun', sales: 700 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        
        {/* GRID */}
        <CartesianGrid
          stroke="rgba(255,255,255,0.3)"
          strokeDasharray="3 3"
        />

        {/* X AXIS */}
        <XAxis
          dataKey="month"
          stroke="#ffffff"
          tick={{ fill: '#ffffff', fontSize: 12 }}
        />

        {/* Y AXIS */}
        <YAxis
          stroke="#ffffff"
          tick={{ fill: '#ffffff', fontSize: 12 }}
        />

        {/* TOOLTIP */}
        <Tooltip
          contentStyle={{
            backgroundColor: '#0A4ADC',
            border: 'none',
            color: '#fff',
          }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />

        {/* LINE */}
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#ffffff"
          strokeWidth={3}
          dot={{ fill: '#ffffff', strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}
