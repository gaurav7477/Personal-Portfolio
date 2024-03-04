import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import XIcon from "@mui/icons-material/X";
const ColoredText = styled("span")({
  color: "#3ccf91",
});

const Footer = () => {
  return (
    <Card sx={{ mt: 20 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            Keep In Touch
          </Typography>
          <Typography sx={{width:{xs:"100%",md:"60%",xl:"40%"},textAlign:"center"}}>
            {" "}
            I'm currently specializing in{" "}
            <ColoredText>Backend-end Development.</ColoredText>
            Feel free to get in touch and talk more about your projects.
          </Typography>
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
          <Typography sx={{width:{xs:"100%",md:"60%",xl:"40%"},textAlign:"center"}}>
            {" "}
            Designed and Developed by <ColoredText>Gaurav Bairagi.</ColoredText>
            Built with React js & Material UI. Hosted on Vercel.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Footer;
