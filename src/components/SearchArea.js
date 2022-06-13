import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function SearchArea() {
  <Box sx={{ width: "100%", background: "#cccccc", height: "200px" }}>
    <TextField
      fullWidth
      id="standard-basic"
      label="Standard"
      variant="standard"
    />

    <Button size="small" color="inherit">
      Search
    </Button>
  </Box>;
}

export default SearchArea;
