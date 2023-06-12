// import { useState } from 'react'
import {Routes} from "react-router-dom";
import { MainRoutes } from './routes/index';
import { UserDashboardRoutes } from './routes/dashboard/user.jsx';
import { CompanyDashboardRoutes } from './routes/dashboard/company.jsx';


function App() {
  return (
    <>
        <MainRoutes />
        <UserDashboardRoutes />
        <CompanyDashboardRoutes />
        
    </>
  );
}

export default App;
