import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Users from './components/Users';

function App() {
  return (
    <>
      <Navbar />

      <div className="main d-flex w-100">
            <div className="sidebar-section ">
              <Sidebar />
            </div>

            <div className="content ">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Users />} />
              </Routes>
            </div>
      </div>

      
    </>
  );
}

export default App;
