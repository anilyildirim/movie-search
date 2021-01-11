import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul className="fetch-data-list">
      { props.movie.map(movie => {
        return (
          <Movie 
            viewMovieInfo= { props.viewMovieInfo}
            key={ movie.id } 
            movieId= { movie.id } 
            image= { movie.poster_path } 
            alt={ movie.title}
            title= { movie.original_title }  
          />
        )
      })
    }
    </ul>
  )
}

export default MovieList;