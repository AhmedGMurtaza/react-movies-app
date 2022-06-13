import React from "react";
import Box from "@mui/material/Box";
import Card from "./Card";

function SearchResult() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#eaeaea",
        padding: "20px 10px",
        boxSizing: "border-box",
      }}
    >
      <Card title="helloworld" />
    </Box>
  );
}

export default SearchResult;
