import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function ProgressBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={45} />
    </Box>
  );
}

export default ProgressBar;
