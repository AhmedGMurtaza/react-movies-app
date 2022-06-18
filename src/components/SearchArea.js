import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function SearchArea() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#cccccc",
        height: "120px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextField
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
        style={{ width: "60%" }}
      />

      <Button
        size="small"
        variant="contained"
        color="info"
        style={{ margin: "30px 0 0 10px", width: "120px" }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchArea;
