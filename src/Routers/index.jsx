import React, { Suspense, useEffect } from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom';

import { PublicRoute } from './route-guards';
import AuthLayout from '../layouts/AuthLayout';
import SplashScreen from '../Pages/SplashScreen/SplashScreen';
import { SelectYourRole } from '@/Pages/SelectYourRole/SelectYourRole';
import SignUp from '@/Pages/Authentication/SignUp';
import SignIn from '@/Pages/Authentication/SignIn';
import BackgroundPage from '../Pages/BackgroundPage';

import Dashboard from '@/Pages/Dashboard/Dashboard';
import HomePage from '@/Pages/Homepage/HomePage';

import MyTeams from '@/Pages/MyTeams/MyTeams';
import Analytics from '@/Pages/Analytics/Analytics';
import Tournaments from '@/Pages/Tournaments/Tournaments';
import Messages from '@/Pages/Messages/Messages';
import Profile from '@/Pages/Profile/Profile';
import General from '@/Pages/Profile/General';
import BowlingStatistics from '@/Pages/Profile/BowlingStatistics';
import Privacy from '@/Pages/Profile/Privacy';
import Settings from '@/Pages/Profile/Settings';
import Media from '@/Pages/Profile/Media';
import Players from '@/Pages/Homepage/Players';
import NewsFeed from '@/Pages/Homepage/NewsFeed';
import TournamentsList from '@/Pages/Tournaments/TournamentList';
import TournamentDetails from '@/Pages/Tournaments/TournamentDetails';
import DashboardWrapper from '@/Admin/AdminDashboard/DashboardWrapper';
import Overview from '@/Admin/Overview/Overview';
import Subscription from '@/Admin/Subscription/Subscription';
import Transaction from '@/Admin/Transaction/Transaction';
import Manufacture from '@/Admin/Manufacture/Manufacture';
import BowlingCenter from '@/Admin/BowlingCenter/BowlingCenter';
import ProPlayer from '@/Admin/ProPlayer/ProPlayer';
import AmateurPlayer from '@/Admin/AmateurPlayer/AmateurPlayer';
import Notifications from '@/Admin/Notifications/Notifications';

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
                <Route index element={<HomePage />} />
                <Route path='players' element={<Players/>}/>
                <Route path='newsfeed' element={<NewsFeed/>}/>
                
                <Route path="myteams" element={<MyTeams />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="tournaments" element={<Tournaments />} >
                  <Route index element={<TournamentsList/>} />
                  <Route path='tournament-details' element={<TournamentDetails/>}/>
                </Route>

                <Route path="messages" element={<Messages />} />
                <Route path='profile' element={<Profile />} >
                  <Route index element={<General />} />
                  <Route path='bowlingstatistics' element={<BowlingStatistics/>}/>
                  <Route path='privacy' element={<Privacy/>}/>
                  <Route path='media' element={<Media  />}/>
                  <Route path='settings' element={<Settings/>}/>
                </Route>
              </Route>
              <Route path="admin-dashboard" element={<DashboardWrapper/>}>
                <Route index element={<Overview />} />
                <Route path='notifications' element={<Notifications/>}/>
                <Route path='amateur-player' element={<AmateurPlayer />} />
                <Route path='pro-player' element={<ProPlayer />} />
                <Route path='bowling-benter' element={<BowlingCenter />} />
                <Route path='manufacture' element={<Manufacture />} />
                <Route path='transaction' element={<Transaction />} />
                <Route path='subscription' element={<Subscription />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes;