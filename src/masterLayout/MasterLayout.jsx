import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";
import ThemeToggleButton from "../helper/ThemeToggleButton";

const MasterLayout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleDropdownClick = (event) => {
      event.preventDefault();
      const clickedLink = event.currentTarget;
      const clickedDropdown = clickedLink.closest(".dropdown");

      if (!clickedDropdown) return;

      const isActive = clickedDropdown.classList.contains("open");

      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const submenu = dropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = "0px";
        }
      });

      if (!isActive) {
        clickedDropdown.classList.add("open");
        const submenu = clickedDropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = `${submenu.scrollHeight}px`;
        }
      }
    };

    const dropdownTriggers = document.querySelectorAll(
      ".sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link"
    );

    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleDropdownClick);
    });

    const openActiveDropdown = () => {
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        const submenuLinks = dropdown.querySelectorAll(".sidebar-submenu li a");
        submenuLinks.forEach((link) => {
          if (
            link.getAttribute("href") === location.pathname ||
            link.getAttribute("to") === location.pathname
          ) {
            dropdown.classList.add("open");
            const submenu = dropdown.querySelector(".sidebar-submenu");
            if (submenu) {
              submenu.style.maxHeight = `${submenu.scrollHeight}px`;
            }
          }
        });
      });
    };

    openActiveDropdown();

    return () => {
      dropdownTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleDropdownClick);
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) setProfileOpen(false);
      if (!event.target.closest(".notification-dropdown")) setNotificationOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleSidebar = () => setSidebarActive(!sidebarActive);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <section className={mobileMenu ? "overlay active" : "overlay"}>
      <main className={sidebarActive ? "dashboard-main active" : "dashboard-main"}>
        <div className='navbar-header'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-4'>
                <div className="logoimggg">
                  <img src="assets/images/grip/logo.png" className="header-logo-img" alt="Logo" />
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-3'>
                {/* Notification Dropdown */}
                <div className='dropdown notification-dropdown position-relative'>
                  <button
                    className='has-indicator w-40-px h-40-px bg-gradient-blue-warning text-white rounded-circle d-flex justify-content-center align-items-center'
                    type='button'
                    onClick={() => setNotificationOpen(!notificationOpen)}
                  >
                    <Icon icon='iconoir:bell' className='text-white text-xl' />
                  </button>
                  {notificationOpen && (
                    <div className='dropdown-menu show to-top dropdown-menu-lg p-0 custom-dropdown-position'>
                      {/* Notification content */}
                      <div className='m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                        <h6 className='text-lg text-primary-light fw-semibold mb-0'>Notifications</h6>
                        <span className='text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center'>01</span>
                      </div>
                      <div className='max-h-400-px overflow-y-auto scroll-sm pe-4'>
                        {/* Your notification links go here */}
                        {/* Sample Notification */}
                        <Link to='#' className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'>
                          <div className='d-flex align-items-center gap-3'>
                            <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                              <Icon icon='bitcoin-icons:verify-outline' className='icon text-xxl' />
                            </span>
                            <div>
                              <h6 className='text-md fw-semibold mb-4'>Congratulations</h6>
                              <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                                Your profile has been Verified.
                              </p>
                            </div>
                          </div>
                          <span className='text-sm text-secondary-light flex-shrink-0'>23 Mins ago</span>
                        </Link>
                      </div>
                      <div className='text-center py-12 px-16'>
                        <Link to='#' className='text-primary-600 fw-semibold text-md'>
                          See All Notification
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Dropdown */}
                <div className='dropdown profile-dropdown position-relative '>
                  <div
                    className='d-flex align-items-center cursor-pointer'
                    onClick={() => setProfileOpen(!profileOpen)}
                  >
                    <img
                      src='assets/images/grip/vk.jpeg'
                      alt='Profile'
                      className='w-40-px mr-10 h-40-px object-fit-cover rounded-circle'
                    />
                    <span className='ms-2'>Vignesh Prathap</span>
                  </div>
                  {profileOpen && (
                    <div className='dropdown-menu show to-top dropdown-menu-sm custom-dropdown-position'>
                      <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                        <div>
                          <h6 className='text-lg text-primary-light fw-semibold mb-2'>Vignesh Prathap</h6>
                          <span className='text-secondary-light fw-medium text-sm'>Software Engineer</span>
                        </div>
                        <button type='button' className='hover-text-danger' onClick={() => setProfileOpen(false)}>
                          <Icon icon='radix-icons:cross-1' className='icon text-xl' />
                        </button>
                      </div>
                      <ul className='to-top-list'>
                        <li>
                          <Link className='dropdown-item d-flex align-items-center gap-3' to='/'>
                            <Icon icon='solar:user-linear' className='icon text-xl' />
                            My Profile
                          </Link>
                        </li>

                        <li>
                          <Link className='dropdown-item d-flex align-items-center gap-3 text-danger' to='#'>
                            <Icon icon='lucide:power' className='icon text-xl' />
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* dashboard-main-body */}
        <div className='dashboard-main-body'>{children}</div>

        {/* Footer */}
        <footer className='d-footer'>
          <div className='row'>
            <div className='colauto'>
              <p className='mb-0 text-center'>© 2025 GRIP. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default MasterLayout;
