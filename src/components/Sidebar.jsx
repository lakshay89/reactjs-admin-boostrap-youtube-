import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
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
    <div className="sidebar">
      <ul className="w-100">

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
              <li><Link to="#" onClick={() => setActiveTab(17)}>Product List</Link></li>
              <li><Link to="#" onClick={() => setActiveTab(18)}>Product View</Link></li>
              <li><Link to="#" onClick={() => setActiveTab(19)}>Product Upload</Link></li>
            </ul>
          </div>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleMenuClick(2)}
          >
            <span className="icon"><IoCartOutline /></span>
            Orders
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleMenuClick(3)}
          >
            <span className="icon"><RiMessage2Line /></span>
            Message
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 4 ? 'active' : ''}`}
            onClick={() => handleMenuClick(4)}
          >
            <span className="icon"><FaRegBell /></span>
            Notification
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>


            <li>
          <Link to="/dashboard" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 5 ? 'active' : ''}`}
              onClick={() => handleMenuClick(5)}
            >
              <span className="icon"><MdOutlineDashboard /></span>
              Dashboard
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 6 ? 'active' : ''}`}
            onClick={() => handleMenuClick(6, true)}
          >
            <span className="icon"><FaProductHunt /></span>
            Products
            <span className={`arrow ${openSubmenu === 7 ? 'rotate' : ''}`}>
              <IoIosArrowForward />
            </span>
          </Button>

          <div className={`submenuwrapper ${openSubmenu === 7 ? 'colapse' : 'colapsed'}`}>
            <ul className="submenu">
              <li><Link to="#" onClick={() => setActiveTab(8)}>Product List</Link></li>
              <li><Link to="#" onClick={() => setActiveTab(9)}>Product View</Link></li>
              <li><Link to="#" onClick={() => setActiveTab(10)}>Product Upload</Link></li>
            </ul>
          </div>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 11 ? 'active' : ''}`}
            onClick={() => handleMenuClick(12)}
          >
            <span className="icon"><IoCartOutline /></span>
            Orders
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 13 ? 'active' : ''}`}
            onClick={() => handleMenuClick(13)}
          >
            <span className="icon"><RiMessage2Line /></span>
            Message
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>

        <li>
          <Button
            className={`w-100 ${activeTab === 14 ? 'active' : ''}`}
            onClick={() => handleMenuClick(14)}
          >
            <span className="icon"><FaRegBell /></span>
            Notification
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>


            <li>
          <Link to="/dashboard" className="w-100 text-decoration-none">
            <Button
              className={`w-100 ${activeTab === 15 ? 'active' : ''}`}
              onClick={() => handleMenuClick(15)}
            >
              <span className="icon"><MdOutlineDashboard /></span>
              Dashboard
              <span className="arrow"><IoIosArrowForward /></span>
            </Button>
          </Link>
        </li>

        <Link to="/orders" className="w-100 text-decoration-none">
        <li>
          <Button
            className={`w-100 ${activeTab === 16 ? 'active' : ''}`}
            onClick={() => handleMenuClick(16)}
          >
            <span className="icon"><IoCartOutline /></span>
            Orders
            <span className="arrow"><IoIosArrowForward /></span>
          </Button>
        </li>
        </Link>

      

        <hr />
    <div className="logoutwrapper ">
        <div className="logoutmain w-100 h-100  d-flex justify-content-center align-items-center">
            <Button className="w-75 logoutbtn" variant="contained" >
                <IoMdLogOut /> Logout
            </Button>
        </div>
    </div>

      
        

        

      </ul>
    </div>
  );
}
export default Sidebar;