import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';

// ✅ CONTEXT MUST BE OUTSIDE
const MyContext = createContext(null);

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  return (
    <MyContext.Provider value={{ isToggleSidebar, setIsToggleSidebar }}>
      <Navbar />

<div className={`main ${isToggleSidebar ? "collapsed" : ""}`}>
  <div className="sidebar sidebar-fixed">
    <Sidebar />
  </div>

  <div className="content">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Users />} />
    </Routes>
  </div>
</div>

    </MyContext.Provider>
  );
}

// ✅ EXPORTS (VERY IMPORTANT)
export default App;
export { MyContext };
