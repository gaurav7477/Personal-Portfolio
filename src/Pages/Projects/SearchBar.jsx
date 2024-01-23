import React from "react";
import { Button, Input } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery, onShowAllClick }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search projects"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onShowAllClick}
        sx={{ marginTop: 2 }}
      >
        Show All Projects
      </Button>
    </div>
  );
};

export default SearchBar;
