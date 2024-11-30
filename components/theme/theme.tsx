"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Check and apply the user's preferred theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Remove the previous theme class and add the new one
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Save the new theme in localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-[#161b22] rounded-full transition hover:bg-gray-300 dark:hover:bg-[#0d1117]"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FiMoon className="text-gray-800 dark:text-gray-100 w-6 h-6" />
      ) : (
        <FiSun className="text-gray-800 dark:text-gray-100 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
