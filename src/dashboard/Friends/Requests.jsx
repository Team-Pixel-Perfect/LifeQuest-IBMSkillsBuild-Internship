import React from 'react';

// Import profile images
import Friend1 from './images/Friend1.jpg';
import Friend2 from './images/Friend2.jpg';
import Friend3 from './images/Friend3.jpg';
import Friend4 from './images/Friend4.jpg';

function Requests() {
    // Data for friend requests
    const requests = [
        { name: 'Jordan Thompson', message: 'has started following you', status: 'Jordan is your friend now', image: Friend1, date: 'Today' },
        { name: 'Kelly Brown', message: 'has started following you', action: 'Add friend', image: Friend2, date: 'Today' },
        { name: 'Megan Green', message: 'has started following you', action: 'Add friend', image: Friend3, date: 'Today' },
        { name: 'Louis Dawson', message: 'has started following you', action: 'Add friend', image: Friend1, date: 'August 1' },
        { name: 'Missi Black', message: 'has started following you', action: 'Add friend', image: Friend4, date: 'August 1' },
    ];

    // Group requests by date
    const groupedRequests = requests.reduce((acc, request) => {
        if (!acc[request.date]) {
            acc[request.date] = [];
        }
        acc[request.date].push(request);
        return acc;
    }, {});

    return (
        <div className="p-4 bg-customWhite rounded-md shadow-md">
            {/* List of friend requests */}
            {Object.keys(groupedRequests).map((date, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-600 mb-2">{date}</h3>
                    {groupedRequests[date].map((request, index) => (
                        <div key={index} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-md hover:shadow-sm hover:bg-gray-200 transition-all">
                            <div className="flex items-center">
                                <img src={request.image} alt={`Profile of ${request.name}`} className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-sm">{request.name}</p>
                                    <p className="text-xs">{request.message}</p>
                                    {request.status ? (
                                        <p className="text-xs text-green-500">{request.status}</p>
                                    ) : (
                                        <button className="text-xs text-customOrange hover:text-customGreen transition-all">{request.action}</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Requests;
