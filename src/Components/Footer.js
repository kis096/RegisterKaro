import React from "react";
import styled from "styled-components";
import { FaApple, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* Footer section with the new vertical layout */}
        <footer>
          <div className="container grid grid-vertical-row">
            {/* Start a Business Section */}
            <div className="footer-section">
              <h3>START A BUSINESS</h3>
              <ul>
                <li>Features</li>
                <li>Solutions</li>
                <li>Integrations</li>
              </ul>
            </div>

            {/* Government Registration Section */}
            <div className="footer-section">
              <h3>GOVERNMENT REGISTRATION</h3>
              <ul>
                <li>Partner</li>
                <li>Community</li>
                <li>Developers</li>
              </ul>
            </div>

            {/* Compliance & Tax Section */}
            <div className="footer-section">
              <h3>COMPLIANCE & TAX</h3>
              <ul>
                <li>Channel</li>
                <li>Scale</li>
                <li>Watch Demo</li>
              </ul>
            </div>

            {/* BIS & CDSCO Section */}
            <div className="footer-section">
              <h3>BIS & CDSCO</h3>
              <ul>
                <li>About Us</li>
                <li>News</li>
                <li>Media Kit</li>
              </ul>
            </div>
          </div>

          {/* Footer bottom section with icons and rights reserved */}
          <div className="footer-bottom">
            <p>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            <div className="footer-icons">
              <FaApple className="footer-icon" />
              <FaGoogle className="footer-icon" />
              <FaInstagram className="footer-icon" />
            </div>
            <p>Registerkaro All Rights Reserved</p>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  footer {
    padding: 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
    }

    .footer-section {
      h3 {
        margin-bottom: 1.5rem;
        color: orange; /* Set heading color to orange */
        font-size: 1.8rem;
        font-weight: bold;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          color: white; /* Explicitly set content color to white */
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }
      }
    }

    /* Footer bottom styles */
    .footer-bottom {
      text-align: center;
      margin-top: 3rem;
      color: white;

      .footer-icons {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1.5rem;

        .footer-icon {
          color: white;
          font-size: 2.4rem;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    footer {
      .grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-section {
        text-align: center;
      }

      .footer-section ul {
        text-align: center;
      }
    }
  }
`;

export default Footer;
