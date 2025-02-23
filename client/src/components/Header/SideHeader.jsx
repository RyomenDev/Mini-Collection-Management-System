import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderData from "../../data/HeaderData";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const userName = userData?.name;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside in mobile view
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  const { sideHeader } = HeaderData;

  return (
    <header className="flex flex-col h-screen">
      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:flex-col lg:items-start lg:justify-between ${
          isMenuOpen
            ? "flex flex-col absolute top-16 left-0 w-full bg-green-700 text-center py-4 z-10"
            : "hidden lg:flex"
        }`}
      >
        {/* Main Navigation Items */}
        {sideHeader.navItems.map(
          (item) =>
            item.active && (
              <li key={item.name} className="py-2 lg:py-0">
                <button
                  onClick={() => {
                    setIsMenuOpen(false); // Close menu on link click
                    navigate(item.slug);
                  }}
                  className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  {item.name}
                </button>
              </li>
            )
        )}
      </ul>

      {/* Auth & Support Items at the bottom of header */}
      <div className="flex-grow flex flex-col justify-end">
        <ul className="lg:flex lg:flex-col lg:items-start">
          {sideHeader.authItems(authStatus).map(
            (item) =>
              item.active && (
                <li key={item.name} className="py-2 lg:py-0">
                  {item.component ? (
                    <div className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300">
                      {item.component}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false); // Close menu on link click
                        navigate(item.slug);
                      }}
                      className="px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
