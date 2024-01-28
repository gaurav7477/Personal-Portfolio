import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import About from "./About.jsx";
import WhatIKnow from "./WhatIKnow.jsx";

const ColoredText = styled("span")({
  color: "#3ccf91",
});
const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          height: "75vh",
          mt: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: 26, fontWeight: 600 }} color="#3ccf91">
          Hello there! I'm
        </Typography>
        <Typography variant="h1" color="#ffffff" fontFamily="sans-serif">
          Gaurav Bairagi
        </Typography>

        <Typography
          sx={{ my: 3 }}
          variant="h6"
          color="GrayText"
          width={{ xs: "100%", md: "69%" }}
        >
          A creative <ColoredText>Software Engineer</ColoredText> on a journey
          of constant learning and innovation. I thrive on transforming ideas
          into reality, utilizing my self-taught skills and unwavering passion
          for problem-solving. Let's build something extraordinary together in
          the fascinating world of computer sciences!
        </Typography>

        <Stack spacing={1} direction="row" alignItems="center" sx={{ my: 2 }}>
          {/* <RocketLaunchTwoToneIcon style={{ color: "red" }} /> */}
          <Typography color="GrayText">
            🚀 Exploring exciting opportunities and side projects.
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" sx={{ my: -1 }}>
          {/* <LaptopTwoToneIcon style={{ color: "blue" }} /> */}
          <Typography color="GrayText">
            💻 Currently working on{" "}
            <ColoredText>Full Stack Development.</ColoredText>
          </Typography>
        </Stack>

        <Stack
          spacing={4}
          direction="row"
          sx={{ my: 5, justifyContent: "center" }}
        >
          <Button
            variant="text"
            startIcon={<GitHubIcon style={{ color: "#3ccf91" }} />}
            style={{ color: "white" }}
            sx={{
              "&:hover": { backgroundColor: "darkgray" },
              fontWeight: 600,
            }}
            onClick={() => {
              window.open("https://github.com/gaurav7477");
              // https://twitter.com/GruB7477
            }}
          >
            Github
          </Button>

          <Button
            variant="text"
            startIcon={<LinkedInIcon style={{ color: "#3ccf91" }} />}
            style={{ color: "white" }}
            sx={{
              "&:hover": { backgroundColor: "darkgray" },
              fontWeight: 600,
            }}
            onClick={() => {
              window.open("https://www.linkedin.com/in/gaurav-bairagi/");
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="text"
            startIcon={<EmailIcon style={{ color: "#3ccf91" }} />}
            style={{ color: "white" }}
            sx={{
              "&:hover": { backgroundColor: "darkgray" },
              fontWeight: 600,
            }}
            onClick={() => {
              window.open("mailto:bairagi7477@mail.com");
            }}
          >
            Email
          </Button>
          <Button
            variant="text"
            startIcon={<XIcon style={{ color: "#3ccf91" }} />}
            style={{ color: "white" }}
            sx={{
              "&:hover": { backgroundColor: "darkgray" },
              fontWeight: 600,
            }}
            onClick={() => {
              window.open("https://twitter.com/GruB7477");
            }}
          >
            Twitter
          </Button>
        </Stack>
      </Box>

      <About />
      <WhatIKnow />
    </Container>
  );
};

export default Home;
