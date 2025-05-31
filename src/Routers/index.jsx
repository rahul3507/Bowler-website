import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { PublicRoute } from './route-guards';
import AuthLayout from '../layouts/AuthLayout';




const AppRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


  return (
    <Suspense fallback={<HomePage/>}>
      <Routes location={location} key={location.pathname}>
        <Route  element={<PublicRoute/>} />
            <Route  element={<AuthLayout />} >
              <Route path="/" element={<HomePage />} />

            </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes;