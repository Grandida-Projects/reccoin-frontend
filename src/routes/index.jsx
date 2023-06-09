import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import CompanyRegPage from '../pages/CompanyRegPage';
import WhitePaper from '../pages/WhitePaper';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Partners from '../pages/Partners';
import RecyclingCompanies from '../pages/RecyclingCompanies';
import Test from '../pages/Test';
import PlasticDepositScreen from "../pages/plastic_deposit_screen.jsx";
import PrivacyPolicy from '../pages/Privacy';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Register',
        path: '/register',
        component: CompanyRegPage
    },
    {
        name: 'White Paper',
        path: '/white-paper',
        component: WhitePaper
    },
    {
        name: 'Contact Us',
        path: '/contact-us',
        component: Contact
    },
    {
        name: 'About Us',
        path: '/about-us',
        component: AboutUs
    },
    {
        name: 'Privacy Policy',
        path: '/privacy-policy',
        component: PrivacyPolicy
    },
    {
        name: 'Partners',
        path: '/partners',
        component: Partners
    },
    {
        name: 'Plastic Deposit',
        path: '/plastic-deposit',
        component: PlasticDepositScreen
    },
    {
        name: 'Recycling Companies',
        path: '/recycling-companies',
        component: RecyclingCompanies
    },
    {
        name: 'Test',
        path: '/test',
        component: Test
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

const MainRoutes = () => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export { routes, MainRoutes };