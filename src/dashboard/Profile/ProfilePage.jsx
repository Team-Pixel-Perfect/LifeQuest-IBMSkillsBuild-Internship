import React from 'react';
import UserProfile from './UserProfile.jsx';
import photo from './images/photo.jpg';

const userInfo = {
  profilePicture: photo,
  details: {
    fullName: "firstname lastname",
    email: " lifequest@gmail.com",
    username: "realusername",
    password: 1234
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <UserProfile user={userInfo} />
      </div>
    </div>
  );
}

export default App;
