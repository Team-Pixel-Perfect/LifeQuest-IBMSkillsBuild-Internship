// Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChartLine, FaUsers, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic here
        navigate('/signin');
    };

    return (
        <div className="h-screen bg-customBlack text-customWhite w-64 flex flex-col p-4">
            <div className="text-2xl font-bold mb-10">LifeQuest</div>
            <nav className="flex flex-col gap-4">
                <Link to="habits" className="flex items-center gap-2 p-2 hover:bg-customWhite hover:text-customBlack rounded-md">
                    <FaHome />
                    <span>Habits</span>
                </Link>
                <Link to="stats" className="flex items-center gap-2 p-2 hover:bg-customWhite hover:text-customBlack rounded-md">
                    <FaChartLine />
                    <span>Stats</span>
                </Link>
                <Link to="friends" className="flex items-center gap-2 p-2 hover:bg-customWhite hover:text-customBlack rounded-md">
                    <FaUsers />
                    <span>Friends</span>
                </Link>
                <Link to="profile" className="flex items-center gap-2 p-2 hover:bg-customWhite hover:text-customBlack rounded-md">
                    <FaUser />
                    <span>Profile</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 p-2 hover:bg-customWhite hover:text-customBlack rounded-md mt-auto">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
