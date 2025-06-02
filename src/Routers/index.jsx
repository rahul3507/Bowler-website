import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import { PublicRoute } from './route-guards';
import AuthLayout from '../layouts/AuthLayout';
import SplashScreen from '../Pages/SplashScreen/SplashScreen';
import { SelectYourRole } from '@/Pages/SelectYourRole/SelectYourRole';
import SignUp from '@/Pages/Authentication/SignUp';
import SignIn from '@/Pages/Authentication/SignIn';
import BackgroundPage from '../Pages/BackgroundPage';

import Dashboard from '@/Pages/Dashboard/Dashboard';
import HomePage from '@/Pages/Homepage/HomePage';

const AppRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

  return (
    <Suspense fallback={<BackgroundPage/>}>
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicRoute/>}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<BackgroundPage />}>
              <Route index element={<SplashScreen />} />
              <Route path="selectyourrole" element={<SelectYourRole />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="dashboard" element={<Dashboard/>}>
                <Route path="home" element={<HomePage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes;