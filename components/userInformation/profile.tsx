
import React from "react";

const ProfileCard = () => {
  return (
    <div className="min-h-screen  p-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-md px-4 py-2 text-gray-600 bg-white rounded-full shadow-md focus:outline-none"
        />
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 shadow-md mb-6">
        <h1 className="text-xl font-bold">Welcome Back, Brandon</h1>
        <h1 className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div>
          {/* Temperature */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-sm font-bold text-gray-600">Temperature</h3>
            <div className="flex items-center justify-center mt-4">
              <span className="text-4xl font-bold text-blue-500">21°C</span>
            </div>
          </div>

          {/* Door Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-sm font-bold text-gray-600">Front Door</h3>
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg">
                Lock
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-sm font-bold text-gray-600">Back Door</h3>
              <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg">
                Lock
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-sm font-bold text-gray-600">Statistics</h3>
            <div className="mt-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <h1 className="text-lg font-bold text-blue-500">50%</h1>
              </div>
              <h1 className="text-center text-sm text-gray-500 mt-2">
                Electricity
              </h1>
            </div>
          </div>

          {/* Devices */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-4">My Devices</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h1 className="text-sm font-bold text-gray-600">
                  Air Conditioning
                </h1>
                <button className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg">
                  On
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-sm font-bold text-gray-600">Smart TV</p>
                <button className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg">
                  Off
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Rooms */}
          <h3 className="text-sm font-bold text-gray-600 mb-4">My Rooms</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Living Room", "Bedroom", "Kitchen"].map((room) => (
              <button
                key={room}
                className="py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-lg shadow-md"
              >
                {room}
              </button>
            ))}
          </div>

          {/* Light Intensity */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-sm font-bold text-gray-600">Light Intensity</h3>
            <div className="mt-4 text-center">
              <h1 className="text-lg font-bold text-blue-500">76%</h1>
              <div className="flex items-center justify-center mt-4">
                <button className="w-8 h-8 bg-gray-200 rounded-full text-gray-600">
                  -
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-full text-gray-600">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
