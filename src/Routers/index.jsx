/** @format */

import React, { Suspense, useEffect, lazy } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";

import { PublicRoute } from "./route-guards";
import AuthLayout from "../layouts/AuthLayout";
import BackgroundPage from "../Pages/BackgroundPage";

// Keep critical components as regular imports (used immediately)
import SplashScreen from "../Pages/SplashScreen/SplashScreen";
import { SelectYourRole } from "@/Pages/SelectYourRole/SelectYourRole";

// Dynamic imports for route components

const SignUp = lazy(() => import("@/Pages/Authentication/SignUp"));
const SignIn = lazy(() => import("@/Pages/Authentication/SignIn"));
const Payment = lazy(() => import("@/Pages/Payment/Payment"));

// Dashboard and main pages
const Dashboard = lazy(() => import("@/Pages/Dashboard/Dashboard"));
const HomePage = lazy(() => import("@/Pages/Homepage/HomePage"));
const Players = lazy(() => import("@/Pages/Homepage/Players"));
const NewsFeed = lazy(() => import("@/Pages/Homepage/NewsFeed"));

// Feature pages
const MyTeams = lazy(() => import("@/Pages/MyTeams/MyTeams"));
const Analytics = lazy(() => import("@/Pages/Analytics/Analytics"));
const Tournaments = lazy(() => import("@/Pages/Tournaments/Tournaments"));
const TournamentsList = lazy(() =>
  import("@/Pages/Tournaments/TournamentList")
);
const TournamentDetails = lazy(() =>
  import("@/Pages/Tournaments/TournamentDetails")
);
const Messages = lazy(() => import("@/Pages/Messages/Messages"));

// Profile pages
const Profile = lazy(() => import("@/Pages/Profile/Profile"));
const General = lazy(() => import("@/Pages/Profile/General"));
const BowlingStatistics = lazy(() =>
  import("@/Pages/Profile/BowlingStatistics")
);
const Privacy = lazy(() => import("@/Pages/Profile/Privacy"));
const Settings = lazy(() => import("@/Pages/Profile/Settings"));
const Media = lazy(() => import("@/Pages/Profile/Media"));

// Admin pages
const DashboardWrapper = lazy(() =>
  import("@/Admin/AdminDashboard/DashboardWrapper")
);
const Overview = lazy(() => import("@/Admin/Overview/Overview"));
const Subscription = lazy(() => import("@/Admin/Subscription/Subscription"));
const Transaction = lazy(() => import("@/Admin/Transaction/Transaction"));
const Manufacture = lazy(() => import("@/Admin/Manufacture/Manufacture"));
const BowlingCenter = lazy(() => import("@/Admin/BowlingCenter/BowlingCenter"));
const ProPlayer = lazy(() => import("@/Admin/ProPlayer/ProPlayer"));
const AmateurPlayer = lazy(() => import("@/Admin/AmateurPlayer/AmateurPlayer"));
const Notifications = lazy(() => import("@/Admin/Notifications/Notifications"));

// Loading component for better UX
const RouteLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<BackgroundPage />}>
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<BackgroundPage />}>
              <Route index element={<SplashScreen />} />

              {/* Auth routes with individual suspense for better loading */}
              <Route
                path="selectyourrole"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <SelectYourRole />
                  </Suspense>
                }
              />

              <Route
                path="signup"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <SignUp />
                  </Suspense>
                }
              />

              <Route
                path="payment"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <Payment />
                  </Suspense>
                }
              />

              <Route
                path="signin"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <SignIn />
                  </Suspense>
                }
              />

              {/* Dashboard routes */}
              <Route
                path="dashboard"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <Dashboard />
                  </Suspense>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <HomePage />
                    </Suspense>
                  }
                />

                <Route
                  path="players"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Players />
                    </Suspense>
                  }
                />

                <Route
                  path="newsfeed"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <NewsFeed />
                    </Suspense>
                  }
                />

                <Route
                  path="myteams"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <MyTeams />
                    </Suspense>
                  }
                />

                <Route
                  path="analytics"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Analytics />
                    </Suspense>
                  }
                />

                <Route
                  path="tournaments"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Tournaments />
                    </Suspense>
                  }
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <TournamentsList />
                      </Suspense>
                    }
                  />

                  <Route
                    path="tournament-details"
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <TournamentDetails />
                      </Suspense>
                    }
                  />
                </Route>

                <Route
                  path="messages"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Messages />
                    </Suspense>
                  }
                />

                <Route
                  path="profile"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Profile />
                    </Suspense>
                  }
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <General />
                      </Suspense>
                    }
                  />

                  <Route
                    path="bowlingstatistics"
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <BowlingStatistics />
                      </Suspense>
                    }
                  />

                  <Route
                    path="privacy"
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <Privacy />
                      </Suspense>
                    }
                  />

                  <Route
                    path="media"
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <Media />
                      </Suspense>
                    }
                  />

                  <Route
                    path="settings"
                    element={
                      <Suspense fallback={<RouteLoader />}>
                        <Settings />
                      </Suspense>
                    }
                  />
                </Route>
              </Route>

              {/* Admin routes */}
              <Route
                path="admin-dashboard"
                element={
                  <Suspense fallback={<RouteLoader />}>
                    <DashboardWrapper />
                  </Suspense>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Overview />
                    </Suspense>
                  }
                />

                <Route
                  path="notifications"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Notifications />
                    </Suspense>
                  }
                />

                <Route
                  path="amateur-player"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <AmateurPlayer />
                    </Suspense>
                  }
                />

                <Route
                  path="pro-player"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <ProPlayer />
                    </Suspense>
                  }
                />

                <Route
                  path="bowling-benter"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <BowlingCenter />
                    </Suspense>
                  }
                />

                <Route
                  path="manufacture"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Manufacture />
                    </Suspense>
                  }
                />

                <Route
                  path="transaction"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Transaction />
                    </Suspense>
                  }
                />

                <Route
                  path="subscription"
                  element={
                    <Suspense fallback={<RouteLoader />}>
                      <Subscription />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
