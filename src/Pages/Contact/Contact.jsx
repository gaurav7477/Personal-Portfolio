import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

const ColoredText = styled("span")({
    color: "green",
  });

const Contact = () => {
  return (
    <Container>
    <Box sx={{ my: 15 }}>
      <Typography variant="h1" sx={{ fontSize: 32, fontWeight: 600, mb: 4 }}>
        Contact Me
      </Typography>

      <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 500, mb: 4 }}>
        I am available for Freelancing and Part-Time Internships. <br />Call on{" "}
        
        <ColoredText>
        +91 7477000764
          </ColoredText> or email{" "}
        <ColoredText>
        bairagi7477@gmail.com
          </ColoredText>
      </Typography>

      <form>
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

        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      {/* Add your map images or any additional content here */}

    </Box>
    </Container>
  );
};

export default Contact;
