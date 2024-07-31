import React from 'react'

// Import profile images
import Friend1 from './images/Friend1.jpg';
import Friend2 from './images/Friend2.jpg';
import Friend3 from './images/Friend3.jpg';
import Friend4 from './images/Friend4.jpg';

function FriendsProgress() {
    const friends = [
        { name: 'Friend 1', habits: 4, goals: 4, progress: 75, image: Friend1 },
        { name: 'Friend 2', habits: 7, goals: 2, progress: 50, image: Friend2 },
        { name: 'Friend 3', habits: 2, goals: 4, progress: 90, image: Friend3 },
        { name: 'Friend 4', habits: 3, goals: 1, progress: 65, image: Friend4 },
    ];

    // Sort friends by progress in ascending order
    const sortedFriends = [...friends].sort((a, b) => a.progress - b.progress);
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-customWhite">
            <div className="w-full md:w-3/4 p-4">
                <div className="bg-customWhite p-4 rounded-md shadow-md">
                    <input
                        type="text"
                        placeholder="Search for friends"
                        className="w-full p-2 mb-4 border rounded-md"
                    />
                    <div className="flex mb-4">
                        <button className="mr-4 border-b-4 border-customBlack">Friends</button>
                        <button className="border-b-4 border-transparent hover:border-customBlack transition-all">Requests</button>
                    </div>

                    <div>
                        {friends.map((friend, index) => (
                            <div key={index} className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-md">
                                <div className="flex items-center">
                                    <img src={friend.image} alt={friend.name} className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">{friend.name}</p>
                                        <p>{friend.habits} Habits</p>
                                        <p>Today's Progress: {friend.progress}%</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-customGreen h-2.5 rounded-full" style={{ width: `${friend.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    {[...Array(friend.goals)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 border-2 border-customOrange bg-customWhite text-customBlack rounded-full mr-2 cursor-pointer hover:bg-customOrange hover:text-customWhite"
                                        >
                                            SDG Goal
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 p-4">
                <div className="bg-customWhite p-4 rounded-md shadow-md">
                    <h3 className="font-bold mb-4">Friend's Progress</h3>
                    {sortedFriends.map((friend, index) => (
                        <div key={index} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-md">
                            <img src={friend.image} alt={friend.name} className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
                            <div>
                                <p className="font-bold text-sm">{friend.name}</p>
                                <p className="text-xs">Progress: {friend.progress}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div></div>
    )
}

export default FriendsProgress