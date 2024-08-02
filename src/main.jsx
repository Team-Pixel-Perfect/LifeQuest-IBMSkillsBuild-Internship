import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import SigninPage from './signin/page.jsx';
import SignupPage from './signup/page.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import HabitsPage from './dashboard/Habits/Habits.jsx';
import StatsPage from './dashboard/Stats/Stats.jsx';
import FriendsPage from './dashboard/Friends/Friends.jsx';
import FriendsProgress from './dashboard/Friends/FriendsProgress.jsx'; // Ensure this import is correct
import Requests from './dashboard/Friends/Requests.jsx';
import ProfilePage from './dashboard/Profile/ProfilePage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/signin', element: <SigninPage /> },
      { path: '/signup', element: <SignupPage /> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          { path: 'habits', element: <HabitsPage /> },
          { path: 'stats', element: <StatsPage /> },
          {
            path: 'friends',
            element: <FriendsPage />,
            children: [
              { index: true, element: <FriendsProgress /> }, // Default route
              { path: 'requests', element: <Requests /> },
            ],
          },
          { path: 'profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
