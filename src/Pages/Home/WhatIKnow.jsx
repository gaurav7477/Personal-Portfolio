import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SkillCard from "../Projects/skillCard";

function WhatIKnow() {
  return (
    <Container>
      {/* 
      //TODO: Make profile database and fetch Skills from there 
      */}
      <Typography
        variant="h4"
        sx={{
          mt: 2,
        }}
      >
        What I know
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <SkillCard
          skill={"Frontend"}
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Material-UI",
            "Next.js",
          ]}
        />
        <SkillCard skill={"Backend"} skills={["Node.js", "Express"]} />
        <SkillCard skill={"Database"} skills={["MySQL", "MongoDB"]} />
        <SkillCard skill={"DevOps"} skills={["Git"]} />
      </Box>
    </Container>
  );
}

export default WhatIKnow;
