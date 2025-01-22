import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

// Import the logo image
import logo from '../Asset/logo.png'; 

// Import icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Header() {
  return (
    <>
      {/* Top Bar Section */}
      <TopBar>
        <div className="email-section">
          <HiOutlineMail /> <span className="email">www.registerkaro.in</span>
        </div>
        <div className="divider"></div>
        <div className="phone-section">
          <FaPhone /> <span className="phone">+91 234 567 890</span>
        </div>
        <div className="divider"></div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </TopBar>

      <MainHeader>
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>
        <Nav />
      </MainHeader>
    </>
  );
}

const TopBar = styled.div`
  width: 97%;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .email-section, .phone-section, .social-icons {
    display: flex;
    align-items: center;
  }

  .email-section {
    font-weight: 500;
    margin-left: 2rem;
    
    .email {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    svg {
      font-size: 2rem;
    }
  }

  .phone-section {
    font-weight: 500;
    margin-left: 2rem;
    
    .phone {
      font-size: 1.6rem;
    }

    svg {
      font-size: 2rem;
      margin-right: 0.8rem; /* Adds space between the icon and phone number */
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
    flex-grow: 1;
    flex-wrap: nowrap;
    overflow-x: none;

    a {
      color: #fff;
      font-size: 2rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .divider {
    height: 20px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.helper};
    margin: 0 1rem;
  }
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  .logo {
    width: 150px;
    height: auto;
  }
`;

export default Header;
