import React, { useEffect, useState } from "react";
import client from "../../client";
import { Container, Typography } from "@mui/material";
import SearchBar from "./SearchBar.jsx";
import ProjectDisplay from "./ProjectDisplay.jsx";
import ProjectDialog from "./ProjectDialog";

const MultiActionAreaCard = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const query = `*[(_type == "projects" || _type == "otherProjects")]{
      title,
      smallDescription,
      fullDescription,
      technology,
      "image": image.asset->url,
      GithubLink,
      ProjectLink,
      _type
    }`;

    client
      .fetch(query)
      .then((data) => {
        const projectsData = data.filter((item) => item._type === "projects");
        const otherProjectsData = data.filter(
          (item) => item._type === "otherProjects"
        );

        setLatestProjects(projectsData);
        setOtherProjects(otherProjectsData);
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
      });
  }, []);


  const handleShowAllClick = () => {
    setSearchQuery("");
  };

  return (
    <Container sx={{ my: 15 }}>
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

      {/* Display Other Projects */}
      <Typography
        variant="h2"
        sx={{ fontSize: 40, fontWeight: 600, mt: 7, mb: 3 }}
        color="white"
      >
        My Other Projects...
      </Typography>

      <ProjectDisplay
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
