import { useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  useEffect(() => {
    const body = document.body;
    const sidebar = document.querySelector("nav");
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const modeToggle = document.querySelector(".mode-toggle");

    // Initialize dark mode from localStorage
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      body.classList.add("dark");
    }

    // Initialize sidebar state
    const savedSidebar = localStorage.getItem("status");
    if (savedSidebar === "close") {
      sidebar?.classList.add("close");
    }

    // Toggle dark mode
    const handleModeToggle = () => {
      body.classList.toggle("dark");
      localStorage.setItem(
        "mode",
        body.classList.contains("dark") ? "dark" : "light"
      );
    };

    // Toggle sidebar
    const handleSidebarToggle = () => {
      sidebar?.classList.toggle("close");
      localStorage.setItem(
        "status",
        sidebar?.classList.contains("close") ? "close" : "open"
      );
    };

    modeToggle?.addEventListener("click", handleModeToggle);
    sidebarToggle?.addEventListener("click", handleSidebarToggle);

    return () => {
      modeToggle?.removeEventListener("click", handleModeToggle);
      sidebarToggle?.removeEventListener("click", handleSidebarToggle);
    };
  }, []);

  return (
    <nav>
      <div className="logo-name">
        <div className="logo-image">
          <i className="uil fa-solid fa-motorcycle"></i>
        </div>
        <span className="logo_name">BikeScheme</span>
      </div>

      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="uil uil-estate"></i>
              <span className="link-name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil fa-solid fa-gift"></i>
              <span className="link-name">Gift</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil fa-solid fa-money-check-dollar"></i>
              <span className="link-name">Apply for Scheme</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil fa-solid fa-motorcycle"></i>
              <span className="link-name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-users-alt"></i>
              <span className="link-name">Users</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-plus-circle"></i>
              <span className="link-name">Add Easypaisa</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-wallet"></i>
              <span className="link-name">Wallet</span>
            </a>
          </li>
        </ul>

        <ul className="logout-mode">
          <li>
            <a href="#">
              <i className="uil uil-signout"></i>
              <span className="link-name">Logout</span>
            </a>
          </li>

          <li class="mode">
            <a href="#">
              <i class="uil uil-moon"></i>
              <span class="link-name">Dark Mode</span>
            </a>

            <div class="mode-toggle">
              <span class="switch"></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
