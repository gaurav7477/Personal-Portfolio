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
        flexDirection: {xs: "column", md: "row"},
        alignItems: {xs: "center", md: "flex-start"},
        justifyContent: {xs: "center", md: "space-around"},
        flexWrap: "wrap",
      }}


    >
      {filteredProjects.map((project, index) => (
        
          <Card key={index} sx={{ maxWidth: {xs:"80%",md:"45%"},p:1,m:2 }}>
            <CardActionArea sx={{display:"flex",
            flexDirection: {xs: "column", sm: "row"},
          }} onClick={() => handleClickOpen(project)} target="_blank">

              <CardMedia component="img" sx={{width:"35%"}} image={project.image} alt={project.title} />

              <CardContent
                sx={{
                  display:"flex",
                  flexDirection: "column",
                  height: "230px"
                }}
              >
                <Typography gutterBottom variant="h5" component="div" >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {project.smallDescription}
                </Typography>

                {/* Map over the technology array */}
                <Box sx={{
                  mt:2,
                  justifySelf:"flex-end",
                  }}>
                  {project.technology.map((tech, techIndex) => (
                    <Chip key={techIndex} label={tech} size="small" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </CardContent>

            </CardActionArea>
          </Card>
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