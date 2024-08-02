import React from 'react';

// Import profile images
import Friend1 from './images/Friend1.jpg';
import Friend2 from './images/Friend2.jpg';
import Friend3 from './images/Friend3.jpg';
import Friend4 from './images/Friend4.jpg';

function FriendsProgress() {
    // Data for friends including their images, habits, and progress
    const friends = [
        { name: 'Friend 1', habits: ['Morning Jog', 'Healthy Breakfast', 'Work on Project', 'Read a Book'], progress: 75, image: Friend1 },
        { name: 'Friend 2', habits: ['Drink Water', 'Attend Meetings', 'Complete Assignments', 'Cook Dinner', 'Exercise', 'Meditation', 'Family Time'], progress: 50, image: Friend2 },
        { name: 'Friend 3', habits: ['Yoga', 'Grocery Shopping'], progress: 90, image: Friend3 },
        { name: 'Friend 4', habits: ['Work on Side Hustle', 'Volunteer Work', 'Evening Walk'], progress: 65, image: Friend4 },
    ];

    // Calculate completion based on progress
    const getHabitStatus = (progress, totalHabits) => {
        const completedHabits = Math.floor((progress / 100) * totalHabits);
        return Array(totalHabits).fill(false).map((_, index) => index < completedHabits);
    };

    // Mock updates for friends
    const friendUpdates = [
        { name: 'Friend 1', message: 'Completed Morning Jog', timestamp: '2 hours ago' },
        { name: 'Friend 2', message: 'Finished Meditation', timestamp: '1 day ago' },
        { name: 'Friend 3', message: 'Achieved Yoga Milestone', timestamp: '3 days ago' },
        { name: 'Friend 4', message: 'Completed Volunteer Work', timestamp: '1 week ago' },
    ];

    return (
        <div className="flex flex-col md:flex-row w-full p-4 space-y-4 md:space-y-0 md:space-x-4 rounded-md shadow-md bg-customWhite">
            {/* Main content with friends' progress */}
            <div className="flex flex-col w-full md:w-3/4 space-y-4">
                {friends.map((friend, index) => {
                    const habitsStatus = getHabitStatus(friend.progress, friend.habits.length);
                    return (
                        <div key={index} className="flex flex-col md:flex-row items-start p-4 bg-gray-100 rounded-md hover:shadow-md hover:bg-gray-200 cursor-pointer transition-all">
                            {/* Friend's profile picture and details */}
                            <div className="flex items-center w-full md:w-2/3 mb-4 md:mb-0">
                                <img src={friend.image} alt={`Profile of ${friend.name}`} className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                                <div className="w-full">
                                    <p className="font-bold">{friend.name}</p>
                                    <p className="mb-2">Today's Progress: {friend.progress}%</p>
                                    <div className="w-full bg-white border border-customOrange rounded-full h-2.5 mb-2">
                                        <div className="bg-customGreen h-2.5 rounded-full" style={{ width: `${friend.progress}%` }}></div>
                                    </div>
                                    {/* Display habits in a flex container */}
                                    <div className="flex flex-wrap">
                                        {friend.habits.map((habit, i) => (
                                            <span
                                                key={i}
                                                className={`px-2 py-1 border-2 ${habitsStatus[i] ? 'border-customGreen bg-customGreen text-customWhite' : 'border-customOrange bg-customWhite text-customBlack'} rounded-full mr-2 mb-1`}
                                            >
                                                {habit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Sidebar with friends' updates */}
            <div className="w-full md:w-1/4 p-4 bg-customWhite rounded-md shadow-md">
                <h3 className="font-bold mb-4">Friends' Updates</h3>
                {friendUpdates.map((update, index) => (
                    <div key={index} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-md hover:shadow-sm hover:bg-gray-200 cursor-pointer transition-all">
                        <div className="flex items-center">
                            <img src={friends.find(friend => friend.name === update.name).image} alt={`Profile of ${update.name}`} className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
                            <div>
                                <p className="font-bold text-sm">{update.name}</p>
                                <p className="text-xs">{update.message}</p>
                                <p className="text-xs text-gray-500">{update.timestamp}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FriendsProgress;
