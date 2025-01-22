"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Image from "next/image";
import {
  FaCog,
  FaSearch,
  FaSignOutAlt,
  FaTachometerAlt,
  FaTicketAlt,
  FaUserAlt,
} from "react-icons/fa";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfileCard = () => {
  const glucoseData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Glucose Level",
        data: [100, 120, 165, 130, 140, 155, 145],
        borderColor: "#6B21A8",
        backgroundColor: "rgba(107, 33, 168, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const weightData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Weight",
        data: [188, 190, 194, 192, 188, 190, 194],
        backgroundColor: "#6B21A8",
        barThickness: 12,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 flex flex-col lg:flex-row gap-4">
      {/* Left Side - Profile Info */}
      <div className="bg-white w-full lg:w-1/4 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <Image
            fill
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Sara Johansen</h3>
            <p className="text-sm text-gray-500">36 years old, Female</p>
          </div>
        </div>
        <aside className="flex flex-col w-full lg:w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <a
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                href="#"
              >
                <FaTachometerAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Dashboard</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaUserAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Accounts</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaTicketAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Tickets</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaCog className="w-5 h-5" />
                <span className="mx-4 font-medium">Settings</span>
              </a>
              <hr className="my-6 border-gray-200 dark:border-gray-600" />
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaSignOutAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Logout</span>
              </a>
            </nav>
          </div>
        </aside>
      </div>

      {/* Right Side - Charts and Overview */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 font-bold mb-4">Glucose</h3>
            <Line data={glucoseData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 font-bold mb-4">Weight</h3>
            <Bar data={weightData} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Diagnosis</h4>
              <p className="text-gray-600 text-sm">
                Patient reports she has never had her teeth cleaned and is
                anxious about great dental work.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 mb-2">Symptoms</h4>
              <p className="text-gray-600 text-sm">
                Patient reports she has never had her teeth cleaned and is
                anxious about great dental work.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h4 className="font-bold text-gray-800 mb-4">
            Upcoming Appointments
          </h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <strong>Justin Olson</strong> - Orthodontics - Aug 21, 2018, 10:00
              am
            </li>
            <li>
              <strong>Franklin Johnson</strong> - Surgeon - Aug 21, 2018, 10:30
              am
            </li>
            <li>
              <strong>Curtis Milner</strong> - Dentist - Aug 21, 2018, 11:00 am
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
