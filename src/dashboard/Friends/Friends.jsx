import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function FriendsPage() {
    const location = useLocation();
    
    // Determine if the current location matches the `friends` path
    const isFriendsActive = location.pathname === '/dashboard/friends';
    
    return (
        <div className="flex flex-col w-full bg-customWhite p-4 space-y-4 rounded-md shadow-md">
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by name or id"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            {/* Tabs for navigation */}
            <div className="flex mb-4 space-x-12">
                <NavLink
                    to="."  // Refers to `/dashboard/friends`
                    className={({ isActive }) =>
                        `border-b-4 ${isFriendsActive ? 'border-customBlack' : 'border-transparent hover:border-customBlack'} transition-all`
                    }
                >
                    Friends
                </NavLink>
                <NavLink
                    to="requests"  // Refers to `/dashboard/friends/requests`
                    className={({ isActive }) =>
                        `border-b-4 ${isActive ? 'border-customBlack' : 'border-transparent hover:border-customBlack'} transition-all`
                    }
                >
                    Requests
                </NavLink>
            </div>
            {/* Render the nested routes */}
            <Outlet />
        </div>
    );
}

export default FriendsPage;
