// import React, { useState, useEffect } from "react";
import React, { useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";



const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  
  // console.log(movies);
  
  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };
  
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('xyz');
  //     console.log(trailerUrl)
  //   } else {
  //     movieTrailer(movie?.name || "")
  //     .then( (url) => {
  //         console.log(movie.name)
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         const mURL=urlParams.get("v")
  //         console.log(mURL) 
  //         setTrailerUrl(mURL);
  //         console.log(trailerUrl) 
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
