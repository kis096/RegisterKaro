import React from 'react';
import styled from "styled-components";
import img1 from "../Asset/image1.png";
import img2 from "../Asset/image2.png";
import img3 from "../Asset/image3.png";
import img4 from "../Asset/image4.png";
import img5 from "../Asset/image5.png";
import img6 from "../Asset/image6.png";

const OurService = () => {
  return (
    <>
      <Wrapper>
        <h6>WELCOME TO REGISTERKARO.IN</h6>
        <h1>Explore our services</h1>
        <section className="image-text-section">
          <div className="image-text-grid">
            <div className="image-text-item">
              <img src={img1} alt="Company logo 1" />
              <h4>Company Secretarial Services</h4>
              <p>Make data-driven decisions and utilize technology to reach business goals.</p>
            </div>
            <div className="image-text-item">
              <img src={img2} alt="Company logo 2" />
              <h4>Company Secretarial Services</h4>
              <p>Make data-driven decisions and utilize technology to reach business goals.</p>
            </div>
            <div className="image-text-item">
              <img src={img3} alt="Nature scene 3" />
              <h4>Virtual Office Address</h4>
              <p>Foster customer relationships by effectively serving your market.</p>
            </div>
            <div className="image-text-item">
              <img src={img4} alt="Technology icon 4" />
              <h4>Annual Compliance Services</h4>
              <p>Turn your ideas into modern products with our design experts.</p>
            </div>
            <div className="image-text-item">
              <img src={img5} alt="Business graphic 5" />
              <h4>Payroll Services</h4>
              <p>Expand your business across the globe with minimal effort.</p>
            </div>
            <div className="image-text-item">
              <img src={img6} alt="Creative artwork 6" />
              <h4>Bookkeeping Services</h4>
              <p>Steering user behaviours with creative design, data insights & technology.</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  text-align: center; /* Centers the headings globally */
  
  h6 {
    color: orange; /* Sets the color of the h6 to orange */
    margin-bottom: 1rem;
  }

  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  .image-text-section {
    padding: 6rem 0;

    .image-text-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      .image-text-item {
        text-align: center;
        position: relative;
        padding: 0 1rem;
        border-right: 1px solid ${({ theme }) => theme.colors.text};

        &:nth-child(3n) {
          border-right: none; /* Remove border for the last column in each row */
        }

        img {
          width: 10%; /* Adjust image width */
          height: auto;
          border-radius: 10px;
        }

        h4 {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.heading};
        }

        p {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .image-text-grid {
      grid-template-columns: 1fr 1fr;

      .image-text-item {
        border-right: none; /* Remove border for mobile layout */
        &:not(:nth-child(2n)) {
          border-right: 1px solid ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;

export default OurService;
