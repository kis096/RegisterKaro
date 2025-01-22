import React from "react";
import styled from "styled-components";
import aboutImage from "../Asset/about.png"; // Replace with your image path

const About = () => {
  return (
    <Wrapper>
      <div className="about-container">
        {/* Left Section: Text */}
        <div className="about-text">
          <h6>Welcome To <span>RegisterKaro.in</span></h6>
          <h2>About <span>Register Karo</span></h2>
          <p>
            We are a company dedicated to providing the best services and solutions to our clients.
            Our mission is to make a positive impact by delivering excellence in every project we undertake.
          </p>
          <p>
            With a team of experienced professionals, we prioritize innovation, integrity, and customer satisfaction.
            Join us on our journey as we continue to grow and achieve greater milestones together.
          </p>
          <button className="learn-more">Learn More</button>
        </div>

        {/* Right Section: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 2rem;

    .about-text {
      flex: 1;

      h6 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #000; /* Black color */
        span {
          color: orange; /* Orange color for RegisterKaro */
        }
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #000; /* Black color */
        span {
          color: orange; /* Orange color for RegisterKaro */
        }
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.text || "#555"};
        margin-bottom: 1rem;
      }

      .learn-more {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.8rem 1.5rem;
        background-color: orange;
        color: #fff;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: darkorange;
        }
      }
    }

    .about-image {
      flex: 1;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile || "768px"}) {
    .about-container {
      flex-direction: column;
      text-align: center;

      .about-image,
      .about-text {
        flex: unset;
      }

      .about-image {
        margin-top: 2rem;
      }
    }
  }
`;

export default About;
