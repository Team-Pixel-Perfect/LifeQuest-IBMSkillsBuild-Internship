import React from 'react';


const ProfilePage = () => {
    return (

        <main className=" w-4/5 p-8 bg-customWhite text-customBlack h-full w-full">
          <form>
            <section className="mb-8">
              <h3 className="text-2xl mb-4">Profile</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="block mb-2">First Name</label>
                  <input type="text" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full " />
                </div>
                <div className="form-group">
                  <label className="block mb-2">Last Name</label>
                  <input type="text" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full" />
                </div>
                <div className="form-group">
                  <label className="block mb-2">Username</label>
                  <input type="text" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full" />
                </div>
                <div className="form-group">
                  <label className="block mb-2">E-Mail</label>
                  <input type="email" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full" />
                </div>
                <div className="form-group">
                  <label className="block mb-2">Password</label>
                  <input type="password" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full" />
                </div>
                <div className="form-group">
                  <label className="block mb-2">Connected Account</label>
                  <input type="text" className="w-full p-2 bg-customWhite border border-gray-600 rounded-full" />
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl mb-4">General</h3>
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
          </form>
        </main>
      )
};

export default ProfilePage;
