import React, { useState } from 'react';

function UserProfile({ user }) {
  const [userInfo, setUserInfo] = useState(user);

  const handleUpdate = (updatedDetails) => {
    setUserInfo((prevState) => ({
      ...prevState,
      details: { ...prevState.details, ...updatedDetails }
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <ProfileSidebar 
        name={userInfo.details.username} 
        profilePicture={userInfo.profilePicture}
      />
      <div className="lg:w-2/3 lg:ml-6 mt-6 lg:mt-0">
        <UserDetails details={userInfo.details} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}

function ProfileSidebar({ name, profilePicture }) {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-lg text-center">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src={profilePicture}
          alt="Profile"
        />
        <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      </div>
    </div>
  );
}

function UserDetails({ details, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [formDetails, setFormDetails] = useState(details);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formDetails);
    setEditMode(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-customBlack">User Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(formDetails).map(([key, value], index) => (
            <div key={index} className="flex items-center justify-between">
              <label className="text-gray-600" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                className="ml-4 p-2 bg-customWhite border border-gray-600 rounded-full"
                id={key}
                name={key}
                type="text"
                value={value}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="mt-6 bg-customOrange text-white px-4 py-2 rounded">Save</button>
        </form>
      ) : (
        <div className="space-y-4">
          {Object.entries(details).map(([key, value], index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span>{((key==='password') ? '********' : value)}</span>
            </div>
          ))}
          <button className="mt-6 bg-customGreen text-white px-4 py-2 rounded" onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}

    <section>
              <h3 className="text-xl my-4">General</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="form-group">
                  <label className="block mb-2">Start of the week</label>
                  <select className="w-full p-2 bg-customWhite border border-gray-600 rounded-full">
                    <option>Monday</option>
                    <option>Sunday</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="block mb-2">Time Format</label>
                  <select className="w-full p-2 bg-customWhite border border-gray-600 rounded-full">
                    <option>12-hour</option>
                    <option>24-hour</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="block mb-2">Notifications</label>
                  <select className="w-full p-2 bg-customWhite border border-gray-600 rounded-full">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>
            </section>
    </div>
  );
}

export default UserProfile;
