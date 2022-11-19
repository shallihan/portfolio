import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Arrow } from "../assets/svgs";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 14px;
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
    @media (prefers-color-scheme: dark) {
      background: #161519;
      color: #DDDDDD;
    }
  }
  h1, h2, h3, p, span {
    margin: 0;
    padding: 0;
    
  }
  h1 {
    font-size: 14px;
    line-height: 22px;
  }
  a {
      color: #828fff;
  }
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    div {
      grid-column: 2 / span 6;
      display: flex;
      flex-direction: column;
      gap: 21px;
      margin: 4rem 0;
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
            Frontend developer{" "}
            <a href="https://www.agencyx.ie" target={"_blank"}>
              @agencyx
            </a>{" "}
            — building component driven digital products.
          </p>
          <Enquiry>
            Email <Arrow />
            mail@shaunahallihan.com
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
  }
`;

export default IndexPage;

export const Head = () => <title>Shauna Hallihan</title>;
