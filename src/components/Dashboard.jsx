import React from 'react';
import DashboardItems from './DashboardItems';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import gif from '../assests/images/11.gif';
import gif1 from '../assests/images/33.gif';
import gif3 from '../assests/images/timeline-removebg-preview.png';
import SalesChart from './SalesChart';
import DataGridDemo from './DataGridDemo';

export default function Dashboard() {
  return (<>
    <div className="content">

      <h1>Dashboard</h1>
      <hr />

      {/* MAIN GRID */}
      <div className="row g-3">

        {/* LEFT SIDE (CARDS) */}
        <div className="col-lg-8">
          <div className="row g-3">

            <div className="col-md-6">
              <DashboardItems
                color={['#ff7e5f', '#feb47b']}
                grow={true}
                icon={gif}
                name="Users"
                count={211}
              />
            </div>

            <div className="col-md-6">
              <DashboardItems
                color={['#6a11cb', '#2575fc']}
                grow={true}
                icon={gif1}
                name="Revenue"
                count={300}
              />
            </div>

            <div className="col-md-6">
              <DashboardItems
                color={['#43cea2', '#185a9d']}
                grow={false}
                icon={gif1}
                name="Expenses"
                count={150}
              />
            </div>

            <div className="col-md-6">
              <DashboardItems
                color={['#ff512f', '#dd2476']}
                grow={true}
                icon={gif3}
                name="Profit"
                count={100}
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (SALES OVERVIEW) */}
        <div className="col-lg-4">
          <div
            style={{
              width: '100%',
              minHeight: '100%',
              backgroundImage:
                'linear-gradient(188deg, rgba(10, 74, 220, 1) 21%, rgba(24, 151, 235, 1) 65%, rgba(24, 151, 235, 1) 86%)',
              color: '#fff',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
             <span className="chart">
                     <TrendingDownIcon style={{fontSize:'350px'}} />
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Sales Overview</h3>
                    <img src={gif} width={50} alt="Sales Overview" />
                  </div>
                  <div className="  mt-3" style={{ width: '100%', height: 'fit-content' }}>
                    <SalesChart style={{color:'white'}}/>
                  </div>
          </div>
        </div>

      </div>

    </div>
    <div className="table w-100 p-3 mt-3 border-0 shadow-sm ">
      <h4 className="mb-4">Recent Orders</h4>
      <DataGridDemo />
    </div>
  
    </>  );
}
