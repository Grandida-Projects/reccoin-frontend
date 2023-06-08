// import React from 'react';
import { Route, Routes } from 'react-router-dom';

import settingsWhiteIcon from '../../assets/settingsWhite.svg'
import settingsGreenIcon from '../../assets/settingsGreen.svg'
import companyIcon from '../../assets/company-ic.svg'

import CompanyDashboard from "../../pages/CompanyDashboard.jsx";
import CompanyDashboardSettings from "../../pages/company_dashboard/DashboardCompanySettings.jsx";
import notificationIcon from "../../assets/notification-ic.svg";

const routes = [
    {
        name: 'Companies',
        path: '/company-dashboard',
        white_icon: companyIcon,
        green_icon: companyIcon,
        id: 'dashboard-companies',
        component: CompanyDashboard
    },
    {
        name: 'Company Settings',
        path: '/company-dashboard/settings',
        component: CompanyDashboardSettings,
        white_icon: settingsWhiteIcon,
        green_icon: settingsGreenIcon,
        id: "company-settings",
    },
    {
        name: "Notifications",
        path: '',
        component: '',
        white_icon: notificationIcon,
        green_icon: notificationIcon,
        id: 'dashboard-notifications',
    },
];

const renderRoutes = (routes, basePath = '') => {
    return routes.map((route, index) => {
        const { group, path, component: Component } = route;
        const fullPath = group ? `${basePath}${group}${path || ''}` : `${basePath}${path || ''}`;

        if (!Component) {
            return null; // Skip rendering if component is missing
        }

        return <Route key={index} path={fullPath} element={<Component />} />;
    });
};

const CompanyDashboardRoutes = () => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export { Routes, CompanyDashboardRoutes };
