import React from 'react'
import gif from '../assests/images/share.gif'

export default function DashboardItems(props) {
  return (
    <>
          <div className="col-md-6 col-lg-6 m-2 p-2  d-flex flex-column align-items-center justify-content-around gap-auto  rounded-3 text-white" style={{backgroundImage:`linear-gradient(to right, ${props.color?.[0]}, ${props.color[1]})`
        }}>
            <div className="upper w-100 d-flex justify-content-between align-items-center">
                <div className="one d-flex flex-column w-50">
                    <h4>total user</h4>
                    <h1>211</h1>
                </div>
                <div className="icon w-25">
                    <img src={gif} className="w-100" alt="" />
                </div>
            </div>


            <div className="lower w-100 d-flex justify-content-between align-items-center">
                <div className="left">
                    <div className="button">
                        <button className="btn btn-light btn-sm">view all</button>
                    </div>
                </div>
                <div className="right">
                    <h6>+5% since last month</h6>
                    </div>
            </div>
          
          </div>
    </>
  )
}
