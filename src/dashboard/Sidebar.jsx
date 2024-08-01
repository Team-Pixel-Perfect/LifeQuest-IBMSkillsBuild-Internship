import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaChartLine, FaUsers, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [selected, setSelected] = useState('')
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic here
        navigate('/signin');
    };

    return (
        <div className="h-screen bg-customBlack text-customWhite w-64 flex flex-col p-4 fixed">
            <div className="text-5xl font-bold mb-10">Life<span className='text-customGreen'>Quest</span></div>
            <nav className="flex flex-col gap-4">
                <Link to="habits" className="flex items-center gap-2 p-4 hover:bg-customWhite hover:text-customBlack rounded-full">
                    <FaHome />
                    <span className='text-xl'>Habits</span>
                </Link>
                <Link to="stats" className="flex items-center gap-2 p-4 hover:bg-customWhite hover:text-customBlack rounded-full">
                    <FaChartLine />
                    <span className='text-xl'>Stats</span>
                </Link>
                <Link to="friends" className="flex items-center gap-2 p-4 hover:bg-customWhite hover:text-customBlack rounded-full">
                    <FaUsers />
                    <span className='text-xl'>Friends</span>
                </Link>
                <Link to="profile" className="flex items-center gap-2 p-4 hover:bg-customWhite hover:text-customBlack rounded-full">
                    <FaUser />
                    <span className='text-xl'>Profile</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 p-4    hover:bg-customWhite hover:text-customBlack rounded-full mt-auto">
                    <FaSignOutAlt />
                    <span className='text-xl'>Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
