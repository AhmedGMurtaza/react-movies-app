import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ProgressBar from "../components/ProgressBar";
import SearchArea from "../components/SearchArea";
import Navbar from "../components/Navbar";
import SearchResult from "../components/SearchResult";

function Home() {
  // fetch all movies on initial load
  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7e8953e4e1fdf1db393119c8e527facc"
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ProgressBar />
      <Navbar />

      {/* content wrapper  */}
      <Container maxWidth="xl">
        {/* search bar area  */}
        <SearchArea />

        {/* movies with alphabetical filter  */}
        <SearchResult />
      </Container>
      {/* content wrapper  */}
    </Box>
  );
}

export default Home;
