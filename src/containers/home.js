import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import ProgressBar from "../components/ProgressBar";
import SearchArea from "../components/SearchArea";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  // fetch all movies on initial load
  React.useEffect(() => {
    if (isSending) return;
    setIsSending(true);
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7e8953e4e1fdf1db393119c8e527facc"
    )
      .then((response) => response.json())
      .then((json) => {
        setIsSending(false);
        console.log(json);
        setMovies(() => json.results.slice(0, 12));
      });
  }, [setIsSending]);

  let handleSearch = React.useCallback(() => {
    console.log(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=7e8953e4e1fdf1db393119c8e527facc`
    );
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=7e8953e4e1fdf1db393119c8e527facc`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovies(() => json.results.slice(0, 12));
      });
  }, [searchTerm]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ProgressBar />
      <Navbar />

      {/* content wrapper  */}
      <Container maxWidth="xl">
        {/* search bar area  */}
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm}

          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={handleSearch}
            style={{ margin: "30px 0 0 10px", width: "120px" }}
          >
            Search
          </Button>
        </Box>

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

          {/* until movies are fetched show loading  */}
          {isSending && <CircularProgress />}
        </Box>
      </Container>
      {/* content wrapper  */}
    </Box>
  );
}

export default Home;
