import React from 'react'
import gif from "../assests/images/profile.jpg";



const dummyData = [
  {
    id: 1,
    name: "Kids Toy Car",
    price: 499,
    email: "toycar@gmail.com",
    image: gif,
  },
  {
    id: 2,
    name: "Baby Teddy Bear",
    price: 699,
    email: "teddy@gmail.com",
    image: gif,
  },
  {
    id: 3,
    name: "Colorful Building Blocks",
    price: 899,
    email: "blocks@gmail.com",
    image: gif,
  },
  {
    id: 4,
    name: "Remote Control Car",
    price: 1299,
    email: "rccar@gmail.com",
    image: gif,
  },
  {
    id: 5,
    name: "Kids Puzzle Game",
    price: 349,
    email: "puzzle@gmail.com",
    image: gif,
  },
  {
    id: 6,
    name: "Kids Puzzle Game",
    price: 349,
    email: "puzzle@gmail.com",
    image: gif,
  },
 
  
];




export default function onebox() {
  return (
    <>
      <div className="boxone d-flex flex-column w-100">
        <h3>Top deals</h3>
        <div className=" d-flex align-items-center justify-content-between flex-column w-100">
          {dummyData.map((item) => (
            <div
              className="boxitem d-flex align-items-center justify-content-between gap-auto p-2 w-100"
              key={item.id}
            >
              <div className=" d-flex align-items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  width={25}
                  className=" rounded-5"
                />
                <div className=" d-flex align-items-start  flex-column mb-0">
                  <p style={{ fontSize: "13px", margin: "0" }}>{item.name}</p>
                  <p style={{ fontSize: "10px" , margin: "0" }}>{item.email}</p>
                </div>
              </div>
              <p style={{ fontSize: "15px" }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
