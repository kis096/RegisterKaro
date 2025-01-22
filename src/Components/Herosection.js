import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/Button'; // Named import
import { NavLink } from 'react-router-dom';
import heroImage from '../Asset/hero.png'; // Import image directly

function Herosection({ myData }) {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          {/* Hero Section Data */}
          <div className="hero-section-data">
            <h1>{name}</h1>
            <p>
              An online business compliance platform that helps entrepreneurs and <br />
              other individuals with various registrations, tax filings, and other legal <br />
              matters.
            </p>
            <NavLink to="/talk">
              <Button className="talk-expert-btn">Talk An Expert</Button>
            </NavLink>
          </div>

          {/* Hero Section Image */}
          <div className="hero-section-image">
            <figure>
              <div className="image-container">
                <img
                  src={heroImage} // Use imported image here
                  alt="hero-section-photo"
                  className="img-style"
                />
              </div>

              {/* Text Boxes inside figure */}
              <div className="text-boxes-inside">
                <div className="box">
                  <h3>Annual Roll</h3>
                </div>
                <div className="box">
                  <h3>Payroll</h3>
                </div>
                <div className="box">
                  <h3>Company Performance</h3>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12rem 0;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 2rem; /* Space between the columns */
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    h1 {
      margin-left: 3rem; /* Left margin for the h1 tag */
      text-transform: capitalize;
      font-weight: bold;
    }

    p {
      margin: 2rem 0;
      margin-left: 3rem; /* Left margin for paragraph */
      font-size: 19px; /* Increased font size */
    }

    .talk-expert-btn {
      margin-left: 3rem; /* Left margin for the button */
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      display: flex; /* Flex layout to arrange image and text box side by side */
      width: 100%;
      height: 100%;
      position: relative;

      .image-container {
        width: 50%; /* Take up half of the space */
        height: 100%;
        overflow: hidden; /* Ensures the image does not overflow */
      }

      .img-style {
        width: 100%;
        height: auto;
      }

      .text-boxes-inside {
        width: 50%; /* Take up the other half of the space */
        position: absolute;
        top: 10;
        right: 0; /* Align to the right of the figure */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        background-color: rgba(241, 241, 242, 0.2); /* Background for text box container */
        padding: 2rem;
        border-radius: 8px; /* Optional: Rounded corners for the background */
      }

      .box {
        padding: 1rem;
        background-color: rgba(229, 228, 234, 0.7); /* Light background color for text boxes */
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        flex: 1;

        h3 {
          font-size: 1.8rem;
          font-weight: bold;
          color: black; /* Changed text color to black */
          margin: 0;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr; /* Stack the columns on smaller screens */
      gap: 2rem;
    }

    .hero-section-image figure {
      flex-direction: column; /* Stack the figure content vertically */
    }

    .hero-section-image .text-boxes-inside {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      width: 100%;
    }
  }
`;

export default Herosection;
