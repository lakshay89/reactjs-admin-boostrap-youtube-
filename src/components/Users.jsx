import React from 'react'
import Onebox from '../components/Onebox.jsx';
import DashboardItems from './DashboardItems.jsx';
import PieCharts from './PieCharts.jsx';
import PieAnimation from './PieAnimation.jsx';
import BasicBars from './BasicBars.jsx';
import gif from "../assests/images/bar-chart-removebg-preview.png";
import gif1 from "../assests/images/timeline-removebg-preview.png";
import gif2 from "../assests/images/arrows-removebg-preview.png";
import BrushCustomOverlay from './BrushCustomOverlay.jsx';
// import PieAnimation from './PieAnimation.jsx';
// import { PieChart } from 'recharts';

export default function Users() {
  return (
    <div className="content">
      
      <hr />
      <div className="user">
        <div className="box box1"><Onebox /></div>
        <div className="box box2">
           <DashboardItems
                color={['#ff7e5f', '#feb47b']}
                grow={true}
                icon={gif}
                name="Total Users"
                count={211}
              />
        </div>
        <div className="box box3">
              <DashboardItems
                color={['#ff512f', '#dd2476']}
                grow={true}
                icon={gif2}
                name="Profit"
                count={100}
              />
        </div>
        <div className="box box4">
            <PieAnimation />
        </div>
        <div className="box box5">
          <DashboardItems
                color={['#43cea2', '#185a9d']}
                grow={false}
                icon={gif1}
                name="Expenses"
                count={150}
              />  
        </div>
        <div className="box box6">
          <DashboardItems
                color={['#6a11cb', '#2575fc']}
                grow={true}
                icon={gif}
                name="Revenue"
                count={300}
              />
        </div>
        <div className="box box7">
          <PieCharts />
        </div>
        <div className="box box8">
          <BasicBars />
        </div>
        <div className="box box9">
          <BrushCustomOverlay />
        </div>
      </div>
    </div>
  )
}
