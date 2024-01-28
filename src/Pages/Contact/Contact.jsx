import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import styled from "@emotion/styled";
import map from "../../images/map.png";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const ColoredText = styled("span")({
  color: "#3ccf91",
});

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: "15vh" }}>
        Contact Me
      </Typography>

      <Typography sx={{ mt: 1, width: "60%" }}>
        Available for Freelancing and Part-Time Internships. Call on{" "}
        <ColoredText>+91 7477000764</ColoredText> or email{" "}
        <ColoredText>bairagi7477@gmail.com</ColoredText>
      </Typography>

      <Stack
        spacing={4}
        direction="row"
        sx={{ my: 5, justifyContent: "center"}}
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

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ width: "100%", height: "100%", textAlign: "center", mt: 2 }}
          >
            <img src={map} alt="map" width="90%" height="auto" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", mt: { xs: 2, md: 0 } }}>
            <form >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />

              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />

              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2, width: "20%" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
