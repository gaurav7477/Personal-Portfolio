import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Container } from "@mui/material";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import aboutImg from "../../images/abt.jpg";

const ColoredText = styled("span")({
  color: "green",
});

const About = () => {
  return (
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

      <Card sx={{ my: 20 }}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: 32, my: 2, fontWeight: 600 }}
            >
              Keep In Touch
            </Typography>
            <Typography variant="body1" paragraph>
              {" "}
              I'm currently specializing in{" "}
              <ColoredText>Backend-end Development.</ColoredText>
              <br />
              Feel free to get in touch and talk more about your projects.
            </Typography>
            <Stack
              spacing={4}
              direction="row"
              sx={{ my: 5, alignItems: "center" }}
            >
              <Button
                variant="text"
                startIcon={<GitHubIcon style={{ color: "green" }} />}
                style={{ color: "white" }}
                sx={{
                  "&:hover": { backgroundColor: "darkgray" },
                  fontWeight: 600,
                }}
              >
                Github
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedInIcon style={{ color: "green" }} />}
                style={{ color: "white" }}
                sx={{
                  "&:hover": { backgroundColor: "darkgray" },
                  fontWeight: 600,
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                startIcon={<EmailIcon style={{ color: "green" }} />}
                style={{ color: "white" }}
                sx={{
                  "&:hover": { backgroundColor: "darkgray" },
                  fontWeight: 600,
                }}
              >
                Email
              </Button>
            </Stack>
            <Typography variant="body1" paragraph>
              {" "}
              Designed and Developed by{" "}
              <ColoredText>Gaurav Bairagi.</ColoredText>
              <br />
              Built with React js & Material UI. Hosted on Vercel.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
