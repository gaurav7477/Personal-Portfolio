import React, { useEffect, useState } from "react";
import client from "../../client";
import { Avatar, Container, Typography } from "@mui/material";
import SearchBar from "./SearchBar.jsx";
import ProjectDisplay from "./ProjectDisplay.jsx";
import ProjectOtherDisplay from "./ProjectOtherDisplay.jsx";
import ProjectDialog from "./ProjectDialog";
import { Box } from "@mui/system";
import bg from "../../images/cover.jpeg";
import profile from "../../images/abt.jpg";
import SkillCard from "./skillCard.jsx";

const MultiActionAreaCard = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const query = `*[_type == "projects"]{
      title,
      smallDescription,
      fullDescription,
      technology,
      "image": image.asset->url,
      GithubLink,
      ProjectLink,
      isLatest,
      _type,
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched data:", data);

        const latestProjectsData = data.filter(
          (project) => project.isLatest === "Latest_Project"
        );
        const otherProjectsData = data.filter(
          (project) => project.isLatest === "Other_Project"
        );

        setLatestProjects(latestProjectsData);
        setOtherProjects(otherProjectsData);
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
      });
  }, []);

  console.log(latestProjects);
  console.log(otherProjects);

  const handleShowAllClick = () => {
    setSearchQuery("");
  };

  return (
    <Container sx={{ my: 15 }}>
      <Box
        sx={{
          width: "100%",
          height: "22vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          mb: 5,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={profile}
          sx={{ width: 110, height: 110, my: 4, mx: 3 }}
        />
      </Box>

      <Typography
        variant="h1"
        sx={{ fontSize: 70, fontWeight: 700 }}
        color="#ffffff"
      >
        Projects
      </Typography>

      <Typography sx={{ fontSize: 18, fontWeight: 500 }} color="white">
        I love building projects and practice my engineering skills, here's an
        archive of things that I've worked on.
      </Typography>

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onShowAllClick={handleShowAllClick}
      />

      {/* Display Latest Projects */}

      <Typography
        variant="h2"
        sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}
        color="white"
      >
        My Latest Projects...
      </Typography>

      <ProjectDisplay
        allProjects={latestProjects}
        handleClickOpen={handleClickOpen}
        searchQuery={searchQuery}
      />

      {/* skills  */}
      <Typography sx={{ fontSize: 40, fontWeight: 600, my: 5 }} color="white">
        What I know
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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

      {/* Display Other Projects */}
      <Typography
        variant="h2"
        sx={{ fontSize: 40, fontWeight: 600, mt: 7, mb: 3 }}
        color="white"
      >
        My Other Projects...
      </Typography>

      <ProjectOtherDisplay
        allProjects={otherProjects}
        handleClickOpen={handleClickOpen}
        searchQuery={searchQuery}
      />

      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={openDialog}
          handleClose={handleCloseDialog}
        />
      )}
    </Container>
  );
};

export default MultiActionAreaCard;
