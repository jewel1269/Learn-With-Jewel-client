import Image from "next/image";
import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex space-x-6">
      {/* Left Section */}
      <div className="w-1/3 flex flex-col items-center">
        {/* Profile Image */}
        <Image
          fill
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        {/* Name & Role */}
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          Jeremy Rose
        </h1>
        <p className="text-blue-500">Product Designer</p>
        {/* Rankings */}
        <div className="mt-2 flex items-center space-x-1">
          <p className="text-gray-600 text-sm">8.6</p>
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
            <span className="text-gray-300">&#9733;</span>
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
            Send Message
          </button>
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md">
            Contacts
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3">
        {/* Work Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Work</h2>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-800">Spotify New York</p>
              <span className="px-2 py-1 text-sm bg-blue-100 text-blue-500 rounded-md">
                Primary
              </span>
            </div>
            <p className="text-sm text-gray-500">
              170 William Street, New York, NY
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-800">Metropolitan Museum</p>
              <span className="px-2 py-1 text-sm bg-gray-100 text-gray-500 rounded-md">
                Secondary
              </span>
            </div>
            <p className="text-sm text-gray-500">
              525 E 68th Street, New York, NY
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Contact Information
          </h2>
          <div className="mt-2 space-y-2">
            <p className="text-sm">
              <span className="font-semibold text-gray-600">Phone:</span> +1 123
              456 7890
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-600">Address:</span> 525
              E 68th Street, New York, NY 10651
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-600">E-mail:</span>{" "}
              hello@jeremyrose.com
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-600">Site:</span>{" "}
              www.jeremyrose.com
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Basic Information
          </h2>
          <div className="mt-2 space-y-2">
            <p className="text-sm">
              <span className="font-semibold text-gray-600">Birthday:</span>{" "}
              June 5, 1992
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-600">Gender:</span> Male
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
