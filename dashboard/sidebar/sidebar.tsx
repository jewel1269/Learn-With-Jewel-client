import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { SiConcourse } from "react-icons/si";


interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar Section */}
      <div className="w-80">
        <aside className="flex flex-col border-2 border-gray-700 rounded-2xl min-h-screen h-screen px-4 py-8 overflow-y-auto dark:bg-gray-900">
          {/* Logo Section */}
          <a href="#" className="mx-auto text-center">
            <h1 className="text-xl font-bold text-green-500 dark:text-white">
              Learn With Jewel
            </h1>
          </a>

        

          {/* Profile Section */}
          <div className="flex flex-col items-center mt-6 -mx-2">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              Image
            </div>
            <h4 className="mx-2 mt-2 text-xl font-medium text-red-500 dark:text-gray-200">
              Jewel Mia
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              Admin
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Profile Link */}
              <Link
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
                href="/profile"
              >
                <CgProfile className="w-6 h-6 ml-5" />
                <span className="mx-4 font-medium">Profile</span>
              </Link>

              {/* My Course Link */}
              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
                href="/my-courses"
              >
                <SiConcourse className="w-6 h-6 ml-5" />
                <span className="mx-4 font-medium">My Course</span>
              </Link>

              {/* Settings Link */}
              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
                href="/settings"
              >
                <IoSettingsSharp className="w-6 h-6 ml-5" />
                <span className="mx-4 font-medium">Settings</span>
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      {/* Main Content Section */}
      <div className="flex-1  dark:bg-gray-800 p-6">{children}</div>
    </div>
  );
};

export default Sidebar;
