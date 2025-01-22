import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";


// 
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false); // State to manage mobile menu toggle

  return (
    <MainNav>
      {/* Navbar */}
      <div className={`navbar ${menuIcon ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="navbar-link"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="navbar-link"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talk"
              className="navbar-link talk-to-expert"
              onClick={() => setMenuIcon(false)} // Close the menu on link click
            >
              Talk to Expert
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-navbar-btn">
          {!menuIcon ? (
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)} // Open the menu
            />
          ) : (
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)} // Close the menu
            />
          )}
        </div>
      </div>
    </MainNav>
  );
};

const MainNav = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      list-style: none;

      .navbar-link {
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }

      .talk-to-expert {
        background-color: orange;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: bold;
        transition: all 0.3s ease;

        &:hover {
          background-color: darkorange;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
    }

    .navbar {
      flex-direction: column;

      .navbar-lists {
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;
      }

      .navbar.active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export default Nav;
