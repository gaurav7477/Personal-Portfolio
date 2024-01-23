import React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";
import LaptopTwoToneIcon from "@mui/icons-material/LaptopTwoTone";
import About from "./About.jsx";

const ColoredText = styled("span")({
  color: "white",
});
const Home = () => {
  return (

    <Container>
      <Box sx={{ my: 9 }}>
        <Typography sx={{ fontSize: 26, fontWeight: 600 }} color="green">
          Hey there!, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: 80, fontWeight: 700 }}
          color="#ffffff"
        >
          Gaurav Bairagi
        </Typography>

        <Typography
          sx={{ fontSize: 26, fontWeight: 700, my: 3 }}
          color="GrayText"
        >
          <ColoredText>
            Software Engineer.{" "}
          </ColoredText>
          A self-taught developer with a passion for building things and <br />
          solving problems with an interest in computer sciences.
        </Typography>

        <Stack spacing={1} direction="row" alignItems="center" sx={{ my: 2 }}>
          <RocketLaunchTwoToneIcon style={{ color: "red" }} />
          <Typography sx={{ fontSize: 17, fontWeight: 500 }} color="GrayText">
            Exploring Opportunities and Side Projects.
          </Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" sx={{ my: -1 }}>
          <LaptopTwoToneIcon style={{ color: "blue" }} />
          <Typography sx={{ fontSize: 17, fontWeight: 500 }} color="GrayText">
          Currently specializing in{" "} 
          <ColoredText>
            Backend-end Development.
          </ColoredText>
          </Typography>
        </Stack>

        <CardActions>
          <Stack spacing={4} direction="row" sx={{ my: 5 }}>
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
        </CardActions>
      </Box>

      <About/>
    </Container>
  );
};

export default Home;
