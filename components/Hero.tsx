"use client";

import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      className="jumbotron jumbotron-fluid text-white text-center"
      style={{
        backgroundImage: "url(/hero-bg.svg)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <h1 className="display-3">Welcome to SFO</h1>
        <p className="lead">Your gateway to the Bay Area and beyond.</p>
      </Container>
    </div>
  );
};

export default Hero;
