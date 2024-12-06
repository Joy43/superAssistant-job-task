import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from '../Home/Navbar/Navbar';

function Mainlayout() {
  return (
    <div>
      {/* Render Navbar */}
      <Navbar />

      {/* Placeholder for child routes */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
