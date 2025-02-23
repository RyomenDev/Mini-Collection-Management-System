import { Outlet, useLocation } from "react-router-dom";
import { SideHeader, TopHeader, Footer } from "../components";
import { useState } from "react";

const Layout = () => {
  const location = useLocation(); // Get the current location (path)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Conditionally render the Header based on the current route
  const showHeader = location.pathname !== "/login";

  return (
    <>
      {/* Top Header */}
      <TopHeader />

      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar for Larger Screens */}
        {showHeader && (
          <div
            className={`${
              isSidebarOpen ? "absolute inset-0 bg-white z-50" : "hidden"
            } lg:block lg:relative w-full lg:w-1/6 bg-gray-100 border-b-4 lg:border-b-0 lg:border-r-4 transition-all duration-300`}
          >
            <SideHeader />
          </div>
        )}

        {/* Sidebar Toggle Button for Small Screens */}
        {showHeader && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-4 left-4 bg-blue-600 text-white p-2 rounded-full z-50 shadow-lg focus:outline-none"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        )}

        {/* Main Content */}
        <div className={`flex-1 bg-gray-100 overflow-auto`}>
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
