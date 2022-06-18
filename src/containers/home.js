import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ProgressBar from "../components/ProgressBar";
import SearchArea from "../components/SearchArea";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Home() {
  const [movies, setMovies] = React.useState([]);
  // fetch all movies on initial load
  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7e8953e4e1fdf1db393119c8e527facc"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovies(() => json.results.slice(0, 12));
      });
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

        <Box
          sx={{
            width: "100%",
            background: "#eaeaea",
            padding: "20px 10px",
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {movies &&
            movies.map((movie) => (
              <Card title={movie.original_title} imageUrl={movie.poster_path} />
            ))}
        </Box>
      </Container>
      {/* content wrapper  */}
    </Box>
  );
}

export default Home;
