import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';

import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';

export default function PieAnimation() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') return;
    setItemNb(newValue);
  };

  const handleRadius = (event, newValue) => {
    if (typeof newValue !== 'number') return;
    setRadius(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding:'10px' }}>
      <PieChart
        height={250}
        width={300}

        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: radius,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        skipAnimation={skipAnimation}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={skipAnimation}
            onChange={(e) => setSkipAnimation(e.target.checked)}
          />
        }
        label="Skip Animation"
      />

      <Typography gutterBottom>Number of items</Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={8}
      />

      <Typography gutterBottom>Radius</Typography>
      <Slider
        value={radius}
        onChange={handleRadius}
        valueLabelDisplay="auto"
        min={15}
        max={100}
      />
    </Box>
  );
}
