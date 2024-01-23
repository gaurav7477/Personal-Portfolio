import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import { OpenInNew } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const ProjectDialog = ({ project, open, handleClose }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {project.title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>{project.fullDescription}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          autoFocus
          href={project.GithubLink}
        >
          <GitHubIcon fontSize="small" sx={{ color: "primary", mr: 1 }} />
          <Typography>Github</Typography>
        </Button>
        <Button
          variant="contained"
          autoFocus
          href={project.ProjectLink}
        >
          <OpenInNew fontSize="small" sx={{ color: "primary", mr: 1 }} />
          <Typography>View Project</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
