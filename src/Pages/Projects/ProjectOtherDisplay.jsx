// ProjectDisplay.jsx

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";

const ProjectDisplay = ({ allProjects, handleClickOpen, searchQuery }) => {
  const [filteredProjects, setFiltered] = useState(allProjects)
  useEffect(() => {
    const results = allProjects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(results);
  }, [searchQuery, allProjects]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {xs: "center", md: "space-around"},
        flexWrap: "wrap",
      }}


    >
      {filteredProjects.map((project, index) => (
        <Box
        sx={{
          p:2
        }}
        key={index}>
          <Card sx={{ width: 200 }}>
            <CardActionArea onClick={() => handleClickOpen(project)} target="_blank">
              <CardMedia component="img" height="80" image={project.image} alt={project.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:15}}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:10}}>
                  {project.smallDescription}
                </Typography>

                {/* Map over the technology array */}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ my: 2 }}>
                    Tech Stack
                  </Typography>
                  {project.technology.map((tech, techIndex) => (
                    <Chip key={techIndex} label={tech} size="small" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDisplay;




/*
void search(string, AllProjects) {
  return searchedArray;
}

main{
  mainArray => latestArrray, otherArray

  search(string, latesArray) 
  search(string, otherArray) 
}


*/