import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Arrow } from "../assets/svgs";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    line-height: 22px;
  }
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Inter', sans-serif;
    background: #DDDDDD;
    color: #333333;
  }
  h1, h2, h3, p, span {
    margin: 0;
    padding: 0;
    
  }
  h1 {
    font-size: 16px;
    line-height: 22px;
    font-weight: 200;
  }
  a {
      color: #828fff;
  }
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    div {
      grid-column: 2 / 12;
      display: flex;
      flex-direction: column;
      gap: 21px;
      margin: 2rem 0;
      max-width: 450px;
    }
  }
  @media (min-width: 640px) {
    main {
      div {
        margin: 3rem 0;
      }
    }
  }
  @media (min-width: 1024px) {
    main {
      div {
        margin: 4rem 0;
      }
    }

  }
  @media (prefers-color-scheme: dark) {
    html, body {
      background: #161519;
      color: #DDDDDD;
    }
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <div>
          <h1>Shauna Hallihan</h1>
          <p>
            Frontend developer — building component driven digital products.
          </p>
          <Enquiry>
            Email <Arrow />
            <a href="mailto:mail@shaunahallihan.com">mail@shaunahallihan.com</a>
          </Enquiry>
        </div>
      </main>
    </>
  );
};

const Enquiry = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    height: 10px;
    width: auto;
    path {
      fill: #333333;
    }
  }
  @media (prefers-color-scheme: dark) {
    svg {
      path {
        fill: #dddddd;
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Shauna Hallihan</title>;
