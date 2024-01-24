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

const ColoredText = styled("span")({
  color: "green",
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
  )
}

export default Footer