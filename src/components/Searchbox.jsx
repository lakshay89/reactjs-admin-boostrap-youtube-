import React from 'react';
import { IoSearch } from "react-icons/io5";


export default function Searchbox() {
  return (
    <div className="searchbox position-relative d-flex align-items-center px-2">
        <IoSearch />
        <input type="text" className="form-control" placeholder="Search..." />
    </div>
  )
}
