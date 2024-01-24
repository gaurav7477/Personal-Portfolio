import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Container } from "@mui/material";
import styled from "@emotion/styled";

import aboutImg from "../../images/abt.jpg";

const ColoredText = styled("span")({
  color: "green",
});

const About = () => {
  return (
    <>
    <Container>
      <Box
        sx={{
          mt: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: {xs: "column", md: "row"},
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 26, fontWeight: 600 }}>
            About Me
          </Typography>

          <Typography
            sx={{ fontSize: 18, fontWeight: 500, my: 3 }}
            color="GrayText"
          >
            Hey! My name is Gaurav Bairagi and Tech enthusiast with a love for
            reading. I am currently a sophomore at IIIT Bhopal pursuing B.tech
            degree in{" "}
            <ColoredText>Computer Science and Engineering.</ColoredText>
          </Typography>
          <Typography
            sx={{ fontSize: 18, fontWeight: 500, my: 3 }}
            color="GrayText"
          >
            I am an aspiring <ColoredText>Full Stack Web Developer</ColoredText>{" "}
            and also exploring the feild of Competitive Programming. I am
            currently learning <ColoredText>MERN</ColoredText> Stack Development
            and Data Structures and Algorithms<ColoredText>(DSA)</ColoredText>.
            I have good communication and interpersonal skills. Passionate in
            collaborating with new people and brainstorming on topics of mutual
            interest.
          </Typography>
          <Typography
            sx={{ fontSize: 18, fontWeight: 500, my: 3 }}
            color="GrayText"
          >
            Experience in being in-charge of various inter/intra school projects
            and held positions of responsibility as a House Captain, which
            instilled necessary skills to act as a better team leader and a{" "}
            <ColoredText>team player.</ColoredText>
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
      </Box>

    </Container>
    
  </>
  );
};

export default About;
