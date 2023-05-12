import React from 'react'
import { Routes, Route,  Link } from "react-router-dom";
import LandingPage from '../pages/LandingPage';

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
                <React.Suspense fallback={<>Error: Fail to load Login. Reported to the Support Team</>}>
                    <LandingPage />
                </React.Suspense>
                }
            />
           <Route
                path="services"
                element={
                <React.Suspense fallback={<>Error: Fail to load Services. Reported to the Support Team</>}>
                    <Services />
                </React.Suspense>
                }
            />
            <Route
                path="mission"
                element={
                <React.Suspense fallback={<>Error: Fail to load Mission. Reported to the Support Team</>}>
                    <Mission />
                </React.Suspense>
                }
            />
            <Route
                path="pricing"
                element={
                <React.Suspense fallback={<>Error: Fail to load Pricing. Reported to the Support Team</>}>
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