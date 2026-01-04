import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// ICON IMPORTS (MISSING)
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";


function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (index, hasSubmenu = false) => {
    setActiveTab(index);
    if (hasSubmenu) {
      setOpenSubmenu(prev => (prev === index ? null : index));
    } else {
      setOpenSubmenu(null);
    }
  };

  return (
    <>
      <ul className="w-100 mt-5" >

        <li>
          <Link to="/dashboard" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => handleMenuClick(0)}
            >
              <span className="icon"><MdOutlineDashboard /></span>
              Dashboard
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>

      

        <li>
          <Link to="/orders" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Orders
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>


          <li>
          <Button
            className={`w-100 ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleMenuClick(1, true)}
          >
            <span className="icon"><FaProductHunt /></span>
            Products
            <span className={`arrow ${openSubmenu === 1 ? 'rotate' : ''}`}>
              <IoIosArrowForward />
            </span>
          </Button>

          <div className={`submenuwrapper ${openSubmenu === 1 ? 'colapse' : 'colapsed'}`}>
            <ul className="submenu">
              <li><Link to="#">Product List</Link></li>
              <li><Link to="#">Product View</Link></li>
              <li><Link to="#">Product Upload</Link></li>
            </ul>
          </div>
        </li>


         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
         <li>
          <Link to="#" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 10 ? 'active' : ''}`}
              onClick={() => handleMenuClick(2)}
            >
              <span className="icon"><IoCartOutline /></span>
              Custom
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>
        
         

        <hr />

        <div className="logoutwrapper">
          <div className="logoutmain">
            <Button className="w-75 logoutbtn" variant="contained">
              <IoMdLogOut /> Logout
            </Button>
          </div>
        </div>

      </ul>
    </>
  );
}

export default Sidebar;
