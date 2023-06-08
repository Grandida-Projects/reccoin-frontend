// import React from 'react';
import { Route, Routes } from 'react-router-dom';

import settingsWhiteIcon from '../../assets/settingsWhite.svg'
import settingsGreenIcon from '../../assets/settingsGreen.svg'
import companyIcon from '../../assets/company-ic.svg'
import chatWhiteIcon from '../../assets/chatWhite.svg'
import chatGreenIcon from '../../assets/chatGreen.svg'
import offersWhiteIcon from '../../assets/offersWhite.svg'
import offersGreenIcon from '../../assets/offersGreen.svg'
import notificationIcon from '../../assets/notification-ic.svg'
import historyWhiteIcon from '../../assets/historyWhite.svg'
import historyGreenIcon from '../../assets/historyGreen.svg'
import dashboardIcon from '../../assets/dashboard.svg'

import UserDashboard from '../../pages/UserDashboard';
import DashboardUserSettings from "../../pages/user_dashboard/DashboardUserSettings.jsx";
import HistoryPage from "../../pages/user_dashboard/HistoryPage.jsx";
import OffersPage from "../../pages/user_dashboard/OffersPage.jsx";

const routes = [
    {
        name: 'Dashboard',
        path: '/user-dashboard',
        white_icon: dashboardIcon,
        green_icon: dashboardIcon,
        id: "dashboard-deposit",
        component: UserDashboard
    },
    {
        name: "Companies",
        path: '',
        white_icon: companyIcon,
        green_icon: companyIcon,
        id: 'dashboard-companies',
        component: ''
    },
    {
        name: "Notifications",
        path: '',
        component: '',
        white_icon: notificationIcon,
        green_icon: notificationIcon,
        id: 'dashboard-notifications',
    },
    {
        name: 'Settings',
        path: '/user-dashboard/settings',
        component: DashboardUserSettings,
        white_icon: settingsWhiteIcon,
        green_icon: settingsGreenIcon,
        id: "dashboard-settings",
    },
    {
        name: 'History',
        path: '/user-dashboard/history',
        component: HistoryPage,
        white_icon: historyWhiteIcon,
        green_icon: historyGreenIcon,
        id: "dashboard-history",
    },
    {
        name: 'Offers',
        path: '/user-dashboard/offers',
        component: OffersPage,
        white_icon: offersWhiteIcon,
        green_icon: offersGreenIcon,
        id: "dashboard-offers",
    },
    {
        name: "Chat",
        path: '',
        white_icon: chatWhiteIcon,
        green_icon: chatGreenIcon,
        id: 'dashboard-companies',
        component: ''
    },
];

const renderRoutes = (routes, basePath = '') => {
    return routes.map((route, index) => {
        const { group, path, component: Component } = route;
        const prefixedPath = group ? `${group}${path || ''}` : path || '';

        const fullPath = `${basePath}/${prefixedPath}`;

        if (!Component) {
            return null; // Skip rendering if component is missing
        }

        return <Route key={index} path={fullPath} element={<Component />} />;
    });
};

const UserDashboardRoutes = () => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export { Routes, UserDashboardRoutes };
