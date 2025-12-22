import React from 'react'

export default function Dashboard() {
  return (
    <div className='d-flex h-100 w-100 flex-column'>
    <h1>Dashboard</h1>
    <hr />
    <div className="row w-100 h-100">
      <div className="col-md-8 col-lg-8 ">
        <div className="row d-flex flex-wrap">
          <div className="col-12  d-flex ">
          <div className="col-md-6 col-lg-6 bg-dark m-2 p-5 rounded-3 text-white">
          </div>
          <div className="col-md-6 col-lg-6 bg-dark m-2 p-5 rounded-3 text-white">
          </div>
          </div>

          <div className="col-12 d-flex ">
          <div className="col-md-6 col-lg-6 bg-dark m-2 p-5 rounded-3 text-white">
          </div>
          <div className="col-md-6 col-lg-6 bg-dark m-2 p-5 rounded-3 text-white">
          </div>
          </div>
        
        </div>
        
      </div>
      <div className="col-md-4 col-lg-4 h-100">
        <div className="col-12 p-2 bg-dark rounded-3 text-white h-100 mx-2">

        </div>
      </div>
    </div>
      
    </div>
  )
}
