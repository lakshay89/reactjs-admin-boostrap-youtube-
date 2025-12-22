import React from 'react'
import DashboardItems from './DashboardItems'

export default function Dashboard() {
  return (
    <div className='d-flex h-100 w-100 flex-column'>
    <h1>Dashboard</h1>
    <hr />
    <div className="row w-100 h-100" style={{height: '500px'}}>
      <div className="col-md-8 col-lg-8 " style={{height: '500px'}}>
        <div className="row d-flex flex-wrap" style={{height: '500px'}}>
          <div className="col-12  d-flex ">
         <DashboardItems color={['#ff7e5f', '#feb47b']}  />
         <DashboardItems color={['#6a11cb', '#2575fc']} />
          </div>

          <div className="col-12 d-flex ">
          
          <DashboardItems color={['#43cea2', '#185a9d']} />
          <DashboardItems color={['#ff512f', '#dd2476']} />
          </div>
        
        </div>
        
      </div>
      <div className="col-md-4 col-lg-4 h-100" style={{height: '500px'}}>
        <div className="col-12 p-2 bg-dark rounded-3 text-white h-100 mx-2">

        </div>
      </div>
    </div>
      
    </div>
  )
}
