import React from 'react'
import { Routes, Route,  Link } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import FallBackPage from '../pages/FallBackPage';

const Services = React.lazy(() => import("../pages/Services"));
const Mission = React.lazy(() => import("../pages/Mission"));
const Pricing = React.lazy(() => import("../pages/Pricing"));
const NoMatch =()=>{
    return (
        <>
        URL does exist click <Link to="/">here</Link> to navigate to Home page
        </>
    )
}
const RoutesApp = ()=>{
    return(
        <Routes>
        <Route
                path="/"
                element={
                <React.Suspense fallback={<FallBackPage serviceName='Home'/>}>
                    <LandingPage />
                </React.Suspense>
                }
            />
           <Route
                path="services"
                element={
                <React.Suspense fallback={<FallBackPage serviceName='Services'/>}>
                    <Services />
                </React.Suspense>
                }
            />
            <Route
                path="mission"
                element={
                <React.Suspense fallback={<FallBackPage serviceName='Mission'/>}>
                    <Mission />
                </React.Suspense>
                }
            />
            <Route
                path="pricing"
                element={
                <React.Suspense fallback={<FallBackPage serviceName='Pricing'/>}>
                    <Pricing />
                </React.Suspense>
                }
            />
            <Route
                path="*"
                element={
                <NoMatch/>
                }
            />

       </Routes>
    )
}

export default RoutesApp;