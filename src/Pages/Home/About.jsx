import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Container } from "@mui/material";
import styled from "@emotion/styled";

import aboutImg from "../../images/abt.jpg";

const ColoredText = styled("span")({
  color: "#3ccf91",
});

const About = () => {
  return (
    <Container
      sx={{
        height: "75vh",
        mt: 20,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box>
        <Typography variant="h4">⚡About Me</Typography>

        <Typography
          sx={{ fontSize: 18, fontWeight: 500, my: 3 }}
          color="GrayText"
        >
          Hey! My name is Gaurav Bairagi and Tech enthusiast with a love for
          coding. I am currently a sophomore at IIIT Bhopal pursuing B.tech
          degree in <ColoredText>Computer Science and Engineering.</ColoredText>
        </Typography>
        <Typography
          sx={{ fontSize: 18, fontWeight: 500, my: 3 }}
          color="GrayText"
        >
          I am an aspiring <ColoredText>Full Stack Web Developer</ColoredText>{" "}
          ,ready to bring your dream product to life in the virtual world.
          Whether you need a sleek website for your business or have an idea for
          a tech product, I've got the skills to bring it to life. I'm
          proficient in{" "}
          <ColoredText>
            JavaScript, React.js, Node.js, Express.js, CSS, and Data Structures
            and Algorithms
          </ColoredText>
          (DSA), ensuring your online presence stands out. I specialize in
          creating user-friendly interfaces, building strong APIs, and
          seamlessly integrating external services to enhance your digital
          presence.
        </Typography>
      </Box>

      <Avatar
        sx={{
          width: "calc(100vh/2)",
          height: "calc(100vh/2)",
          borderRadius: "50%",
          ml: 4,
          objectFit: "cover",
        }}
        src={aboutImg}
        alt=""
      />
    </Container>
  );
};

export default About;
