import React from 'react';
import { Route, Routes } from 'react-router-dom';

import settingsWhiteIcon from '../../assets/settingsWhite.svg'
import settingsGreenIcon from '../../assets/settingsGreen.svg'
import dashboardWhiteIcon from '../../assets/dashboardWhite.svg'
import dashboardGreenIcon from '../../assets/dashboardGreen.svg'

import CompanyDashboard from "../../pages/company_dashboard/CompanyDashboard.jsx";
import CompanyDashboardSettings from "../../pages/company_dashboard/DashboardCompanySettings.jsx";
import notificationWhiteIcon from "../../assets/notificationWhite.svg";
import notificationGreenIcon from "../../assets/notificationGreen.svg";
import Notifications from '../../pages/company_dashboard/Notifications';

const routes = [
    {
        name: 'Dashboard',
        path: '/company-dashboard',
        white_icon: dashboardWhiteIcon,
        green_icon: dashboardGreenIcon,
        id: 'dashboard-companies',
        component: CompanyDashboard
    },
    {
        name: "Notifications",
        path: '/company-dashboard/notifications',
        component: Notifications,
        white_icon: notificationWhiteIcon,
        green_icon: notificationGreenIcon,
        id: 'dashboard-notifications',
    },
    {
        name: 'Settings',
        path: '/company-dashboard/settings',
        component: CompanyDashboardSettings,
        white_icon: settingsWhiteIcon,
        green_icon: settingsGreenIcon,
        id: "company-settings",
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

export { routes, CompanyDashboardRoutes };
